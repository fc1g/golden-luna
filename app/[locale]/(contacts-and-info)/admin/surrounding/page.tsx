import ErrorBoundary from '@/client/components/ErrorBoundary';
import AdminSurroundingPageSkeleton from '@/client/components/skeleton/AdminSurroundingPageSkeleton';
import WrappedAdminSurroundingPage from '@/client/components/ui/admin/surrounding/WrappedAdminSurroundingPage';
import { Params } from '@/client/types/Params';

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
