import WrappedAdminContactsCreatePage from '@/client/components/ui/admin/contacts/WrappedAdminContactsCreatePage';
import { Params } from '@/client/types/Params';
import { setRequestLocale } from 'next-intl/server';

export default async function AdminContactsCreatePage({ params }: Params) {
  const { locale } = await params;
  setRequestLocale(locale);

  // TODO:
  // const t = await getTranslations('admin.calendar');

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
    <WrappedAdminContactsCreatePage
      locale={locale}
      translations={translation}
    />
  );
}
