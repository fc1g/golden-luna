import { fetchDatesWithParams } from '@/server/actions/bookedDates/fetchDatesWithParams';
import WrappedBookedDatesList from './WrappedBookedDatesList';

type WrappedAdminContactsPageProps = {
  searchParams: URLSearchParams;
};

export default async function WrappedAdminContactsPage({
  searchParams,
}: WrappedAdminContactsPageProps) {
  const { bookedDates, results } = await fetchDatesWithParams(searchParams);

  return <WrappedBookedDatesList bookedDates={bookedDates} results={results} />;
}
