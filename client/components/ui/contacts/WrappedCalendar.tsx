import { fetchDates } from '@/server/actions/bookedDates/fetchDates';
import { Locale } from '@/server/types/Locale';
import { unstable_noStore } from 'next/cache';
import ContactsCalendar from './ContactsCalendar';

export default async function WrappedCalendar({ locale }: { locale: Locale }) {
  unstable_noStore();

  const { bookedDates } = await fetchDates();

  return <ContactsCalendar bookedDates={bookedDates} locale={locale} />;
}
