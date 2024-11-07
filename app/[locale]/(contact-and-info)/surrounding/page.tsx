import WrappedPage from '@/client/containers/surrounding/WrappedPage';
import { Params } from '@/client/types/Params';
import { setRequestLocale } from 'next-intl/server';
import { ReadonlyURLSearchParams } from 'next/navigation';

type SurroundingPageProps = {
  searchParams: Promise<ReadonlyURLSearchParams>;
} & Params;

export default async function SurroundingPage({
  params,
  searchParams,
}: SurroundingPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const currSearchParams = new URLSearchParams(await searchParams);

  return <WrappedPage searchParams={currSearchParams} locale={locale} />;
}
