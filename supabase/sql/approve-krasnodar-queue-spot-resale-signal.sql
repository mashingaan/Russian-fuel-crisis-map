-- Krasnodar fuel-queue spot resale signal
-- Source: X / Vijesti, 2026-07-02
-- Public map point is rounded to Krasnodar city area

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
  media_url,
  confidence,
  loss_weight,
  reviewer_note
)
select
  date '2026-07-02',
  'region',
  'serious',
  'approved',
  'long_queues',
  'Krasnodar: fuel-queue spots reportedly resold',
  'Krasnodar Krai',
  'Krasnodar city area, rounded',
  45.04,
  38.97,
  'X video report: people have started selling spots in gas-station queues, with 3,000 rubles reportedly asked for one spot in Krasnodar and 5,000 rubles or more in some other cities. Treat as informal queue-market evidence, not a verified station-level point.',
  'Fuel queue resale / informal queue market',
  'https://x.com/Vijesti11111/status/2072622893800816815',
  'media/krasnodar-queue-spot-resale-vijesti-2072622893800816815.mp4',
  'Medium: public X video source, exact stations and other cities not independently verified.',
  4,
  'Approved as Krasnodar fuel-queue spot resale signal from Vijesti X video, 2026-07-02. Public coordinates rounded.'
where not exists (
  select 1
  from public.fuel_signals
  where title = 'Krasnodar: fuel-queue spots reportedly resold'
)
