'use server';

import { prisma } from '@/server/libs/prisma';
import { convertImage } from '@/server/services/convertImage';

export const fetchPlace = async (id: string) => {
  try {
    const surroundingPlace = await prisma.place.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        image: true,
        distance: true,
        routeLink: true,
        coords: true,
        title: true,
        subtitle: true,
        description: true,
        imageAltText: true,
      },
    });

    if (!surroundingPlace)
      throw new Error(
        JSON.stringify({
          statusCode: 404,
          message: `Failed to fetch a place with id: ${id}`,
        }),
      );

    return { ...surroundingPlace, image: convertImage(surroundingPlace.image) };
  } catch (err) {
    console.error('An error occurred while fetching surroundingPlace:', err);
    throw new Error('Failed to fetch surroundingPlace');
  }
};