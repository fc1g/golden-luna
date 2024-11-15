import WrappedAdminContactsUpdatePage from '@/client/components/ui/admin/contacts/WrappedAdminContactsUpdatePage';
import { Params } from '@/client/types/Params';
import { fetchDate } from '@/server/actions/bookedDates/fetchDate';
import { fetchDatesStaticParams } from '@/server/actions/bookedDates/fetchDatesStaticParams';
import { setRequestLocale } from 'next-intl/server';

export const generateStaticParams = async () => {
  const bookedDatesId = await fetchDatesStaticParams();

  return bookedDatesId.map(({ id }) => ({ id }));
};

export default async function AdminContactsUpdatePage({ params }: Params) {
  const { locale, id } = await params;
  setRequestLocale(locale);

  const bookedDate = await fetchDate(id!);

  // TODO:
  // const t = await getTranslations();

  const translation = {
    initialDate: {
      title: 'initialdDate',
      description: 'This is initial date of booked date',
    },
    deadlineDate: {
      title: 'deadlineDate',
      description: 'This is deadline date of booked date',
    },
    submit: 'Submit',
    submitting: 'Submitting',
  };

  return (
    <WrappedAdminContactsUpdatePage
      bookedDate={bookedDate}
      translations={translation}
      id={id!}
      locale={locale}
    />
  );
}
