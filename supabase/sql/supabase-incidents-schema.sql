-- Future normalized incident model.
-- Current app can aggregate existing fuel_signals client-side.
-- Use this when migrating from "one row = one map point" to:
-- "one incident = one map point, many signals/evidence rows inside it".

create extension if not exists pgcrypto;

create table if not exists public.incidents (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  title text not null,
  region text,
  place text,
  lat double precision not null check (lat >= -90 and lat <= 90),
  lng double precision not null check (lng >= -180 and lng <= 180),
  current_severity text not null default 'watch' check (current_severity in ('critical', 'serious', 'watch')),
  current_status text,
  current_summary text,
  issue_types text[] not null default array['unconfirmed_anomaly']::text[],
  last_observed_at date,
  stations_affected_estimate integer not null default 1 check (stations_affected_estimate >= 0),
  loss_weight integer not null default 2 check (loss_weight >= 0 and loss_weight <= 10),
  confidence text not null default 'Unverified',
  status text not null default 'active' check (status in ('active', 'archived', 'rejected'))
);

create table if not exists public.incident_signals (
  id uuid primary key default gen_random_uuid(),
  incident_id uuid references public.incidents(id) on delete set null,
  created_at timestamptz not null default now(),
  observed_at date not null default current_date,
  submitted_at timestamptz not null default now(),
  title text,
  description text,
  issue_type text not null default 'unconfirmed_anomaly' check (issue_type in ('no_gasoline', 'no_diesel', 'long_queues', 'purchase_limits', 'price_spike', 'station_closure', 'regional_rationing', 'infrastructure_damage', 'unconfirmed_anomaly')),
  signal_class text not null default 'fuel' check (signal_class in ('fuel', 'infrastructure', 'power', 'logistics')),
  source_url text,
  media_url text,
  confidence text not null default 'User signal, unverified',
  moderation_status text not null default 'pending' check (moderation_status in ('pending', 'approved', 'rejected')),
  reviewer_note text
);

create index if not exists incidents_status_updated_idx
on public.incidents (status, updated_at desc);

create index if not exists incidents_severity_observed_idx
on public.incidents (current_severity, last_observed_at desc);

create index if not exists incident_signals_incident_idx
on public.incident_signals (incident_id, observed_at desc);

create index if not exists incident_signals_moderation_idx
on public.incident_signals (moderation_status, created_at desc);

alter table public.incidents enable row level security;
alter table public.incident_signals enable row level security;

grant usage on schema public to anon, authenticated;
grant select on public.incidents to anon, authenticated;
grant select, insert on public.incident_signals to anon;
grant select, insert, update on public.incidents to authenticated;
grant select, insert, update on public.incident_signals to authenticated;

drop policy if exists "public can read active incidents" on public.incidents;
create policy "public can read active incidents"
on public.incidents
for select
to anon
using (status = 'active');

drop policy if exists "public can read approved incident signals" on public.incident_signals;
create policy "public can read approved incident signals"
on public.incident_signals
for select
to anon
using (moderation_status = 'approved');

drop policy if exists "public can submit pending incident signals" on public.incident_signals;
create policy "public can submit pending incident signals"
on public.incident_signals
for insert
to anon
with check (moderation_status = 'pending');

drop policy if exists "moderators can manage incidents" on public.incidents;
create policy "moderators can manage incidents"
on public.incidents
for all
to authenticated
using (public.is_fuel_map_moderator())
with check (public.is_fuel_map_moderator());

drop policy if exists "moderators can manage incident signals" on public.incident_signals;
create policy "moderators can manage incident signals"
on public.incident_signals
for all
to authenticated
using (public.is_fuel_map_moderator())
with check (public.is_fuel_map_moderator());
