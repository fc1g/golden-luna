import WrappedAdminSurroundingCreatePage from '@/client/components/ui/admin/surrounding/WrappedAdminSurroundingCreatePage';
import { Params } from '@/client/types/Params';
import { getTranslations, setRequestLocale } from 'next-intl/server';

export default async function AdminSurroundingCreatePage({ params }: Params) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('admin.surrounding');

  const translations = {
    title: t('title'),
    subtitle: t('subtitle'),
    description: t('description'),
    imageAltText: t('imageAltText'),
    image: t('image'),
    distance: t('distance'),
    routeLink: t('routeLink'),
    coords: {
      lat: t('coords.lat'),
      lng: t('coords.lng'),
    },
    submit: t('submit'),
    submitting: t('submitting'),
  };

  return <WrappedAdminSurroundingCreatePage translations={translations} />;
}
