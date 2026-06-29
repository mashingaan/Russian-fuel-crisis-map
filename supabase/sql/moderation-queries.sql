-- Recent pending signals
select id, created_at, observed_at, type, severity, title, region, place, media_url
from public.fuel_signals
where status = 'pending'
order by observed_at desc, created_at desc;

-- Approve the Slavyansk-on-Kuban refinery video signal from Tendar
update public.fuel_signals
set
  status = 'approved',
  confidence = 'Verified by moderator: public X video source',
  reviewer_note = 'Approved from Tendar X video, 2026-06-28.'
where status = 'pending'
  and media_url = 'https://x.com/Tendar/status/2071293970357895340';

-- After running supabase-issue-type-migration.sql, you can classify approved rows:
-- update public.fuel_signals
-- set issue_type = 'infrastructure_damage'
-- where media_url = 'https://x.com/Tendar/status/2071293970357895340';

-- Approve the Taganrog fuel-access anomaly signal
update public.fuel_signals
set
  status = 'approved',
  confidence = 'Verified by moderator: public X video source',
  reviewer_note = 'Approved as an unusual fuel-access anomaly in Taganrog, 2026-06-29.'
where status = 'pending'
  and media_url = 'https://x.com/LXSummer1/status/2071338652337307974';

-- After running supabase-issue-type-migration.sql, classify it as:
-- update public.fuel_signals
-- set issue_type = 'unconfirmed_anomaly'
-- where media_url = 'https://x.com/LXSummer1/status/2071338652337307974';

-- Approve the Novorossiysk gasoline queue signal
update public.fuel_signals
set
  status = 'approved',
  confidence = 'Verified by moderator: public X video source',
  reviewer_note = 'Approved as a gasoline queue signal in Novorossiysk, 2026-06-28.'
where status = 'pending'
  and media_url = 'https://x.com/Maks_NAFO_FELLA/status/2071279694243143812';

-- After running supabase-issue-type-migration.sql, classify it as:
-- update public.fuel_signals
-- set issue_type = 'long_queues'
-- where media_url = 'https://x.com/Maks_NAFO_FELLA/status/2071279694243143812';

-- Approve the Surgut gasoline availability signal
update public.fuel_signals
set
  status = 'approved',
  confidence = 'Verified by moderator: public X video source',
  reviewer_note = 'Approved as a gasoline availability problem in Surgut, 2026-06-28.'
where status = 'pending'
  and media_url = 'https://x.com/Maks_NAFO_FELLA/status/2071088282708889786'
  and title = 'Surgut gasoline availability problem';

-- After running supabase-issue-type-migration.sql, classify them as:
-- update public.fuel_signals
-- set issue_type = 'no_gasoline'
-- where media_url = 'https://x.com/Maks_NAFO_FELLA/status/2071088282708889786'
--   and title = 'Surgut gasoline availability problem';

-- Sevastopol CDEK parcel delivery disruption signal:
-- Do not approve as an exact map point until the source/origin location is verified.
-- If approved later, label it as an affected destination, not exact incident location.
-- update public.fuel_signals
-- set
--   status = 'approved',
--   confidence = 'Verified by moderator: user-submitted local video',
--   reviewer_note = 'Approved as affected-destination logistics anomaly; source/origin location unknown.'
-- where status = 'pending'
--   and title = 'Sevastopol parcel delivery disruption report';

-- After running supabase-issue-type-migration.sql, classify it as:
-- update public.fuel_signals
-- set issue_type = 'unconfirmed_anomaly'
-- where title = 'Sevastopol parcel delivery disruption report';

-- Approve the Yaroslavl / YANOS refinery-area anomaly signal
-- Keep as unconfirmed unless damage is verified by source/video.
update public.fuel_signals
set
  status = 'approved',
  confidence = 'Verified by moderator: Telegram screenshot/source reviewed',
  reviewer_note = 'Approved as refinery-area anomaly near YANOS, 2026-06-28; damage unverified.'
where status = 'pending'
  and title = 'Yaroslavl YANOS refinery-area explosion reports';

-- After running supabase-issue-type-migration.sql, classify it as:
-- update public.fuel_signals
-- set issue_type = 'unconfirmed_anomaly'
-- where title = 'Yaroslavl YANOS refinery-area explosion reports';

-- Approve the occupied Kherson Oblast blackout signal
-- Energy/infrastructure disruption, not fuel-specific.
update public.fuel_signals
set
  status = 'approved',
  confidence = 'Verified by moderator: Telegram screenshot/source reviewed',
  reviewer_note = 'Approved as occupied Kherson Oblast regional blackout signal, 2026-06-29.'
where status = 'pending'
  and title = 'Occupied Kherson Oblast full or partial blackout report';

-- After running supabase-issue-type-migration.sql, classify it as:
-- update public.fuel_signals
-- set issue_type = 'unconfirmed_anomaly'
-- where title = 'Occupied Kherson Oblast full or partial blackout report';

-- Insert or approve the Crimea / Kerch Strait energy infrastructure signal.
-- Keep public coordinates rounded; do not expose the exact coordinate from the Telegram post.
do $$
begin
  if exists (
    select 1
    from public.fuel_signals
    where title = 'Crimea power substations and Kuban energy bridge disruption report'
  ) then
    update public.fuel_signals
    set
      observed_at = date '2026-06-29',
      type = 'infrastructure',
      severity = 'critical',
      status = 'approved',
      region = 'Crimea / Kerch Strait',
      place = 'Kerch / Taman energy bridge area, rounded',
      lat = 45.40,
      lng = 36.80,
      note = 'Telegram report from Supernova+: claims several substations and the Kuban power bridge connection from the Taman side were disrupted overnight; air defense reportedly active in Kerch. Exact source coordinate withheld; public map point rounded. Treat as unconfirmed infrastructure damage until object/video confirmation.',
      fuel = 'Power infrastructure',
      media_url = 'https://t.me/supernova_plus',
      confidence = 'Verified by moderator: Telegram screenshot/source reviewed; exact coordinate withheld; damage claim unconfirmed.',
      loss_weight = 8,
      reviewer_note = 'Approved as Crimea/Kerch Strait energy infrastructure disruption signal from Telegram screenshot, 2026-06-29 07:37 MSK. Public coordinates rounded.'
    where title = 'Crimea power substations and Kuban energy bridge disruption report';
  else
    insert into public.fuel_signals (
      observed_at, type, severity, status, title, region, place, lat, lng,
      note, fuel, media_url, confidence, loss_weight, reviewer_note
    )
    values (
      date '2026-06-29',
      'infrastructure',
      'critical',
      'approved',
      'Crimea power substations and Kuban energy bridge disruption report',
      'Crimea / Kerch Strait',
      'Kerch / Taman energy bridge area, rounded',
      45.40,
      36.80,
      'Telegram report from Supernova+: claims several substations and the Kuban power bridge connection from the Taman side were disrupted overnight; air defense reportedly active in Kerch. Exact source coordinate withheld; public map point rounded. Treat as unconfirmed infrastructure damage until object/video confirmation.',
      'Power infrastructure',
      'https://t.me/supernova_plus',
      'Verified by moderator: Telegram screenshot/source reviewed; exact coordinate withheld; damage claim unconfirmed.',
      8,
      'Approved as Crimea/Kerch Strait energy infrastructure disruption signal from Telegram screenshot, 2026-06-29 07:37 MSK. Public coordinates rounded.'
    );
  end if;
end $$;

-- Remove the misclassified Oryol duplicate from the public map.
-- Keep only the real Surgut signal from this X source.
update public.fuel_signals
set
  status = 'rejected',
  reviewer_note = 'Rejected: user did not submit an Oryol signal for this source. This was a misclassified duplicate of the Surgut report.'
where id = '30f3fdd4-5809-41ba-be84-62f7ce0f2545';

update public.fuel_signals
set
  status = 'rejected',
  reviewer_note = 'Rejected: Oryol label was misclassified. Source signal is Surgut only.'
where media_url = 'https://x.com/Maks_NAFO_FELLA/status/2071088282708889786'
  and (
    title ilike '%Oryol%'
    or region = 'Oryol Oblast'
    or place ilike '%Oryol%'
  );

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

-- Reject a signal by id
-- update public.fuel_signals
-- set status = 'rejected', reviewer_note = 'Rejected after moderator review.'
-- where id = 'PASTE_SIGNAL_ID_HERE';
