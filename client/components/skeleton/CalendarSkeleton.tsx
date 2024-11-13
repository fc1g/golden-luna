import { Skeleton } from '../ui/skeleton';

export default function CalendarSkeleton() {
  return (
    <div className="flex items-center justify-center">
      <Skeleton className="h-[20.450rem] w-[19.125rem] rounded-xl sm:h-[27.9375rem] sm:w-[29.625rem] md:h-[22.9375rem] md:w-[22.625rem] lg:h-[27.9375rem] lg:w-[29.625rem] xl:h-[32.9375rem] xl:w-[36.625rem]" />
    </div>
  );
}
