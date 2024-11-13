'use server';

import { BookedDate } from '@/client/types/BookedDate';
import { prisma } from '@/server/libs/prisma';
import { deleteExpired } from './deleteExpired';

export const fetchDates = async (): Promise<{
  bookedDates: BookedDate[];
}> => {
  try {
    const bookedDates = await prisma.bookedDate.findMany();

    const delitionPromise = bookedDates
      .filter(({ deadlineDate }) => new Date(deadlineDate) < new Date())
      .map(({ id }) => deleteExpired(id));

    await Promise.all(delitionPromise);

    return { bookedDates };
  } catch (err) {
    console.error('Error fetching booked dates:', err);
    throw new Error('Failed to fetch booked dates.');
  }
};
