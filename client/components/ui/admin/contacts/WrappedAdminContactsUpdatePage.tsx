'use client';

import { BookedDate } from '@/client/types/BookedDate';
import { updateDate } from '@/server/actions/bookedDates/updateDate';
import { bookedDateSchema, FormFields } from '@/server/schemas/BookedDate';
import { Locale } from '@/server/types/Locale';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '../../button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../form';
import { Input } from '../../input';

type WrappedAdminContactsUpdatePageProps = {
  bookedDate: BookedDate;
  id: string;
  locale: Locale;
  translations: {
    initialDate: {
      title: string;
      description: string;
    };
    deadlineDate: {
      title: string;
      description: string;
    };
    submit: string;
    submitting: string;
  };
};

export default function WrappedAdminContactsUpdatePage({
  bookedDate: { initialDate, deadlineDate },
  translations,
  locale,
  id,
}: WrappedAdminContactsUpdatePageProps) {
  const form = useForm<FormFields>({
    resolver: zodResolver(bookedDateSchema),
    defaultValues: {
      initialDate,
      deadlineDate,
    },
  });

  async function submitHandler(data: FormFields) {
    try {
      await updateDate(data, locale, id);
    } catch (err) {
      console.error('Error creating booked date:', err);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(submitHandler)}
        className="flex h-full flex-col gap-8 px-2 sm:flex-row sm:items-center sm:justify-center"
      >
        <FormField
          control={form.control}
          name="initialDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{translations.initialDate.title}</FormLabel>
              <FormControl>
                <Input type="date" placeholder="Initial date" {...field} />
              </FormControl>
              {form.formState.errors.initialDate ? (
                <FormMessage />
              ) : (
                <FormDescription>
                  {translations.initialDate.description}
                </FormDescription>
              )}
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="deadlineDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{translations.deadlineDate.title}</FormLabel>
              <FormControl>
                <Input type="date" placeholder="Deadline date" {...field} />
              </FormControl>
              {form.formState.errors.deadlineDate ? (
                <FormMessage />
              ) : (
                <FormDescription>
                  {translations.deadlineDate.description}
                </FormDescription>
              )}
            </FormItem>
          )}
        />

        <Button disabled={form.formState.isSubmitting} type="submit">
          {form.formState.isSubmitting
            ? translations.submitting
            : translations.submit}
        </Button>
      </form>
    </Form>
  );
}
