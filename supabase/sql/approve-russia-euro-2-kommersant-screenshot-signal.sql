-- Russia nationwide Euro-2 Kommersant screenshot signal
-- Source: user-provided screenshot citing Kommersant, 2026-06-30
-- Public map point is the nationwide fuel policy context point

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
  'unconfirmed_anomaly',
  'Russia: Kommersant reports Euro-2 gasoline approval expected',
  'Russia nationwide',
  'Nationwide fuel policy signal, not a point incident',
  58.5,
  76.0,
  'User-provided screenshot citing Kommersant: Russia is considering Euro-2 gasoline approval next year to saturate the market, increasing supply without deep refining while raising risks for modern cars. Treat as nationwide fuel-quality policy context, not a point incident.',
  'Gasoline quality / Euro-2 policy',
  'media/russia-euro-2-kommersant-screenshot-2026-06-30.jpg',
  'Medium: user-provided screenshot citing Kommersant, primary article not attached.',
  5,
  'Approved as nationwide Euro-2 fuel-quality policy evidence from user-provided Kommersant screenshot, 2026-06-30. Public coordinates use a rounded national context point.'
where not exists (
  select 1
  from public.fuel_signals
  where title = 'Russia: Kommersant reports Euro-2 gasoline approval expected'
)
