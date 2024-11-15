import { z } from 'zod';

export const bookedDateSchema = z
  .object({
    initialDate: z.string().date(),
    deadlineDate: z.string().date(),
  })
  .refine(
    ({ initialDate, deadlineDate }) =>
      new Date(initialDate) < new Date(deadlineDate),
    {
      message: 'initial date must be earlier than deadline date',
      path: ['deadlineDate'],
    },
  );

export type FormFields = z.infer<typeof bookedDateSchema>;
