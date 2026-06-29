-- Remove the misclassified Oryol duplicate from the public map.
-- Keep only the real Surgut signal from this X source.

-- This id was the original Oryol duplicate.
update public.fuel_signals
set
  status = 'rejected',
  reviewer_note = 'Rejected: user did not submit an Oryol signal for this source. This was a misclassified duplicate of the Surgut report.'
where id = '30f3fdd4-5809-41ba-be84-62f7ce0f2545';

-- Safety net: reject any other Oryol-labeled row tied to the Surgut X source.
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

-- Restore the single valid Surgut row.
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

select id, observed_at, status, title, region, place, media_url
from public.fuel_signals
where media_url = 'https://x.com/Maks_NAFO_FELLA/status/2071088282708889786'
order by created_at desc;
