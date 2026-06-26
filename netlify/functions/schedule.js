import pg from 'pg';

const { Pool } = pg;

const jsonHeaders = {
  'Content-Type': 'application/json',
};

const netlifyFormName = 'schedule-request';
const allowedDurations = [15, 30, 60];
const scheduleStartHour = 10;
const scheduleEndHour = 16;
const fixedTimezone = 'Europe/Skopje';

let pool;

const getPool = () => {
  if (!process.env.SUPABASE_DATABASE_URL) {
    throw new Error('SUPABASE_DATABASE_URL is not configured.');
  }

  if (!pool) {
    pool = new Pool({
      connectionString: process.env.SUPABASE_DATABASE_URL,
      max: 1,
      ssl: {
        rejectUnauthorized: false,
      },
    });
  }

  return pool;
};

const respond = (statusCode, body) => ({
  statusCode,
  headers: jsonHeaders,
  body: JSON.stringify(body),
});

const cleanString = (value, maxLength) => {
  const cleaned = String(value ?? '').trim();
  return cleaned.slice(0, maxLength);
};

const parseBody = (event) => {
  if (!event.body) {
    return {};
  }

  const body = event.isBase64Encoded
    ? Buffer.from(event.body, 'base64').toString('utf8')
    : event.body;

  return JSON.parse(body);
};

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const normalizeDate = (value) => {
  const date = cleanString(value, 20);
  if (!date) {
    return null;
  }

  return /^\d{4}-\d{2}-\d{2}$/.test(date) ? date : null;
};

const normalizeTime = (value) => {
  const time = cleanString(value, 20);
  if (!time) {
    return '';
  }

  return /^\d{2}:\d{2}$/.test(time) ? time : '';
};

const normalizeDuration = (value) => {
  const duration = Number.parseInt(value ?? '30', 10);
  return Number.isFinite(duration) ? duration : 30;
};

const formatTimeOption = (minutesFromMidnight) => {
  const hours = Math.floor(minutesFromMidnight / 60);
  const minutes = minutesFromMidnight % 60;
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
};

const getAllowedTimes = (durationMinutes) => {
  const duration = allowedDurations.includes(durationMinutes) ? durationMinutes : 30;
  const start = scheduleStartHour * 60;
  const end = scheduleEndHour * 60;
  const times = [];

  for (let current = start; current <= end; current += duration) {
    times.push(formatTimeOption(current));
  }

  return times;
};

const timeToMinutes = (time) => {
  const [hours, minutes] = time.split(':').map((part) => Number.parseInt(part, 10));
  return (hours * 60) + minutes;
};

const getFixedTimezoneNow = () => {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: fixedTimezone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    hourCycle: 'h23',
  }).formatToParts(new Date());

  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));

  return {
    date: `${values.year}-${values.month}-${values.day}`,
    minutes: (Number.parseInt(values.hour, 10) * 60) + Number.parseInt(values.minute, 10),
  };
};

const isPastOrCurrentSlot = (date, time) => {
  const now = getFixedTimezoneNow();

  if (date < now.date) {
    return true;
  }

  if (date > now.date) {
    return false;
  }

  return timeToMinutes(time) <= now.minutes;
};

const slotsOverlap = (slotStart, slotDuration, existingStart, existingDuration) => {
  const slotEnd = slotStart + slotDuration;
  const existingEnd = existingStart + existingDuration;
  return slotStart < existingEnd && existingStart < slotEnd;
};

const getExistingSchedulesForDate = async (date) => {
  const query = `
    select preferred_time, coalesce(duration_minutes, 30)::int as duration_minutes
    from public.scheduling_requests
    where preferred_date = $1
      and status in ('new', 'confirmed')
  `;

  const result = await getPool().query(query, [date]);
  return result.rows;
};

const getAvailability = async (date, durationMinutes) => {
  const allTimes = getAllowedTimes(durationMinutes);
  const existingSchedules = await getExistingSchedulesForDate(date);
  const unavailableTimes = allTimes.filter((time) => {
    const start = timeToMinutes(time);

    if (isPastOrCurrentSlot(date, time)) {
      return true;
    }

    return existingSchedules.some((schedule) => slotsOverlap(
      start,
      durationMinutes,
      timeToMinutes(schedule.preferred_time),
      Number.parseInt(schedule.duration_minutes, 10),
    ));
  });
  const unavailableSet = new Set(unavailableTimes);
  const availableTimes = allTimes.filter((time) => !unavailableSet.has(time));

  return {
    allTimes,
    availableTimes,
    unavailableTimes,
  };
};

const normalizeRequest = (body) => ({
  fullName: cleanString(body.fullName, 120),
  email: cleanString(body.email, 254).toLowerCase(),
  company: cleanString(body.company, 160),
  phone: cleanString(body.phone, 80),
  serviceInterest: cleanString(body.serviceInterest, 120),
  budgetRange: cleanString(body.budgetRange, 80),
  preferredDate: normalizeDate(body.preferredDate),
  preferredTime: normalizeTime(body.preferredTime),
  durationMinutes: normalizeDuration(body.durationMinutes),
  timezone: fixedTimezone,
  sourcePath: cleanString(body.sourcePath || '/schedule', 120) || '/schedule',
  honeypot: cleanString(body.website || body.botField || body['bot-field'], 120),
});

const validateRequest = (request) => {
  const errors = {};

  if (!request.fullName) {
    errors.fullName = 'Full name is required.';
  }

  if (!request.email || !isValidEmail(request.email)) {
    errors.email = 'A valid email is required.';
  }

  if (!request.serviceInterest) {
    errors.serviceInterest = 'Service interest is required.';
  }

  if (!request.preferredDate || !request.preferredTime) {
    errors.preferredSlot = 'Preferred date and time are required.';
  }

  if (request.preferredDate && request.preferredTime && isPastOrCurrentSlot(request.preferredDate, request.preferredTime)) {
    errors.preferredSlot = 'Please choose a future date and time.';
  }

  if (!allowedDurations.includes(request.durationMinutes)) {
    errors.durationMinutes = 'Please choose a call length of 15, 30, or 60 minutes.';
  }

  if (
    request.preferredTime
    && allowedDurations.includes(request.durationMinutes)
    && !getAllowedTimes(request.durationMinutes).includes(request.preferredTime)
  ) {
    errors.preferredTime = `Please choose a ${request.durationMinutes}-minute time option between 10:00 and 16:00.`;
  }

  return errors;
};

const handleAvailabilityRequest = async (event) => {
  const date = normalizeDate(event.queryStringParameters?.date);
  const durationMinutes = normalizeDuration(event.queryStringParameters?.durationMinutes);

  if (!date) {
    return respond(400, {
      ok: false,
      message: 'A valid date is required.',
    });
  }

  if (!allowedDurations.includes(durationMinutes)) {
    return respond(400, {
      ok: false,
      message: 'Please choose a call length of 15, 30, or 60 minutes.',
    });
  }

  const missingConfig = getMissingConfig();

  if (missingConfig.length > 0) {
    console.error(`Missing scheduling config: ${missingConfig.join(', ')}`);
    return respond(500, {
      ok: false,
      message: 'Scheduling is not configured yet.',
    });
  }

  try {
    const availability = await getAvailability(date, durationMinutes);

    return respond(200, {
      ok: true,
      date,
      durationMinutes,
      timezone: fixedTimezone,
      ...availability,
    });
  } catch (error) {
    console.error(error);
    return respond(500, {
      ok: false,
      message: 'We could not load available times.',
    });
  }
};

const getMissingConfig = () => {
  const missing = [];

  if (!process.env.SUPABASE_DATABASE_URL) {
    missing.push('SUPABASE_DATABASE_URL');
  }

  return missing;
};

const getHeader = (headers = {}, key) => {
  const match = Object.entries(headers).find(([name]) => name.toLowerCase() === key);
  return match?.[1] || '';
};

const getNetlifyFormsEndpoint = (event) => {
  const configuredUrl = cleanString(process.env.URL, 300);
  const host = getHeader(event.headers, 'host');

  if (host) {
    const forwardedProtocol = getHeader(event.headers, 'x-forwarded-proto');
    const protocol = forwardedProtocol.split(',')[0] || (host.startsWith('localhost') || host.startsWith('127.') ? 'http' : 'https');
    return `${protocol}://${host}/`;
  }

  if (configuredUrl) {
    return new URL('/', configuredUrl).toString();
  }

  throw new Error('Could not determine Netlify Forms endpoint.');
};

const buildNetlifyFormBody = (request, id) => {
  const formData = new URLSearchParams();

  formData.set('form-name', netlifyFormName);
  formData.set('scheduleId', id);
  formData.set('fullName', request.fullName);
  formData.set('email', request.email);
  formData.set('company', request.company || '');
  formData.set('phone', request.phone || '');
  formData.set('serviceInterest', request.serviceInterest);
  formData.set('budgetRange', request.budgetRange || '');
  formData.set('preferredDate', request.preferredDate || '');
  formData.set('preferredTime', request.preferredTime || '');
  formData.set('durationMinutes', String(request.durationMinutes));
  formData.set('timezone', request.timezone);
  formData.set('sourcePath', request.sourcePath);

  return formData.toString();
};

const submitNetlifyFormNotification = async (event, request, id) => {
  const response = await fetch(getNetlifyFormsEndpoint(event), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: buildNetlifyFormBody(request, id),
  });

  if (!response.ok) {
    const details = await response.text();
    throw new Error(`Netlify form submission failed: ${response.status} ${details}`);
  }
};

const insertSchedulingRequest = async (request) => {
  const query = `
    insert into public.scheduling_requests (
      full_name,
      email,
      company,
      phone,
      service_interest,
      budget_range,
      preferred_date,
      preferred_time,
      duration_minutes,
      timezone,
      message,
      source_path
    )
    values ($1, $2, nullif($3, ''), nullif($4, ''), $5, nullif($6, ''), $7, nullif($8, ''), $9, nullif($10, ''), '', $11)
    returning id
  `;

  const values = [
    request.fullName,
    request.email,
    request.company,
    request.phone,
    request.serviceInterest,
    request.budgetRange,
    request.preferredDate,
    request.preferredTime,
    request.durationMinutes,
    request.timezone,
    request.sourcePath,
  ];

  const result = await getPool().query(query, values);
  return result.rows[0].id;
};

const scheduleConflicts = async (request) => {
  const query = `
    select exists (
      select 1
      from public.scheduling_requests
      where preferred_date = $1
        and status in ('new', 'confirmed')
        and (preferred_date + preferred_time::time) < ($1::date + $2::time + ($3::int * interval '1 minute'))
        and (preferred_date + preferred_time::time + (coalesce(duration_minutes, 30)::int * interval '1 minute')) > ($1::date + $2::time)
    ) as conflicts
  `;

  const result = await getPool().query(query, [
    request.preferredDate,
    request.preferredTime,
    request.durationMinutes,
  ]);
  return Boolean(result.rows[0]?.conflicts);
};

const markEmailSent = async (id) => {
  await getPool().query(
    'update public.scheduling_requests set email_sent_at = now() where id = $1',
    [id],
  );
};

export const handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') {
    return respond(204, {});
  }

  if (event.httpMethod === 'GET') {
    return handleAvailabilityRequest(event);
  }

  if (event.httpMethod !== 'POST') {
    return respond(405, {
      ok: false,
      message: 'Method not allowed.',
    });
  }

  let body;

  try {
    body = parseBody(event);
  } catch {
    return respond(400, {
      ok: false,
      message: 'Invalid request body.',
    });
  }

  const request = normalizeRequest(body);

  if (request.honeypot) {
    return respond(200, {
      ok: true,
    });
  }

  const errors = validateRequest(request);

  if (Object.keys(errors).length > 0) {
    return respond(400, {
      ok: false,
      message: 'Please check the required fields.',
      errors,
    });
  }

  const missingConfig = getMissingConfig();

  if (missingConfig.length > 0) {
    console.error(`Missing scheduling config: ${missingConfig.join(', ')}`);
    return respond(500, {
      ok: false,
      message: 'Scheduling is not configured yet.',
    });
  }

  try {
    const availability = await getAvailability(request.preferredDate, request.durationMinutes);

    if (!availability.availableTimes.includes(request.preferredTime)) {
      return respond(409, {
        ok: false,
        message: 'That time is no longer available. Please choose another time.',
      });
    }

    if (await scheduleConflicts(request)) {
      return respond(409, {
        ok: false,
        message: 'That time overlaps with another schedule. Please choose another time.',
      });
    }

    const id = await insertSchedulingRequest(request);
    await submitNetlifyFormNotification(event, request, id);
    await markEmailSent(id);

    return respond(200, {
      ok: true,
      id,
    });
  } catch (error) {
    if (['23505', '23P01'].includes(error.code)) {
      return respond(409, {
        ok: false,
        message: 'That time overlaps with another schedule. Please choose another time.',
      });
    }

    console.error(error);
    return respond(500, {
      ok: false,
      message: 'We could not send the scheduling request.',
    });
  }
};
