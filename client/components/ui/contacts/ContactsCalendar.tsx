'use client';

import { Calendar } from '@/client/components/ui/calendar';
import { BookedDate } from '@/client/types/BookedDate';
import { Locale } from '@/server/types/Locale';
import { enUS, es, pl } from 'date-fns/locale';
import { useMemo } from 'react';

const locales = {
  en: enUS,
  pl,
  es,
};

type ContactsCalendarProps = {
  bookedDates: BookedDate[];
  locale: Locale;
};

export default function ContactsCalendar({
  locale,
  bookedDates,
}: ContactsCalendarProps) {
  const memoizedDates = useMemo(
    () =>
      bookedDates.map(({ initialDate, deadlineDate }) => ({
        from: new Date(initialDate),
        to: new Date(deadlineDate),
      })),
    [bookedDates],
  );

  return (
    <div className="flex justify-center">
      <Calendar
        selected={memoizedDates}
        className="rounded-xl border"
        locale={locales[locale]}
      />
    </div>
  );
}
