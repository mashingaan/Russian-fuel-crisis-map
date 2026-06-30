-- Chita / Transbaikal no-gasoline queue resale signal
-- Source: X post by anarhist363, 2026-06-30 17:25
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
  'Transbaikal Krai: gasoline absent around Chita, queue places resold',
  'Zabaykalsky Krai',
  'Remote Transbaikal fuel corridor, rounded',
  52.0,
  116.0,
  'X video report: no gasoline in Chita and roughly 500 km around it, queues stretch for kilometers, people wait for a second day, and the first place in line is reportedly offered for 35,000 rubles. Public coordinate rounded because the exact station location is not independently verified.',
  'No gasoline / queue resale',
  'https://x.com/anarhist363/status/2071963353312894990',
  'Medium: public X video source, exact station location not verified.',
  7,
  'Approved as Chita / Transbaikal no-gasoline queue resale signal from anarhist363 X post, 2026-06-30. Public coordinates rounded.'
where not exists (
  select 1
  from public.fuel_signals
  where title = 'Transbaikal Krai: gasoline absent around Chita, queue places resold'
)
