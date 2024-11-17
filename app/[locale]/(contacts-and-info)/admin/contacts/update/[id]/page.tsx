import WrappedAdminContactsUpdatePage from '@/client/components/ui/admin/contacts/WrappedAdminContactsUpdatePage';
import { Params } from '@/client/types/Params';
import { fetchDate } from '@/server/actions/bookedDates/fetchDate';
import { fetchDatesStaticParams } from '@/server/actions/bookedDates/fetchDatesStaticParams';
import { auth } from '@/server/libs/auth';
import { redirect } from '@/server/libs/i18n/routing';
import { getTranslations, setRequestLocale } from 'next-intl/server';

export const generateStaticParams = async () => {
  const bookedDatesId = await fetchDatesStaticParams();

  return bookedDatesId.map(({ id }) => ({ id }));
};

export default async function AdminContactsUpdatePage({ params }: Params) {
  const { locale, id } = await params;
  setRequestLocale(locale);

  const session = await auth();
  if (!session) redirect({ href: '/', locale });

  const bookedDate = await fetchDate(id!);

  const t = await getTranslations('admin.calendar');

  const translation = {
    initialDate: t('initialDate'),
    deadlineDate: t('deadlineDate'),
    submit: t('submit'),
    submitting: t('submitting'),
  };

  return (
    <WrappedAdminContactsUpdatePage
      bookedDate={bookedDate}
      translations={translation}
    />
  );
}
