create extension if not exists pgcrypto;

create table if not exists public.fuel_signals (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  observed_at date not null default current_date,
  type text not null check (type in ('station', 'infrastructure', 'region')),
  severity text not null default 'watch' check (severity in ('critical', 'serious', 'watch')),
  status text not null default 'pending' check (status in ('pending', 'approved', 'rejected')),
  issue_type text not null default 'unconfirmed_anomaly' check (issue_type in ('no_gasoline', 'no_diesel', 'long_queues', 'purchase_limits', 'price_spike', 'station_closure', 'regional_rationing', 'infrastructure_damage', 'unconfirmed_anomaly')),
  title text not null,
  region text,
  place text,
  lat double precision not null check (lat >= -90 and lat <= 90),
  lng double precision not null check (lng >= -180 and lng <= 180),
  note text,
  fuel text,
  media_url text,
  confidence text not null default 'User signal, unverified',
  loss_weight integer not null default 2 check (loss_weight >= 0 and loss_weight <= 10),
  reviewer_note text
);

alter table public.fuel_signals enable row level security;

grant usage on schema public to anon;
grant select, insert on public.fuel_signals to anon;

drop policy if exists "public can submit pending fuel signals" on public.fuel_signals;
create policy "public can submit pending fuel signals"
on public.fuel_signals
for insert
to anon
with check (status = 'pending');

drop policy if exists "public can read approved fuel signals" on public.fuel_signals;
create policy "public can read approved fuel signals"
on public.fuel_signals
for select
to anon
using (status = 'approved');

create index if not exists fuel_signals_status_created_idx
on public.fuel_signals (status, created_at desc);

create index if not exists fuel_signals_status_observed_idx
on public.fuel_signals (status, observed_at desc);

create index if not exists fuel_signals_issue_type_idx
on public.fuel_signals (issue_type);
