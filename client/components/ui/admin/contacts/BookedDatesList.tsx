'use client';

import CustomPagination from '@/client/components/CustomPagination';
import { BookedDate } from '@/client/types/BookedDate';
import { deleteDate } from '@/server/actions/bookedDates/deleteDate';
import { Link, usePathname, useRouter } from '@/server/libs/i18n/routing';
import { useSearchParams } from 'next/navigation';
import { startTransition, useOptimistic } from 'react';
import { IoCreateOutline } from 'react-icons/io5';
import { RiDeleteBinLine, RiPencilLine } from 'react-icons/ri';

type BookedDatesListProps = {
  data: BookedDate[];
  results: number;
  translations: {
    empty: string;
    from: string;
    to: string;
    pagination: {
      prevLabel: string;
      nextLabel: string;
      prevAriaLabel: string;
      nextAriaLabel: string;
    };
  };
};

export default function BookedDatesList({
  data,
  results,
  translations: { pagination, empty, from, to },
}: BookedDatesListProps) {
  const searchParams = new URLSearchParams(useSearchParams());
  const router = useRouter();
  const pathname = usePathname();
  const currPage = Number(searchParams.get('page')) || 1;
  if (!data.length && currPage > 1) {
    searchParams.set('page', `${currPage - 1}`);
    router.replace(`${pathname}?${searchParams.toString()}`);
  }

  const [optimisticBookedDates, optimisticDelete] = useOptimistic(
    data,
    (currentBookedDates, bookedDateId) =>
      currentBookedDates.filter(({ id }) => id !== bookedDateId),
  );

  async function deleteHandler(id: string) {
    startTransition(() => {
      optimisticDelete(id);
    });

    await deleteDate(id);
  }

  return (
    <section className="max-w-sxreen-xl mx-auto px-2 lg:px-6 2xl:max-w-screen-2xl">
      <div className="mb-4 flex items-center justify-end">
        <Link href="/admin/contacts/create">
          <IoCreateOutline className="h-8 w-8 cursor-pointer" />
        </Link>
      </div>

      <ul className="mb-6 space-y-4">
        {optimisticBookedDates.length > 0 ? (
          <>
            {optimisticBookedDates.map(({ id, initialDate, deadlineDate }) => (
              <li
                className="flex w-full items-center justify-between rounded-lg border px-4 py-2"
                key={id}
              >
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-8 sm:space-y-0">
                  <p>
                    {from}: {initialDate}
                  </p>

                  <p>
                    {to}: {deadlineDate}
                  </p>
                </div>

                <div className="flex items-center space-x-4">
                  <Link href={`/admin/contacts/update/${id}`}>
                    <RiPencilLine className="h-4 w-4 cursor-pointer" />
                  </Link>

                  <RiDeleteBinLine
                    onClick={() => deleteHandler(id)}
                    className="h-4 w-4 cursor-pointer"
                  />
                </div>
              </li>
            ))}

            <CustomPagination
              results={results}
              translations={{
                prevLabel: pagination.prevLabel,
                nextLabel: pagination.nextLabel,
                prevAriaLabel: pagination.prevAriaLabel,
                nextAriaLabel: pagination.nextAriaLabel,
              }}
            />
          </>
        ) : (
          <p className="text-center text-3xl text-primary sm:col-span-2 md:col-span-3">
            {empty}
          </p>
        )}
      </ul>
    </section>
  );
}
