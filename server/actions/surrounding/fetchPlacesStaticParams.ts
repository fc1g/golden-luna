'use server';

import { prisma } from '@/server/libs/prisma';

type StaticParams = {
  id: string;
}[];

export const fetchPlacesStaticParams = async (): Promise<StaticParams> => {
  try {
    const placesId = await prisma.place.findMany({
      select: {
        id: true,
      },
    });

    return placesId;
  } catch (err) {
    console.error('Error fetching static params:', err);
    throw new Error('Failed to fetch static params');
  }
};
