import { Link } from '@/server/libs/i18n/routing';
import { useTranslations } from 'next-intl';

type LogoProps = {
  logoStyles: string;
};

export default function Logo({ logoStyles }: LogoProps) {
  const t = useTranslations('header.nav');

  return (
    <Link
      aria-label={`${t('home')} - GoldenLuna`}
      className={`${logoStyles} rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none`}
      href="/"
    >
      <span className="~text-xl/3xl">GoldenLuna</span>
    </Link>
  );
}
