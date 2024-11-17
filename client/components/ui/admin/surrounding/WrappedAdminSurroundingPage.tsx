import { fetchPlaces } from '@/server/actions/surrounding/fetchPlaces';
import WrappedPlacesList from './WrappedPlacesList';

export default async function WrappedAdminSurroundingPage({
  searchParams,
}: {
  searchParams: URLSearchParams;
}) {
  const { places, results } = await fetchPlaces(searchParams);

  return <WrappedPlacesList places={places} results={results} />;
}
