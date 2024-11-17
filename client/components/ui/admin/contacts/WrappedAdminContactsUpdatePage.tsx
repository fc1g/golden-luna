'use client';

import { useToast } from '@/client/hooks/use-toast';
import { BookedDate } from '@/client/types/BookedDate';
import { FORM_TOAST_DURATION } from '@/client/utils';
import { updateDate } from '@/server/actions/bookedDates/updateDate';
import { useRouter } from '@/server/libs/i18n/routing';
import { useActionState, useEffect, useState } from 'react';
import { ZodError } from 'zod';
import { Button } from '../../button';
import { Input } from '../../input';
import { Label } from '../../label';
import { ToastAction } from '../../toast';

type WrappedAdminContactsUpdatePageProps = {
  bookedDate: BookedDate;
  translations: {
    initialDate: string;
    deadlineDate: string;
    submit: string;
    submitting: string;
  };
};

export default function WrappedAdminContactsUpdatePage({
  bookedDate,
  translations,
}: WrappedAdminContactsUpdatePageProps) {
  const updateBookedDate = async (
    _: {
      message: string;
      details: string;
    },
    formData: FormData,
  ) => {
    const id = bookedDate.id;

    try {
      await updateDate(id, formData);

      return {
        message: 'Success',
        details: 'Successfully updated bookedDate',
      };
    } catch (err) {
      if (err instanceof ZodError) {
        console.error('Validation failed:', err);
        return {
          message: 'Validation failed',
          details: err.errors.map(e => e.message).join(', '),
        };
      }

      console.error('An error occurred while updating bookedDate:', err);
      return {
        message: 'Failed',
        details: 'Failed to update bookedDate',
      };
    }
  };

  const [error, formAction, isPending] = useActionState(updateBookedDate, {
    message: '',
    details: '',
  });
  const { toast } = useToast();
  const router = useRouter();
  const [initialDate, setInitialDate] = useState(bookedDate.initialDate);
  const [deadlineDate, setDeadlineDate] = useState(bookedDate.deadlineDate);

  useEffect(() => {
    if (!error.details || !error.message) return;

    toast({
      title: error.message,
      description: error.details,
      variant: error.message === 'Success' ? 'default' : 'destructive',
      duration: FORM_TOAST_DURATION,
      action:
        error.message === 'Success' ? (
          <ToastAction
            onClick={() => router.back()}
            altText="Return to contacts page"
          >
            Return
          </ToastAction>
        ) : undefined,
    });
  }, [toast, error, router]);

  return (
    <form
      action={formAction}
      className="flex h-[60vh] w-full flex-col justify-center"
    >
      <div className="mt-4 flex items-end justify-center space-x-6">
        <fieldset>
          <Label htmlFor="initialDate">{translations.initialDate}</Label>
          <Input
            id="initialDate"
            name="initialDate"
            value={initialDate}
            onChange={e => setInitialDate(e.target.value)}
            type="date"
            placeholder={translations.initialDate}
            required
          />
        </fieldset>

        <fieldset>
          <Label htmlFor="deadlineDate">{translations.deadlineDate}</Label>
          <Input
            id="deadlineDate"
            name="deadlineDate"
            value={deadlineDate}
            onChange={e => setDeadlineDate(e.target.value)}
            type="date"
            placeholder={translations.deadlineDate}
            required
          />
        </fieldset>

        <Button variant="default" size="lg" disabled={isPending}>
          {isPending ? translations.submitting : translations.submit}
        </Button>
      </div>
    </form>
  );
}
