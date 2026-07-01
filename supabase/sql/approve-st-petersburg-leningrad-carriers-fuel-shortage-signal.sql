-- St Petersburg / Leningrad Oblast carrier fuel shortage signal
-- Source: user-provided screenshot of regional press article, 2026-07-01
-- Public map point is rounded to St Petersburg / Leningrad Oblast

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
  date '2026-07-01',
  'region',
  'serious',
  'approved',
  'regional_rationing',
  'St Petersburg / Leningrad: carriers seek help over fuel shortages',
  'St Petersburg / Leningrad Oblast',
  'St Petersburg and Leningrad Oblast, rounded',
  59.94,
  30.32,
  'User-provided screenshot of regional press article: carriers in St Petersburg and Leningrad Oblast are appealing to authorities over fuel shortages and rising exchange prices, warning that transport companies, ambulance companies and agricultural enterprises may face supply disruption and penalties. Treat as regional transport-services exposure, not a point incident.',
  'Transport fuel supply / emergency services exposure',
  'media/st-petersburg-leningrad-carriers-fuel-shortage-2026-07-01.jpg',
  'Medium: user-provided screenshot of regional press article, exact service impact still needs local confirmation.',
  6,
  'Approved as St Petersburg / Leningrad Oblast transport fuel shortage and emergency-services exposure signal from user-provided screenshot, 2026-07-01. Public coordinates rounded.'
where not exists (
  select 1
  from public.fuel_signals
  where title = 'St Petersburg / Leningrad: carriers seek help over fuel shortages'
)
