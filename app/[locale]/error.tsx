'use client';

import { Button } from '@/client/components/ui/button';

type ErrorProps = {
  error: Error;
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  return (
    <section role="alert" className="flex flex-1 items-center justify-center">
      <div className="text-center">
        <p className="mb-4 text-3xl font-bold tracking-tight text-secondary-foreground md:text-4xl">
          {error.message}
        </p>

        <Button onClick={() => reset()} variant="default" size="lg">
          Reset
        </Button>
      </div>
    </section>
  );
}
