-- Mytishchi opened fuel tanks anomaly signal
-- Source: X / LXSummer, 2026-07-01
-- Public map point is rounded to the Imperial Mytishchi residential complex area

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
  date '2026-07-01',
  'incident',
  'watch',
  'approved',
  'unconfirmed_anomaly',
  'Mytishchi: fuel tanks reportedly opened at residential complex',
  'Moscow Oblast',
  'Imperial Mytishchi residential complex area, rounded',
  55.91,
  37.73,
  'X video report claims that fuel tanks of several cars were suspiciously opened at the Imperial Mytishchi residential complex. Treat as a low-confidence scarcity side-effect signal, not confirmed theft or confirmed motive.',
  'Gasoline theft / fuel scarcity side effect',
  'https://x.com/LXSummer1/status/2072269588264567030',
  'media/mytishchi-imperial-opened-fuel-tanks-lxsummer-2072269588264567030.mp4',
  'Low to medium: public X video source, incident details and motive unconfirmed.',
  2,
  'Approved as low-confidence Moscow Oblast fuel-scarcity side-effect anomaly from X video, 2026-07-01. Public coordinates rounded.'
where not exists (
  select 1
  from public.fuel_signals
  where title = 'Mytishchi: fuel tanks reportedly opened at residential complex'
)
