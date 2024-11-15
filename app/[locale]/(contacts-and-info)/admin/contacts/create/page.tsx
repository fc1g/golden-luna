import WrappedAdminContactsCreatePage from '@/client/components/ui/admin/contacts/WrappedAdminContactsCreatePage';
import { Params } from '@/client/types/Params';
import { getTranslations, setRequestLocale } from 'next-intl/server';

export default async function AdminContactsCreatePage({ params }: Params) {
  const { locale } = await params;
  setRequestLocale(locale);

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
    <WrappedAdminContactsCreatePage
      locale={locale}
      translations={translation}
    />
  );
}
