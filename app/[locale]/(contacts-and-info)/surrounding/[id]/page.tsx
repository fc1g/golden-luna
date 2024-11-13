import ErrorBoundary from '@/client/components/ErrorBoundary';
import PlaceSkeleton from '@/client/components/skeleton/PlaceSkeleton';
import WrappedPlace from '@/client/components/ui/surrounding/WrappedPlace';
import { Params } from '@/client/types/Params';
import { fetchPlacesStaticParams } from '@/server/actions/surrounding/fetchPlacesStaticParams';
import { setRequestLocale } from 'next-intl/server';
import { Suspense } from 'react';

export const generateStaticParams = async () => {
  const placesId = await fetchPlacesStaticParams();

  return placesId.map(({ id }) => ({ id }));
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
