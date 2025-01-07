import WrappedAdminContactsCreatePage from '@/client/components/ui/admin/contacts/WrappedAdminContactsCreatePage';
import { Params } from '@/client/types/Params';
import { getTranslations, setRequestLocale } from 'next-intl/server';

export default async function AdminContactsCreatePage({ params }: Params) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('admin.calendar');

  const translation = {
    initialDate: t('initialDate'),
    deadlineDate: t('deadlineDate'),
    submit: t('submit'),
    submitting: t('submitting'),
  };

  return <WrappedAdminContactsCreatePage translations={translation} />;
}
