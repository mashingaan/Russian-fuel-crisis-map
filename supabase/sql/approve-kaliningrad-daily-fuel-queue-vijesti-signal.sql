-- Kaliningrad daily long fuel queue video signal
-- Source: X / Vijesti, 2026-06-30
-- Public map point is rounded to Kaliningrad city area

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
  date '2026-06-30',
  'region',
  'serious',
  'approved',
  'long_queues',
  'Kaliningrad: daily long fuel queue reported',
  'Kaliningrad Oblast',
  'Kaliningrad city area, rounded',
  54.71,
  20.51,
  'X video report from Vijesti describes a long fuel queue in Kaliningrad as a daily routine. Treat as additional queue evidence, not a verified station-level point.',
  'Gasoline queue',
  'https://x.com/Vijesti11111/status/2071983878210744570',
  'media/kaliningrad-daily-fuel-queue-vijesti-2071983878210744570.mp4',
  'Medium: public X video source, exact station location not verified.',
  4,
  'Approved as additional Kaliningrad long-queue video signal from X, 2026-06-30. Public coordinates rounded.'
where not exists (
  select 1
  from public.fuel_signals
  where title = 'Kaliningrad: daily long fuel queue reported'
)
