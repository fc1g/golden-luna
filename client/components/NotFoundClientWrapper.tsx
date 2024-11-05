'use client';

import { Link } from '@/server/libs/i18n/routing';
import { useLocale } from 'next-intl';
import { Button } from './ui/button';

type NotFoundClientWrapper = {
  message: string;
  description: string;
  back: string;
};

export default function NotFoundClientWrapper({
  message,
  description,
  back,
}: NotFoundClientWrapper) {
  const activeLocale = useLocale();

  return (
    <section className="flex h-screen w-full items-center justify-center">
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl font-extrabold tracking-tight text-primary lg:text-9xl">
            404
          </h1>
          <p className="mb-4 text-3xl font-bold tracking-tight text-secondary-foreground md:text-4xl">
            {message}
          </p>
          <p className="mb-4 text-lg font-light text-muted-foreground">
            {description}{' '}
          </p>
          <Button variant="default" size="lg">
            <Link href="/">{back}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
