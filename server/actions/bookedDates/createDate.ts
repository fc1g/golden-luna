'use server';

import { redirect } from '@/server/libs/i18n/routing';
import { prisma } from '@/server/libs/prisma';
import { bookedDateSchema, FormFields } from '@/server/schemas/BookedDate';
import { Locale } from '@/server/types/Locale';

export const createDate = async (formData: FormFields, locale: Locale) => {
  try {
    const parsed = bookedDateSchema.safeParse(formData);

    if (!parsed.success)
      throw new Error(parsed.error.errors.map(e => e.message).join(', '));

    await prisma.bookedDate.create({
      data: parsed.data,
    });

    console.log('success');
  } catch (err) {
    console.error('An error occurred while creating bookedDate:', err);
    throw err;
  }

  redirect({ href: '/admin/contacts', locale });
};
