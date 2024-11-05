import Header from '@/client/components/ui/header/Header';
import HouseInfo from '@/client/containers/about/HouseInfo';
import { Params } from '@/client/types/Params';
import { setRequestLocale } from 'next-intl/server';

export default async function AboutPage({ params }: Params) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header
        className="absolute inset-x-0 top-0 z-20"
        logoStyles="invisible"
        locale={locale}
      />

      <main className="flex-auto" role="main">
        <HouseInfo />
      </main>
    </>
  );
}
