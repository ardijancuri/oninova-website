import { useMemo, useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const serviceOptions = [
  'Software & Digital Product Development',
  'Business Platforms & CRM',
  'E-commerce & Digital Operations',
  'Website or Web App',
  'Product Strategy',
  'Experience Design',
];

const budgetOptions = [
  'Not sure yet',
  'Under 5k',
  '5k - 10k',
  '10k - 25k',
  '25k+',
];

const durationOptions = [
  { value: '15', label: '15 minutes' },
  { value: '30', label: '30 minutes' },
  { value: '60', label: '60 minutes' },
];

const scheduleStartHour = 10;
const scheduleEndHour = 16;
const fixedTimezone = 'Europe/Skopje';
const fixedTimezoneLabel = 'Europe / Skopje';

const createInitialForm = () => ({
  fullName: '',
  email: '',
  company: '',
  phone: '',
  serviceInterest: '',
  budgetRange: 'Not sure yet',
  preferredDate: '',
  preferredTime: '',
  durationMinutes: '30',
  timezone: fixedTimezone,
  website: '',
});

const formatTimeOption = (minutesFromMidnight) => {
  const hours = Math.floor(minutesFromMidnight / 60);
  const minutes = minutesFromMidnight % 60;
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
};

const getTimeOptions = (durationMinutes) => {
  const duration = Number.parseInt(durationMinutes, 10);
  const step = [15, 30, 60].includes(duration) ? duration : 30;
  const start = scheduleStartHour * 60;
  const end = scheduleEndHour * 60;
  const options = [];

  for (let current = start; current <= end; current += step) {
    options.push(formatTimeOption(current));
  }

  return options;
};

const inputClass = 'w-full border-0 border-b border-black/20 bg-transparent px-0 py-4 text-[18px] leading-[1.2] text-black outline-none transition-colors placeholder:text-black/35 focus:border-black md:text-[24px]';
const labelClass = 'text-[12px] font-semibold uppercase tracking-[0.16em] text-black/50';

const SchedulePage = () => {
  const [formData, setFormData] = useState(createInitialForm);
  const [status, setStatus] = useState('idle');
  const [feedback, setFeedback] = useState('');
  const minDate = useMemo(() => new Date().toISOString().slice(0, 10), []);
  const timeOptions = useMemo(
    () => getTimeOptions(formData.durationMinutes),
    [formData.durationMinutes],
  );

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
      ...(name === 'durationMinutes' && !getTimeOptions(value).includes(current.preferredTime)
        ? { preferredTime: '' }
        : {}),
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.preferredDate || !formData.preferredTime) {
      setStatus('error');
      setFeedback('Please choose a preferred date and time before sending the request.');
      return;
    }

    setStatus('submitting');
    setFeedback('');

    try {
      const response = await fetch('/.netlify/functions/schedule', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          timezone: fixedTimezone,
          sourcePath: window.location.pathname,
        }),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok || !result.ok) {
        throw new Error(result.message || 'We could not send the request. Please try again.');
      }

      setStatus('success');
      setFeedback('Your request was sent. We will review the details and follow up by email.');
      setFormData(createInitialForm());
    } catch (error) {
      setStatus('error');
      setFeedback(error.message || 'We could not send the request. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="px-4 pt-8 md:px-8">
        <div className="mx-auto max-w-[1800px] overflow-hidden rounded-tl-3xl bg-white">
          <Navigation textColor="black" inFlow hideBottomCorners />

          <section className="bg-white px-0 pb-16 pt-10 md:pb-24 md:pt-16">
            <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
              <aside className="px-2 md:px-0 lg:sticky lg:top-8 lg:self-start">
                <p className="mb-5 text-[13px] font-semibold uppercase tracking-[0.2em] text-black/45">
                  Schedule a project call
                </p>
                <h1 className="max-w-[560px] text-[36px] font-bold leading-[1] text-black md:text-[62px]">
                  A focused intake for the first conversation.
                </h1>
                <div className="mt-8 grid gap-5 text-[18px] leading-[1.25] text-black/70 md:text-[24px]">
                  <p>Choose a call length, a preferred time, and the best way to reach you.</p>
                  <p>We use this to prepare the conversation and reply with the right next step.</p>
                </div>
              </aside>

              <form onSubmit={handleSubmit} className="animate-schedule-form">
                <div className="hidden">
                  <label>
                    Website
                    <input
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      autoComplete="off"
                      tabIndex="-1"
                    />
                  </label>
                </div>

                <div className="grid gap-x-8 gap-y-7 md:grid-cols-2">
                  <label className="block">
                    <span className={labelClass}>Full name *</span>
                    <input
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="Your name"
                      autoComplete="name"
                      maxLength="120"
                      required
                    />
                  </label>

                  <label className="block">
                    <span className={labelClass}>Email *</span>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="you@company.com"
                      autoComplete="email"
                      maxLength="254"
                      required
                    />
                  </label>

                  <label className="block">
                    <span className={labelClass}>Company</span>
                    <input
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="Company name"
                      autoComplete="organization"
                      maxLength="160"
                    />
                  </label>

                  <label className="block">
                    <span className={labelClass}>Phone</span>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="+389 ..."
                      autoComplete="tel"
                      maxLength="80"
                    />
                  </label>

                  <label className="block">
                    <span className={labelClass}>Service interest *</span>
                    <select
                      name="serviceInterest"
                      value={formData.serviceInterest}
                      onChange={handleChange}
                      className={`${inputClass} cursor-pointer`}
                      required
                    >
                      <option value="">Select a service</option>
                      {serviceOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="block">
                    <span className={labelClass}>Budget range</span>
                    <select
                      name="budgetRange"
                      value={formData.budgetRange}
                      onChange={handleChange}
                      className={`${inputClass} cursor-pointer`}
                    >
                      {budgetOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="block">
                    <span className={labelClass}>Call length *</span>
                    <select
                      name="durationMinutes"
                      value={formData.durationMinutes}
                      onChange={handleChange}
                      className={`${inputClass} cursor-pointer`}
                      required
                    >
                      {durationOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </label>

                  <div className="block">
                    <span className={labelClass}>Timezone</span>
                    <p className="w-full border-0 border-b border-black/20 bg-transparent px-0 py-4 text-[18px] leading-[1.2] text-black/70 md:text-[24px]">
                      {fixedTimezoneLabel}
                    </p>
                  </div>

                  <label className="block">
                    <span className={labelClass}>Preferred date *</span>
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className={inputClass}
                      min={minDate}
                      required
                    />
                  </label>

                  <label className="block">
                    <span className={labelClass}>Preferred time *</span>
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className={`${inputClass} cursor-pointer`}
                      required
                    >
                      <option value="">Select a time</option>
                      {timeOptions.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

                <div className="mt-10 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="inline-flex min-h-[64px] items-center justify-center rounded-[14px] bg-[#FFFB00] px-8 py-4 text-[20px] font-semibold uppercase leading-none text-[#231F20] transition-transform duration-300 hover:-translate-y-1 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 md:text-[28px]"
                  >
                    {status === 'submitting' ? 'Sending request' : 'Send request'}
                  </button>

                  {feedback && (
                    <p
                      className={`text-[18px] leading-[1.25] md:max-w-[520px] md:text-[22px] ${
                        status === 'success' ? 'text-black' : 'text-red-700'
                      }`}
                      role="status"
                    >
                      {feedback}
                    </p>
                  )}
                </div>
              </form>
            </div>
          </section>

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default SchedulePage;
