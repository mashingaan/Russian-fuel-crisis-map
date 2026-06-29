-- The submitted CDEK/Sevastopol signal has an affected destination,
-- but the image/source location is unknown. Do not treat it as a verified
-- map point in Sevastopol unless the origin/location is later verified.

update public.fuel_signals
set
  status = 'pending',
  region = 'Sevastopol / Crimea',
  place = 'Destination: Sevastopol; source location unknown',
  lat = 44.6,
  lng = 33.5,
  note = 'User-submitted report: CDEK parcels reportedly are not reaching Sevastopol. The attached image has no GPS metadata and the source/origin location is unknown. This should be treated as an affected-destination logistics anomaly, not a verified exact map point.',
  fuel = 'Not fuel-specific',
  confidence = 'User-submitted local media, location not verified',
  reviewer_note = 'Keep pending until source/origin location is verified. If approved, label as affected destination, not exact incident location.'
where title = 'Sevastopol parcel delivery disruption report';

select id, observed_at, status, title, region, place, lat, lng, note
from public.fuel_signals
where title = 'Sevastopol parcel delivery disruption report';
