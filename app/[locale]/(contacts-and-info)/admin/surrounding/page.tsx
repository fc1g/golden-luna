import ErrorBoundary from '@/client/components/ErrorBoundary';
import AdminSurroundingPageSkeleton from '@/client/components/skeleton/AdminSurroundingPageSkeleton';
import WrappedAdminSurroundingPage from '@/client/components/ui/admin/surrounding/WrappedAdminSurroundingPage';
import { Params } from '@/client/types/Params';
import { auth } from '@/server/libs/auth';
import { redirect } from 'next/navigation';

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
  if (!session) redirect('/api/auth/signin');

  const currSearchParams = await searchParams;

  return (
    <div className="my-12 md:my-24">
      <ErrorBoundary>
        <Suspense fallback={<AdminSurroundingPageSkeleton />}>
          <WrappedAdminSurroundingPage
            searchParams={new URLSearchParams(currSearchParams)}
          />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
