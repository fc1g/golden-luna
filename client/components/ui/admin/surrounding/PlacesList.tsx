'use client';

import CustomPagination from '@/client/components/CustomPagination';
import { SurroundingPlaces } from '@/client/types/SurroundingPlace';
import { deletePlace } from '@/server/actions/surrounding/deletePlace';
import { Link, usePathname, useRouter } from '@/server/libs/i18n/routing';
import { Locale } from '@/server/types/Locale';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { startTransition, useOptimistic } from 'react';
import { IoCreateOutline } from 'react-icons/io5';
import { RiDeleteBinLine, RiPencilLine } from 'react-icons/ri';

type PlacesListProps = {
  data: SurroundingPlaces[];
  results: number;
  translations: {
    empty: string;
    deleteQuestion: string;
    pagination: {
      prevLabel: string;
      nextLabel: string;
      prevAriaLabel: string;
      nextAriaLabel: string;
    };
  };
};

export default function PlacesList({
  data,
  results,
  translations: { pagination, empty, deleteQuestion },
}: PlacesListProps) {
  const activeLocale = useLocale() as Locale;
  const searchParams = new URLSearchParams(useSearchParams());
  const router = useRouter();
  const pathname = usePathname();
  const currPage = Number(searchParams.get('page')) || 1;
  if (!data.length && currPage > 1) {
    searchParams.set('page', `${currPage - 1}`);
    router.replace(`${pathname}?${searchParams.toString()}`);
  }

  const [optimisticPlaces, optimisticDelete] = useOptimistic(
    data,
    (currentPlaces, placeId) =>
      currentPlaces.filter(({ id }) => id !== placeId),
  );

  async function deleteHandler(id: string) {
    const decision = confirm(deleteQuestion);
    if (!decision) return;

    startTransition(() => {
      optimisticDelete(id);
    });

    await deletePlace(id);
  }

  return (
    <section className="mx-auto max-w-screen-xl px-2 lg:px-6">
      <div className="mb-4 flex items-center justify-end">
        <Link href="/admin/surrounding/create">
          <IoCreateOutline className="h-8 w-8 cursor-pointer" />
        </Link>
      </div>

      <ul className="mb-6 space-y-4">
        {optimisticPlaces.length > 0 ? (
          <>
            {optimisticPlaces.map(
              ({ id, image, imageAltText, title, subtitle }) => (
                <li
                  className="flex w-full items-center justify-between rounded-lg border px-4 py-2"
                  key={id}
                >
                  <Image
                    loading="lazy"
                    src={image}
                    alt={imageAltText[activeLocale]}
                    className="h-12 w-12 object-cover"
                    width={48}
                    height={48}
                  />
                  <div className="flex w-full items-center justify-between px-4">
                    <div className="flex flex-col">
                      <h3>{title[activeLocale]}</h3>

                      <p className="text-xs text-muted-foreground">
                        {subtitle[activeLocale]}
                      </p>
                    </div>

                    <div className="flex items-center space-x-4">
                      <Link href={`/admin/surrounding/update/${id}`}>
                        <RiPencilLine className="h-4 w-4 cursor-pointer" />
                      </Link>
                      <RiDeleteBinLine
                        onClick={() => deleteHandler(id)}
                        className="h-4 w-4 cursor-pointer"
                      />
                    </div>
                  </div>
                </li>
              ),
            )}
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
