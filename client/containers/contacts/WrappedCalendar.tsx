import { Locale } from '@/server/types/Locale';
import { unstable_noStore } from 'next/cache';
import ContactsCalendar from './ContactsCalendar';

export default function WrappedCalendar({ locale }: { locale: Locale }) {
  unstable_noStore();
  const bookedDates: any[] = [];
  // TODO: fetch bookedDates

  return <ContactsCalendar bookedDates={bookedDates} locale={locale} />;
}
