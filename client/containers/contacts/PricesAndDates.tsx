import ErrorBoundary from '@/client/components/ErrorBoundary';
import CalendarSkeleton from '@/client/components/skeleton/CalendarSkeleton';
import WrappedCalendar from '@/client/components/ui/contacts/WrappedCalendar';
import WrappedChart from '@/client/components/ui/contacts/WrappedChart';
import { Locale } from '@/server/types/Locale';
import { useTranslations } from 'next-intl';
import { Suspense } from 'react';

export default function PricesAndDates({ locale }: { locale: Locale }) {
  const t = useTranslations('contacts.chart');

  return (
    <section className="my-12 grid items-center gap-y-8 md:my-24 md:grid-cols-2 md:gap-y-0">
      <div role="region" aria-labelledby="charts-section">
        <h2 className="sr-only">{t('title')}</h2>

        <WrappedChart locale={locale} />

        <p className="text-center text-muted-foreground ~text-xs/base ~/md:~mt-0/6">
          {t('extra')}
        </p>
      </div>

      <ErrorBoundary>
        <Suspense fallback={<CalendarSkeleton />}>
          <WrappedCalendar locale={locale} />
        </Suspense>
      </ErrorBoundary>
    </section>
  );
}
