import WrappedAdminContactsCreatePage from '@/client/components/ui/admin/contacts/WrappedAdminContactsCreatePage';
import { Params } from '@/client/types/Params';
import { auth } from '@/server/libs/auth';
import { redirect } from '@/server/libs/i18n/routing';
import { getTranslations, setRequestLocale } from 'next-intl/server';

export default async function AdminContactsCreatePage({ params }: Params) {
  const { locale } = await params;
  setRequestLocale(locale);

  const session = await auth();
  if (!session) redirect({ href: '/', locale });

  const t = await getTranslations('admin.calendar');

  const translation = {
    initialDate: t('initialDate'),
    deadlineDate: t('deadlineDate'),
    submit: t('submit'),
    submitting: t('submitting'),
  };

  return <WrappedAdminContactsCreatePage translations={translation} />;
}
