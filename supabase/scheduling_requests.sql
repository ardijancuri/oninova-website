create table if not exists public.scheduling_requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  full_name text not null,
  email text not null,
  company text,
  phone text,
  service_interest text not null,
  budget_range text,
  preferred_date date not null,
  preferred_time text not null,
  duration_minutes integer not null default 30,
  timezone text,
  message text,
  source_path text not null default '/schedule',
  status text not null default 'new',
  email_sent_at timestamptz
);

alter table public.scheduling_requests
  add column if not exists duration_minutes integer not null default 30;

alter table public.scheduling_requests
  add column if not exists message text;

alter table public.scheduling_requests
  alter column message drop not null;

alter table public.scheduling_requests
  drop constraint if exists scheduling_requests_duration_minutes_check;

alter table public.scheduling_requests
  add constraint scheduling_requests_duration_minutes_check
  check (duration_minutes in (15, 30, 60));

create unique index if not exists scheduling_requests_active_slot_unique
  on public.scheduling_requests (preferred_date, preferred_time)
  where status in ('new', 'confirmed');

create index if not exists scheduling_requests_active_date_idx
  on public.scheduling_requests (preferred_date)
  where status in ('new', 'confirmed');

create or replace function public.prevent_scheduling_request_overlap()
returns trigger
language plpgsql
as $$
begin
  if new.status in ('new', 'confirmed') then
    if exists (
      select 1
      from public.scheduling_requests existing
      where existing.id is distinct from new.id
        and existing.status in ('new', 'confirmed')
        and existing.preferred_date = new.preferred_date
        and (existing.preferred_date + existing.preferred_time::time)
          < (new.preferred_date + new.preferred_time::time + (new.duration_minutes * interval '1 minute'))
        and (existing.preferred_date + existing.preferred_time::time + (existing.duration_minutes * interval '1 minute'))
          > (new.preferred_date + new.preferred_time::time)
    ) then
      raise exception 'Scheduling request overlaps with an existing active schedule.'
        using errcode = '23P01';
    end if;
  end if;

  return new;
end;
$$;

drop trigger if exists scheduling_requests_no_active_overlap
  on public.scheduling_requests;

create trigger scheduling_requests_no_active_overlap
  before insert or update of preferred_date, preferred_time, duration_minutes, status
  on public.scheduling_requests
  for each row
  execute function public.prevent_scheduling_request_overlap();
