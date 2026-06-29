alter table public.fuel_signals
add column if not exists issue_type text not null default 'unconfirmed_anomaly';

alter table public.fuel_signals
drop constraint if exists fuel_signals_issue_type_check;

alter table public.fuel_signals
add constraint fuel_signals_issue_type_check
check (issue_type in (
  'no_gasoline',
  'no_diesel',
  'long_queues',
  'purchase_limits',
  'price_spike',
  'station_closure',
  'regional_rationing',
  'infrastructure_damage',
  'unconfirmed_anomaly'
));

create index if not exists fuel_signals_issue_type_idx
on public.fuel_signals (issue_type);
