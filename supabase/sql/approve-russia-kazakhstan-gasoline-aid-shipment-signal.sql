-- Russia gasoline aid shipment from Kazakhstan signal
-- Source: X / Maks_NAFO_FELLA citing Reuters, 2026-07-01
-- Public map point is rounded to the Kazakhstan to Russia fuel corridor near Orenburg

insert into public.fuel_signals (
  observed_at,
  type,
  severity,
  status,
  issue_type,
  title,
  region,
  place,
  lat,
  lng,
  note,
  fuel,
  source_url,
  confidence,
  loss_weight,
  reviewer_note
)
select
  date '2026-07-01',
  'region',
  'serious',
  'approved',
  'regional_rationing',
  'Russia: Kazakhstan gasoline aid shipment reported',
  'Russia / Kazakhstan fuel supply route',
  'Kazakhstan to Russia fuel aid corridor, rounded to Orenburg region',
  51.77,
  55.1,
  'X report citing Reuters says Kazakhstan is sending 50,000 tons of gasoline to Russia as humanitarian aid. Treat as macro fuel-supply support evidence, not a verified local station incident.',
  'Gasoline aid shipment / shortage mitigation',
  'https://x.com/Maks_NAFO_FELLA/status/2072332812313629103',
  'Medium to high: public X post attributes the figure to Reuters, direct Reuters article not attached.',
  5,
  'Approved as macro Russia fuel-supply support signal from Kazakhstan, attributed to Reuters via X, 2026-07-01. Public coordinates rounded to Orenburg import corridor.'
where not exists (
  select 1
  from public.fuel_signals
  where title = 'Russia: Kazakhstan gasoline aid shipment reported'
)
