import ErrorBoundary from '@/client/components/ErrorBoundary';
import WrappedAdminSurroundingPage from '@/client/components/ui/admin/surrounding/WrappedAdminSurroundingPage';
import { Skeleton } from '@/client/components/ui/skeleton';
import { Params } from '@/client/types/Params';
import { auth } from '@/server/libs/auth';
import { redirect } from '@/server/libs/i18n/routing';
import { setRequestLocale } from 'next-intl/server';
import { Suspense } from 'react';

type AdminSurroundingPageProps = {
  searchParams: Promise<URLSearchParams>;
} & Params;

export default async function AdminSurroundingPage({
  searchParams,
  params,
}: AdminSurroundingPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const session = await auth();
  if (!session) redirect({ href: '/', locale });

  const currSearchParams = await searchParams;

  return (
    <div className="my-12 md:my-24">
      <ErrorBoundary>
        {/* TODO: */}
        <Suspense fallback={<Skeleton />}>
          <WrappedAdminSurroundingPage
            searchParams={new URLSearchParams(currSearchParams)}
          />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
