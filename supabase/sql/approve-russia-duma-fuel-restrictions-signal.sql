-- Russia nationwide fuel restriction policy messaging signal
-- Source: X post by maria_drutska, 2026-06-30 09:02
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
  'regional_rationing',
  'Russia: Duma says fuel restrictions may persist',
  'Russia nationwide',
  'Nationwide fuel policy messaging signal',
  58.5,
  76.0,
  'X video report: after Putin established a task force to stabilize fuel supplies, Duma messaging reportedly said supplies will not stabilize quickly and Russians should get used to fuel restrictions. Treat as nationwide fuel policy context, not a point incident.',
  'Fuel restrictions / official messaging',
  'https://x.com/maria_drutska/status/2071836630525329498',
  'Medium: public X video source, policy messaging signal rather than point incident.',
  4,
  'Approved as nationwide fuel restriction policy messaging signal from maria_drutska X post, 2026-06-30. Public coordinates use a rounded national context point.'
where not exists (
  select 1
  from public.fuel_signals
  where title = 'Russia: Duma says fuel restrictions may persist'
)
