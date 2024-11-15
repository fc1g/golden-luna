import ErrorBoundary from '@/client/components/ErrorBoundary';
import AdminContactsPageSkeleton from '@/client/components/skeleton/AdminContactsPageSkeleton';
import WrappedAdminContactsPage from '@/client/components/ui/admin/contacts/WrappedAdminContactsPage';
import { Params } from '@/client/types/Params';
import { setRequestLocale } from 'next-intl/server';
import { Suspense } from 'react';

type AdminContactsPageProps = {
  searchParams: Promise<URLSearchParams>;
} & Params;

export default async function AdminContactsPage({
  searchParams,
  params,
}: AdminContactsPageProps) {
  const { locale } = await params;
  const currSearchParams = await searchParams;
  setRequestLocale(locale);

  return (
    <div className="my-12 md:my-24">
      <ErrorBoundary>
        <Suspense fallback={<AdminContactsPageSkeleton />}>
          <WrappedAdminContactsPage
            searchParams={new URLSearchParams(currSearchParams)}
          />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
