create extension if not exists btree_gist;

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

do $$
begin
  if not exists (
    select 1
    from pg_constraint
    where conname = 'scheduling_requests_no_active_overlap'
      and conrelid = 'public.scheduling_requests'::regclass
  ) then
    alter table public.scheduling_requests
      add constraint scheduling_requests_no_active_overlap
      exclude using gist (
        preferred_date with =,
        tsrange(
          preferred_date + preferred_time::time,
          preferred_date + preferred_time::time + (duration_minutes * interval '1 minute'),
          '[)'
        ) with &&
      )
      where (status in ('new', 'confirmed'));
  end if;
end $$;
