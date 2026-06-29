-- Launch moderation batch.
-- Approves all real user-loaded signals from the current collection batch.
-- Keeps TEST rows out of the public map.

-- 1) Reject the misclassified Oryol duplicate from the Surgut X post.
-- The user-provided signal was Surgut. Do not keep a separate Oryol point.
update public.fuel_signals
set
  status = 'rejected',
  reviewer_note = 'Rejected: user did not submit an Oryol signal for this source. This was a misclassified duplicate of the Surgut report.'
where coalesce(title, '') not ilike 'TEST%'
  and media_url = 'https://x.com/Maks_NAFO_FELLA/status/2071088282708889786'
  and (
    region = 'Oryol Oblast'
    or place ilike '%Oryol%'
    or title ilike '%Oryol%'
  );

-- Restore the single valid Surgut row if it exists.
update public.fuel_signals
set
  status = 'approved',
  title = 'Surgut gasoline availability problem',
  region = 'Khanty-Mansi Autonomous Okrug',
  place = 'Surgut, rounded',
  lat = 61.30,
  lng = 73.40,
  type = 'station',
  severity = 'watch',
  note = 'X video report: Surgut, Khanty-Mansi Autonomous Okrug. Gasoline is reportedly already a problem even there. Treat as gasoline availability anomaly until moderator verifies exact fuel type and station status.',
  fuel = 'Gasoline, availability problem reported',
  confidence = 'Verified by moderator: public X video source',
  reviewer_note = 'Approved as the only public Surgut signal for this source. Misclassified Oryol duplicate rejected.'
where id = '5b542034-9a2f-4c94-ae1c-af8174b4555c';

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

-- 4) Sevastopol logistics disruption is intentionally not handled in this bulk script.
-- Use repair-corrupted-public-signals.sql or the moderator console for exact-id edits.
-- Do not run broad Sevastopol updates in a launch batch.

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
