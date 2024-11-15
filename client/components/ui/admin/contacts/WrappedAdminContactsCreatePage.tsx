'use client';

import { createDate } from '@/server/actions/bookedDates/createDate';
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

const defaultValues = {
  initialDate: '',
  deadlineDate: '',
};

type WrappedAdminContactsCreatePageProps = {
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

export default function WrappedAdminContactsCreatePage({
  locale,
  translations: { initialDate, deadlineDate, submit, submitting },
}: WrappedAdminContactsCreatePageProps) {
  const form = useForm<FormFields>({
    resolver: zodResolver(bookedDateSchema),
    defaultValues,
  });

  async function submitHandler(data: FormFields) {
    try {
      await createDate(data, locale);
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
              <FormLabel>{initialDate.title}</FormLabel>
              <FormControl>
                <Input type="date" placeholder="Initial date" {...field} />
              </FormControl>
              {form.formState.errors.initialDate ? (
                <FormMessage />
              ) : (
                <FormDescription>{initialDate.description}</FormDescription>
              )}
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="deadlineDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{deadlineDate.title}</FormLabel>
              <FormControl>
                <Input type="date" placeholder="Deadline date" {...field} />
              </FormControl>
              {form.formState.errors.deadlineDate ? (
                <FormMessage />
              ) : (
                <FormDescription>{deadlineDate.description}</FormDescription>
              )}
            </FormItem>
          )}
        />

        <Button disabled={form.formState.isSubmitting} type="submit">
          {form.formState.isSubmitting ? submitting : submit}
        </Button>
      </form>
    </Form>
  );
}
