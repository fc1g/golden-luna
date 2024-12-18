'use server';

import { prisma } from '@/server/libs/prisma';

type StaticParams = {
  id: string;
}[];

export const fetchDatesStaticParams = async (): Promise<StaticParams> => {
  try {
    const bookedDatesId = await prisma.bookedDate.findMany({
      select: {
        id: true,
      },
    });

    return bookedDatesId;
  } catch (err) {
    console.error('Failed to fetch static params:', err);
    throw new Error('Failed to fetch static params');
  }
};
