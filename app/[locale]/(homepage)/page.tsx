import Hero from '@/client/containers/homepage/Hero';
import { Params } from '@/client/types/Params';
import { setRequestLocale } from 'next-intl/server';

export default async function Home({ params }: Params) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="flex-auto" role="main">
      <Hero locale={locale} />
    </main>
  );
}
