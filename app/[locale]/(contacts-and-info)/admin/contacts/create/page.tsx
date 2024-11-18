import WrappedAdminContactsCreatePage from '@/client/components/ui/admin/contacts/WrappedAdminContactsCreatePage';
import { Params } from '@/client/types/Params';
import { auth } from '@/server/libs/auth';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { redirect } from 'next/navigation';

export default async function AdminContactsCreatePage({ params }: Params) {
  const { locale } = await params;
  setRequestLocale(locale);

  const session = await auth();
  if (!session) redirect('/api/auth/signin');

  const t = await getTranslations('admin.calendar');

  const translation = {
    initialDate: t('initialDate'),
    deadlineDate: t('deadlineDate'),
    submit: t('submit'),
    submitting: t('submitting'),
  };

  return <WrappedAdminContactsCreatePage translations={translation} />;
}
