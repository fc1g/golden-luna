import BookingProcedureAndContacts from '@/client/containers/contacts/BookingProcedureAndContacts';
import PricesAndDates from '@/client/containers/contacts/PricesAndDates';
import { Locale } from '@/server/types/Locale';

type WrappedContactsProps = {
  locale: Locale;
};

export default function WrappedContacts({ locale }: WrappedContactsProps) {
  return (
    <>
      <PricesAndDates locale={locale} />

      <BookingProcedureAndContacts />
    </>
  );
}
