'use server';

import { prisma } from '@/server/libs/prisma';
import { convertImage } from '@/server/services/convertImage';

export const fetchPlaces = async (searchParams?: URLSearchParams) => {
  const sort = searchParams?.get('sort') || '';
  const page =
    Number(searchParams?.get('page')) > 0
      ? Number(searchParams?.get('page'))
      : 1;
  const take =
    Number(searchParams?.get('limit')) > 0
      ? Number(searchParams?.get('limit'))
      : 6;
  const skip = (page - 1) * take;

  try {
    const [surroundingPlaces, results] = await Promise.all([
      prisma.place.findMany({
        select: {
          id: true,
          image: true,
          title: true,
          subtitle: true,
          imageAltText: true,
        },
        skip,
        take,
        orderBy: sort
          ? {
              distance: sort === 'asc' ? 'asc' : 'desc',
            }
          : undefined,
      }),
      prisma.place.count(),
    ]);

    const places = surroundingPlaces.map(place => ({
      ...place,
      image: convertImage(place.image),
    }));

    return { places, results };
  } catch (err) {
    console.error('An error occurred while fetching surroundingPlaces:', err);
    throw new Error('Failed to fetch surroundingPlaces');
  }
};
