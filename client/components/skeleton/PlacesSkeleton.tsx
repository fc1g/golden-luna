import { Button } from '../ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from '../ui/pagination';
import { Skeleton } from '../ui/skeleton';

export default function SurroundingPageSkeleton({ limit }: { limit: number }) {
  return (
    <section className="~/md:~mb-4/8">
      <div className="mx-auto mb-8 grid max-w-screen-xl px-4 ~gap-8/16 sm:grid-cols-2 lg:grid-cols-3 2xl:max-w-screen-2xl">
        {Array.from({ length: limit || 6 }, (_, i) => (
          <Card className="h-[20.25rem] w-full sm:h-[24.25rem]" key={i}>
            <CardHeader>
              <div className="mb-1 font-semibold leading-none tracking-tight">
                <Skeleton className="h-4 w-32" />
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-3 w-48" />
              </div>
            </CardHeader>

            <CardContent>
              <Skeleton className="mt-1 h-32 w-full sm:h-40 md:h-48" />
            </CardContent>

            <CardFooter>
              <Button asChild>
                <Skeleton className="w-[6.8rem]" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

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
    </section>
  );
}
