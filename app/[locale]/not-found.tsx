import { Button } from '@/client/components/ui/button';
import { Link } from '@/server/libs/i18n/routing';
import { useTranslations } from 'next-intl';

export default function NotFound() {
  const t = useTranslations('error');

  return (
    <section className="flex h-screen w-full items-center justify-center">
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl font-extrabold tracking-tight text-primary lg:text-9xl">
            404
          </h1>
          <p className="mb-4 text-3xl font-bold tracking-tight text-secondary-foreground md:text-4xl">
            {t('404m')}
          </p>
          <p className="mb-4 text-lg font-light text-muted-foreground">
            {t('404d')}{' '}
          </p>
          <Button variant="default" size="lg">
            <Link href="/">{t('404b')}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
