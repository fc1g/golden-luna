import WrappedAdminSurroundingUpdatePage from '@/client/components/ui/admin/surrounding/WrappedAdminSurroundingUpdatePage';
import { Params } from '@/client/types/Params';
import { fetchPlace } from '@/server/actions/surrounding/fetchPlace';
import { fetchPlaces } from '@/server/actions/surrounding/fetchPlaces';
import { auth } from '@/server/libs/auth';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { redirect } from 'next/navigation';

export const revalidate = 60;
export const dynamicParams = true;

export const generateStaticParams = async () => {
  const { places } = await fetchPlaces();

  return places.map(({ id }) => ({
    id,
  }));
};

export default async function AdminSurroundingUpdatePage({ params }: Params) {
  const { id, locale } = await params;
  setRequestLocale(locale);

  const session = await auth();
  if (!session) redirect('/api/auth/signin');

  const place = await fetchPlace(id!);

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

  return (
    <WrappedAdminSurroundingUpdatePage
      place={place}
      translations={translations}
    />
  );
}
