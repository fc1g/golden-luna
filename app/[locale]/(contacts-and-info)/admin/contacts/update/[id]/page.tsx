import WrappedAdminContactsUpdatePage from '@/client/components/ui/admin/contacts/WrappedAdminContactsUpdatePage';
import { Params } from '@/client/types/Params';
import { fetchDate } from '@/server/actions/bookedDates/fetchDate';
import { fetchDatesStaticParams } from '@/server/actions/bookedDates/fetchDatesStaticParams';
import { getTranslations, setRequestLocale } from 'next-intl/server';

export const generateStaticParams = async () => {
  const bookedDatesId = await fetchDatesStaticParams();

  return bookedDatesId.map(({ id }) => ({ id }));
};

export default async function AdminContactsUpdatePage({ params }: Params) {
  const { locale, id } = await params;
  setRequestLocale(locale);

  const bookedDate = await fetchDate(id!);

  const t = await getTranslations('admin.calendar');

  const translation = {
    initialDate: {
      title: t('initialDate.title'),
      description: t('initialDate.description'),
    },
    deadlineDate: {
      title: t('deadlineDate.title'),
      description: t('deadlineDate.description'),
    },
    submit: t('submit'),
    submitting: t('submitting'),
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
