-- Transbaikal Krai no-gasoline two-day queue signal
-- Source: X post by Heroiam_Slava, 2026-06-30 17:03
-- Public map point is rounded to a remote Transbaikal fuel corridor

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
  media_url,
  confidence,
  loss_weight,
  reviewer_note
)
select
  date '2026-06-30',
  'region',
  'critical',
  'approved',
  'no_gasoline',
  'Transbaikal Krai: two-day line at the only fuel station reported',
  'Zabaykalsky Krai',
  'Remote Transbaikal fuel corridor, rounded',
  52.0,
  116.0,
  'X video report: no gasoline in the area, with drivers reportedly waiting for two days at the only gas station with fuel within roughly 500 km. Public coordinate rounded because the exact station location is not independently verified.',
  'No gasoline / two-day queue',
  'https://x.com/Heroiam_Slava/status/2071957835433267466',
  'Medium: public X video source, exact station location not verified.',
  6,
  'Approved as Transbaikal Krai no-gasoline queue signal from Heroiam_Slava X post, 2026-06-30. Public coordinates rounded.'
where not exists (
  select 1
  from public.fuel_signals
  where title = 'Transbaikal Krai: two-day line at the only fuel station reported'
)
