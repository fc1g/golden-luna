import Filters from '@/client/containers/surrounding/Filters';
import { Locale } from '@/server/types/Locale';
import { useTranslations } from 'next-intl';
import { Suspense } from 'react';
import ErrorBoundary from '../../ErrorBoundary';
import SurroundingPageSkeleton from '../../skeleton/PlacesSkeleton';
import WrappedPlaces from './WrappedPlaces';

type WrappedSurroundingPageProps = {
  searchParams: URLSearchParams;
  locale: Locale;
};

export default function WrappedSurroundingPage({
  searchParams,
  locale,
}: WrappedSurroundingPageProps) {
  const t = useTranslations('surrounding');

  const filtersTranslations = {
    sortText: t('filters.sort'),
    limitText: t('filters.limit'),
    filtersText: t('filters.text'),
    sortData: {
      low: t('filters.sortTypes.low'),
      high: t('filters.sortTypes.high'),
    },
    limitData: {
      three: t('filters.limitTypes.three'),
      nine: t('filters.limitTypes.nine'),
    },
  };

  const paginationTranslations = {
    prevLabel: t('pagination.previous'),
    nextLabel: t('pagination.next'),
    prevAriaLabel: t('pagination.previousAria'),
    nextAriaLabel: t('pagination.nextAria'),
  };

  return (
    <>
      <Filters translations={filtersTranslations} />

      <ErrorBoundary>
        <Suspense
          fallback={
            <SurroundingPageSkeleton
              limit={Number(searchParams.get('limit'))}
            />
          }
        >
          <WrappedPlaces
            translations={paginationTranslations}
            params={searchParams}
            empty={t('empty')}
            locale={locale}
          />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}
