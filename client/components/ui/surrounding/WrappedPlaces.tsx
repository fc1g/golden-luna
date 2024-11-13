import Places from '@/client/containers/surrounding/Places';
import { fetchPlaces } from '@/server/actions/surrounding/fetchPlaces';
import { Locale } from '@/server/types/Locale';
import CustomPagination from '../../CustomPagination';

type WrappedContentProps = {
  params: URLSearchParams;
  translations: {
    prevLabel: string;
    nextLabel: string;
    prevAriaLabel: string;
    nextAriaLabel: string;
  };
  empty: string;
  locale: Locale;
};

export default async function WrappedPlaces({
  params,
  translations,
  empty,
  locale,
}: WrappedContentProps) {
  const { places, results } = await fetchPlaces(params);

  return (
    <Places places={places} empty={empty} locale={locale}>
      <CustomPagination translations={translations} results={results} />
    </Places>
  );
}
