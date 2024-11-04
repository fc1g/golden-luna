import Header from '@/client/components/ui/header/Header';
import Hero from '@/client/containers/homepage/Hero';
import Testimonials from '@/client/containers/homepage/Testimonials';
import { Params } from '@/client/types/Params';
import { setRequestLocale } from 'next-intl/server';

export default async function Home({ params }: Params) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header
        className="absolute inset-x-0 top-0 z-[999]"
        logoStyles="text-white"
        locale={locale}
      />

      <main className="flex-auto" role="main">
        <Hero locale={locale} />

        <Testimonials />
      </main>
    </>
  );
}
