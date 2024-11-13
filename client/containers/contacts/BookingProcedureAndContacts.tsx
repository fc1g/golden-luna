import Title from '@/client/components/Title';
import BookingProcedure from '@/client/components/ui/contacts/BookingProcedure';
import ContactsList from '@/client/components/ui/contacts/ContactsList';
import { useTranslations } from 'next-intl';

export default function BookingProcedureAndContacts() {
  const t = useTranslations('contacts');

  const bookingProcedureTranslations = [
    {
      id: 'firstCol',
      text: t('bookingProcedure.firstCol'),
    },
    {
      id: 'secondCol',
      text: t('bookingProcedure.secondCol'),
    },
    {
      id: 'thirdCol',
      text: t('bookingProcedure.thirdCol'),
    },
    {
      id: 'forthCol',
      text: t('bookingProcedure.forthCol'),
    },
  ];

  const contactsListTranslations = {
    phoneText: t('list.phone'),
    emailText: t('list.email'),
    importantFirstPart: t('list.important.firstPart'),
    importantSecondPart: t('list.important.secondPart'),
    mainContact: {
      trigger: t('list.firstContact.trigger'),
      customField: t('list.firstContact.customField'),
      customDataValue: t('list.firstContact.customDataValue'),
      langPreference: t('list.firstContact.langPreference'),
    },
    supportContact: {
      trigger: t('list.secondContact.trigger'),
      customField: t('list.secondContact.customField'),
      langPreference: t('list.secondContact.langPreference'),
    },
  };

  return (
    <section className="my-12">
      <Title
        title={t('bookingProcedure.title')}
        subtitle={t('bookingProcedure.subtitle')}
      />

      <BookingProcedure translations={bookingProcedureTranslations} />

      <ContactsList translations={contactsListTranslations} />
    </section>
  );
}
