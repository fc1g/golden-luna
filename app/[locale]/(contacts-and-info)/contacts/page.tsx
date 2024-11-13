import WrappedContacts from '@/client/components/ui/contacts/WrappedContacts';
import { Params } from '@/client/types/Params';
import { setRequestLocale } from 'next-intl/server';

export default async function ContactsPage({ params }: Params) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <WrappedContacts locale={locale} />;
}
