-- Kaliningrad Oblast gasoline shortage local comment screenshot signal
-- Source: user-provided screenshot of local comment, 2026-06-30
-- Public map point is rounded to Kaliningrad Oblast

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
  'serious',
  'approved',
  'no_gasoline',
  'Kaliningrad: local comment reports week-long gasoline shortages',
  'Kaliningrad Oblast',
  'Kaliningrad Oblast, rounded',
  54.7,
  20.5,
  'User-provided screenshot: local comment says Kaliningrad also has gasoline problems, queues at gas stations, insufficient gasoline for everyone, and many stations without gasoline for a week. Treat as regional evidence, not a station-level location.',
  'Gasoline shortage / queues',
  'media/kaliningrad-gasoline-shortage-comment-2026-06-30.jpg',
  'Medium: user-provided screenshot of local comment, not station-level verified.',
  4,
  'Approved as Kaliningrad Oblast regional gasoline shortage evidence from user-provided screenshot, 2026-06-30. Public coordinates rounded.'
where not exists (
  select 1
  from public.fuel_signals
  where title = 'Kaliningrad: local comment reports week-long gasoline shortages'
)
