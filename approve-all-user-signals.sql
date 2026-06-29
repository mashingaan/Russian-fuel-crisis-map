-- Launch moderation batch.
-- Approves all real user-loaded signals from the current collection batch.
-- Keeps TEST rows out of the public map.

-- 1) Correct the misclassified Oryol duplicate from the Surgut X post.
-- The user-provided signal was Surgut. Do not keep a separate Oryol point.
update public.fuel_signals
set
  title = 'Surgut gasoline availability problem',
  region = 'Khanty-Mansi Autonomous Okrug',
  place = 'Surgut, rounded',
  lat = 61.30,
  lng = 73.40,
  type = 'station',
  severity = 'watch',
  status = 'approved',
  note = 'X video report: Surgut, Khanty-Mansi Autonomous Okrug. Gasoline availability problem. The earlier Oryol label on this source was removed because the user-provided signal location was Surgut.',
  confidence = 'Verified by moderator: public X video source; city corrected to Surgut.',
  reviewer_note = 'Corrected from Oryol to Surgut per source signal and approved in launch batch.'
where coalesce(title, '') not ilike 'TEST%'
  and media_url = 'https://x.com/Maks_NAFO_FELLA/status/2071088282708889786'
  and (
    region = 'Oryol Oblast'
    or place ilike '%Oryol%'
    or title ilike '%Oryol%'
  );

-- 2) Approve the known X/public-source fuel and infrastructure signals.
update public.fuel_signals
set
  status = 'approved',
  confidence = case
    when media_url = 'https://x.com/Tendar/status/2071293970357895340'
      then 'Verified by moderator: public X video source'
    when media_url = 'https://x.com/LXSummer1/status/2071338652337307974'
      then 'Verified by moderator: public X video source'
    when media_url = 'https://x.com/Maks_NAFO_FELLA/status/2071279694243143812'
      then 'Verified by moderator: public X video source'
    when media_url = 'https://x.com/Maks_NAFO_FELLA/status/2071088282708889786'
      then 'Verified by moderator: public X video source'
    else coalesce(confidence, 'Approved by moderator')
  end,
  reviewer_note = case
    when media_url = 'https://x.com/Tendar/status/2071293970357895340'
      then 'Approved from Tendar X video, 2026-06-28.'
    when media_url = 'https://x.com/LXSummer1/status/2071338652337307974'
      then 'Approved as an unusual fuel-access anomaly in Taganrog, 2026-06-29.'
    when media_url = 'https://x.com/Maks_NAFO_FELLA/status/2071279694243143812'
      then 'Approved as a gasoline queue signal in Novorossiysk, 2026-06-28.'
    when media_url = 'https://x.com/Maks_NAFO_FELLA/status/2071088282708889786'
      then 'Approved as a gasoline availability problem in Surgut, 2026-06-28.'
    else coalesce(reviewer_note, 'Approved in launch moderation batch.')
  end
where coalesce(title, '') not ilike 'TEST%'
  and media_url in (
    'https://x.com/Tendar/status/2071293970357895340',
    'https://x.com/LXSummer1/status/2071338652337307974',
    'https://x.com/Maks_NAFO_FELLA/status/2071279694243143812',
    'https://x.com/Maks_NAFO_FELLA/status/2071088282708889786'
  );

-- 3) Approve Telegram/user-submitted regional infrastructure signals.
update public.fuel_signals
set
  status = 'approved',
  confidence = case
    when title = 'Yaroslavl YANOS refinery-area explosion reports'
      then 'Verified by moderator: Telegram screenshot/source reviewed; damage unverified.'
    when title = 'Occupied Kherson Oblast full or partial blackout report'
      then 'Verified by moderator: Telegram screenshot/source reviewed.'
    else coalesce(confidence, 'Approved by moderator')
  end,
  reviewer_note = case
    when title = 'Yaroslavl YANOS refinery-area explosion reports'
      then 'Approved as refinery-area anomaly near YANOS, 2026-06-28; damage unverified.'
    when title = 'Occupied Kherson Oblast full or partial blackout report'
      then 'Approved as occupied Kherson Oblast regional blackout signal, 2026-06-29.'
    else coalesce(reviewer_note, 'Approved in launch moderation batch.')
  end
where coalesce(title, '') not ilike 'TEST%'
  and title in (
    'Yaroslavl YANOS refinery-area explosion reports',
    'Occupied Kherson Oblast full or partial blackout report'
  );

-- 4) Approve Sevastopol logistics disruption as an affected-destination signal.
-- Source/origin location is still unknown, so the public label must not claim an exact origin.
update public.fuel_signals
set
  status = 'approved',
  region = 'Sevastopol / Crimea',
  place = 'Destination: Sevastopol; source location unknown',
  lat = 44.60,
  lng = 33.53,
  type = 'region',
  severity = 'watch',
  note = 'User-submitted report: parcels to Sevastopol are not arriving. Approved only as an affected-destination logistics disruption; source/origin location remains unknown.',
  confidence = 'Verified by moderator: user-submitted local video/context; source location unknown.',
  reviewer_note = 'Approved as affected-destination logistics anomaly; not an exact incident-location point.'
where coalesce(title, '') not ilike 'TEST%'
  and title = 'Sevastopol parcel delivery disruption report';

-- 5) Confirm public launch rows.
select status, count(*) as count
from public.fuel_signals
where coalesce(title, '') not ilike 'TEST%'
group by status
order by status;

select id, observed_at, status, title, region, place, media_url
from public.fuel_signals
where coalesce(title, '') not ilike 'TEST%'
order by observed_at desc, created_at desc;
