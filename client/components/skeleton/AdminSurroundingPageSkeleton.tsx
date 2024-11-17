import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from '../ui/pagination';
import { Skeleton } from '../ui/skeleton';

export default function AdminSurroundingPageSkeleton() {
  return (
    <section className="mx-auto max-w-screen-xl px-2 lg:px-6">
      <div className="mb-4 flex items-center justify-end">
        <Skeleton className="h-8 w-8" />
      </div>

      <ul className="mb-6 space-y-4">
        <>
          {Array.from({ length: 6 }, (_, i) => (
            <li
              className="flex w-full items-center justify-between rounded-lg border px-4 py-2"
              key={i}
            >
              <Skeleton className="h-12 w-12" />
              <div className="flex w-full items-center justify-between px-4">
                <div className="flex w-full flex-col gap-2">
                  <Skeleton className="h-6 w-32" />

                  <Skeleton className="h-3 w-1/2" />
                </div>

                <div className="flex items-center space-x-4">
                  <Skeleton className="h-4 w-4" />
                  <Skeleton className="h-4 w-4" />
                </div>
              </div>
            </li>
          ))}

          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <Skeleton className="h-9 w-[6.375rem] gap-1 pl-2.5" />
              </PaginationItem>

              {Array.from({ length: 3 }, (_, i) => (
                <PaginationItem key={i}>
                  <Skeleton className="h-9 w-9 gap-1 pr-2.5" />
                </PaginationItem>
              ))}

              <PaginationItem className="flex gap-1">
                {Array.from({ length: 3 }, (_, i) => (
                  <Skeleton key={i} className="h-2 w-2 rounded-full" />
                ))}
              </PaginationItem>

              <PaginationItem>
                <Skeleton className="h-9 w-[4.75rem] gap-1 pr-2.5" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </>
      </ul>
    </section>
  );
}
