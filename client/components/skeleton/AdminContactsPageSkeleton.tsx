import { Skeleton } from '../ui/skeleton';

export default function AdminContactsPageSkeleton() {
  return (
    <section className="max-w-sxreen-xl mx-auto px-2 lg:px-6 2xl:max-w-screen-2xl">
      <div className="mb-4 flex items-center justify-end">
        <Skeleton className="h-8 w-8" />
      </div>

      <ul className="mb-6 space-y-4">
        {Array.from({ length: 6 }, (_, i) => (
          <li
            className="flex w-full items-center justify-between rounded-lg border px-4 py-2"
            key={i}
          >
            <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-8 sm:space-y-0">
              <Skeleton className="h-6 w-36" />

              <Skeleton className="h-6 w-36" />
            </div>

            <div className="flex items-center space-x-4">
              <Skeleton className="h-4 w-4" />

              <Skeleton className="h-4 w-4" />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
