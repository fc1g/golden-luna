'use client';

import { useToast } from '@/client/hooks/use-toast';
import { FORM_TOAST_DURATION } from '@/client/utils';
import { createDate } from '@/server/actions/bookedDates/createDate';
import { useRouter } from '@/server/libs/i18n/routing';
import { useActionState, useEffect } from 'react';
import { Button } from '../../button';
import { Input } from '../../input';
import { Label } from '../../label';
import { ToastAction } from '../../toast';

type WrappedAdminContactsCreatePageProps = {
  translations: {
    initialDate: string;
    deadlineDate: string;
    submit: string;
    submitting: string;
  };
};

export default function WrappedAdminContactsCreatePage({
  translations: { initialDate, deadlineDate, submit, submitting },
}: WrappedAdminContactsCreatePageProps) {
  const [error, formAction, isPending] = useActionState(createDate, {
    message: '',
    details: '',
  });
  const { toast } = useToast();
  const router = useRouter();

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
      className="flex h-full w-full items-center justify-center"
      action={formAction}
    >
      <div className="mt-4 flex items-end justify-center space-x-6">
        <fieldset>
          <Label htmlFor="initialDate">{initialDate}</Label>
          <Input
            id="initialDate"
            name="initialDate"
            type="date"
            placeholder={initialDate}
            required
          />
        </fieldset>

        <fieldset>
          <Label htmlFor="deadlineDate">{deadlineDate}</Label>
          <Input
            id="deadlineDate"
            name="deadlineDate"
            type="date"
            placeholder={deadlineDate}
            required
          />
        </fieldset>

        <Button variant="default" size="lg" disabled={isPending}>
          {isPending ? submitting : submit}
        </Button>
      </div>
    </form>
  );
}
