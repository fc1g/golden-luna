import Place from '@/client/containers/surrounding/Place';
import '@/node_modules/leaflet/dist/leaflet.css';
import { fetchPlace } from '@/server/actions/surrounding/fetchPlace';
import { getTranslations } from 'next-intl/server';

export default async function WrappedPlace({ id }: { id: string }) {
  const place = await fetchPlace(id);
  const t = await getTranslations('surrounding');

  return (
    <Place
      place={place}
      disable={t('disable')}
      enable={t('enable')}
      houseText={t('placeHouse')}
      routeText={t('placeGenerateRoute')}
    />
  );
}
