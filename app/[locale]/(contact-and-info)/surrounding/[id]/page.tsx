import PlaceSkeleton from '@/client/components/skeleton/PlaceSkeleton';
import WrappedPlace from '@/client/containers/surrounding/WrappedPlace';
import { Params } from '@/client/types/Params';
import { setRequestLocale } from 'next-intl/server';
import { Suspense } from 'react';

// export const generateStaticParams = async () => {
// const placesId = ;
// return placesId.map(({ id }) => ({ id }));
// };

export default async function SurroundingPlacePage({ params }: Params) {
  const { id, locale } = await params;
  setRequestLocale(locale);

  return (
    <Suspense fallback={<PlaceSkeleton />}>
      <WrappedPlace id={id!} />
    </Suspense>
  );
}
