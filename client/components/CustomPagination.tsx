'use client';

import { usePathname } from '@/server/libs/i18n/routing';
import { Locale } from '@/server/types/Locale';
import { useLocale } from 'next-intl';
import { useSearchParams } from 'next/navigation';
import { useCallback } from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from './ui/pagination';

type CustomPaginationProps = {
  translations: {
    prevLabel: string;
    nextLabel: string;
    prevAriaLabel: string;
    nextAriaLabel: string;
  };
  results: number;
};

export default function CustomPagination({
  translations: { prevLabel, prevAriaLabel, nextLabel, nextAriaLabel },
  results,
}: CustomPaginationProps) {
  const searchParams = new URLSearchParams(useSearchParams());
  const pathname = usePathname();
  const activeLocale = useLocale() as Locale;
  const currPage = Number(searchParams.get('page')) || 1;
  const limit = Number(searchParams.get('limit')) || 6;
  const maxPage = Math.ceil(results / limit);

  const navLimit = 3;

  const buildLink = useCallback(
    (newPage: number) => {
      searchParams.set('page', String(newPage));

      return `${pathname}?${searchParams.toString()}`;
    },
    [searchParams, pathname],
  );

  const [first, second, third] = useCallback(() => {
    if (currPage === 1) return [currPage, currPage + 1, currPage + 2];
    if (currPage === maxPage) return [currPage - 2, currPage - 1, currPage];
    return [currPage - 1, currPage, currPage + 1];
  }, [currPage, maxPage])();

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            locale={activeLocale}
            label={prevLabel}
            ariaLabel={prevAriaLabel}
            className={`cursor-pointer ${currPage === 1 && 'pointer-events-none opacity-50'}`}
            href={buildLink(currPage - 1)}
          />
        </PaginationItem>

        {currPage > 2 && maxPage > navLimit && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        {[first, second, third].map(page => {
          if (page && maxPage >= page)
            return (
              <PaginationItem key={page}>
                <PaginationLink
                  href={buildLink(page)}
                  className={page === currPage ? 'bg-muted' : ''}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            );
          else return '';
        })}

        {currPage < maxPage - 1 && maxPage > navLimit && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        <PaginationItem>
          <PaginationNext
            locale={activeLocale}
            label={nextLabel}
            ariaLabel={nextAriaLabel}
            className={`cursor-pointer ${currPage === maxPage && 'pointer-events-none opacity-50'}`}
            href={buildLink(currPage + 1)}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
