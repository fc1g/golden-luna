import ErrorBoundary from '@/client/components/ErrorBoundary';
import CalendarSkeleton from '@/client/components/skeleton/CalendarSkeleton';
import Title from '@/client/components/Title';
import BookingProcedure from '@/client/containers/contacts/BookingProcedure';
import ContactsList from '@/client/containers/contacts/ContactsList';
import PriceChart from '@/client/containers/contacts/PriceChart';
import WrappedCalendar from '@/client/containers/contacts/WrappedCalendar';
import { Params } from '@/client/types/Params';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Suspense } from 'react';

export default async function ContactsPage({ params }: Params) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations();

  return (
    <>
      <section className="grid items-center gap-y-8 ~/md:~my-12/24 md:grid-cols-2 md:gap-y-0">
        <div role="region" aria-labelledby="charts-section">
          <h2 className="sr-only">{t('contacts.chart.title')}</h2>

          <PriceChart locale={locale} />

          <p className="text-center text-muted-foreground ~text-xs/base ~/lg:~mt-0/6">
            {t('contacts.chart.extra')}
          </p>
        </div>

        <ErrorBoundary>
          <Suspense fallback={<CalendarSkeleton />}>
            <WrappedCalendar locale={locale} />
          </Suspense>
        </ErrorBoundary>
      </section>

      <section>
        <Title
          title={t('contacts.bookingProcedure.title')}
          subtitle={t('contacts.bookingProcedure.subtitle')}
        />

        <BookingProcedure />
      </section>

      <ContactsList />
    </>
  );
}
