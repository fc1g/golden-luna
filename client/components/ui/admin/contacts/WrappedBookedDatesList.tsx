import { BookedDate } from '@/client/types/BookedDate';
import { useTranslations } from 'next-intl';
import BookedDatesList from './BookedDatesList';

type WrappedBookedDatesListProps = {
  bookedDates: BookedDate[];
  results: number;
};

export default function WrappedBookedDatesList({
  bookedDates,
  results,
}: WrappedBookedDatesListProps) {
  const t = useTranslations('surrounding');

  const translations = {
    empty: t('empty'),
    from: t('from'),
    to: t('to'),
    pagination: {
      prevLabel: t('pagination.previous'),
      nextLabel: t('pagination.next'),
      prevAriaLabel: t('pagination.previousAria'),
      nextAriaLabel: t('pagination.nextAria'),
    },
  };

  return (
    <BookedDatesList
      data={bookedDates}
      results={results}
      translations={translations}
    />
  );
}
