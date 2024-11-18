import ErrorBoundary from '@/client/components/ErrorBoundary';
import AdminContactsPageSkeleton from '@/client/components/skeleton/AdminContactsPageSkeleton';
import WrappedAdminContactsPage from '@/client/components/ui/admin/contacts/WrappedAdminContactsPage';
import { Params } from '@/client/types/Params';
import { auth } from '@/server/libs/auth';
import { setRequestLocale } from 'next-intl/server';
import { redirect } from 'next/navigation';
import { Suspense } from 'react';

type AdminContactsPageProps = {
  searchParams: Promise<URLSearchParams>;
} & Params;

export default async function AdminContactsPage({
  searchParams,
  params,
}: AdminContactsPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const session = await auth();
  if (!session) redirect('/api/auth/signin');

  const currSearchParams = await searchParams;

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
