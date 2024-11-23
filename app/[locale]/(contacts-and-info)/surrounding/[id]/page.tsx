import ErrorBoundary from '@/client/components/ErrorBoundary';
import PlaceSkeleton from '@/client/components/skeleton/PlaceSkeleton';
import WrappedPlace from '@/client/components/ui/surrounding/WrappedPlace';
import { Params } from '@/client/types/Params';
import { fetchPlaces } from '@/server/actions/surrounding/fetchPlaces';
import { setRequestLocale } from 'next-intl/server';
import { Suspense } from 'react';

export const revalidate = 60;
export const dynamicParams = true;

export const generateStaticParams = async () => {
  const { places } = await fetchPlaces();

  return places.map(({ id }) => ({
    id,
  }));
};

export default async function SurroundingPlacePage({ params }: Params) {
  const { id, locale } = await params;
  setRequestLocale(locale);

  return (
    <ErrorBoundary>
      <Suspense fallback={<PlaceSkeleton />}>
        <WrappedPlace id={id!} />
      </Suspense>
    </ErrorBoundary>
  );
}
