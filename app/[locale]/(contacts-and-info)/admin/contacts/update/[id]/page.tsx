import WrappedAdminContactsUpdatePage from '@/client/components/ui/admin/contacts/WrappedAdminContactsUpdatePage';
import { Params } from '@/client/types/Params';
import { fetchDate } from '@/server/actions/bookedDates/fetchDate';
import { fetchDates } from '@/server/actions/bookedDates/fetchDates';
import { auth } from '@/server/libs/auth';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { redirect } from 'next/navigation';

export const revalidate = 60;
export const dynamicParams = true;

export const generateStaticParams = async () => {
  const { bookedDates } = await fetchDates();

  return bookedDates.map(({ id }) => ({
    id,
  }));
};

export default async function AdminContactsUpdatePage({ params }: Params) {
  const { locale, id } = await params;
  setRequestLocale(locale);

  const session = await auth();
  if (!session) redirect('/api/auth/signin');

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
