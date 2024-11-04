import { Locale } from '@/server/types/Locale';
import { useTranslations } from 'next-intl';
import Logo from './Logo';
import WrappedNav from './WrappedNav';

type HeaderProps = {
  logoStyles: string;
  className: string;
  locale: Locale;
};

export default function Header({ className, logoStyles, locale }: HeaderProps) {
  const t = useTranslations('header');
  const translations = {
    darkMode: {
      toggleTheme: t('theme.toggle'),
      light: t('theme.light'),
      dark: t('theme.dark'),
      system: t('theme.system'),
    },
    hamburger: {
      close: t('hamburger.close'),
      open: t('hamburger.open'),
      label: t('hamburger.label'),
    },
    langList: {
      en: t('langList.en'),
      pl: t('langList.pl'),
      es: t('langList.es'),
    },
    links: {
      home: t('nav.home'),
      about: t('nav.about'),
      surrounding: t('nav.surrounding'),
      contacts: t('nav.contacts'),
    },
  };

  return (
    <header className={className}>
      <nav className="flex items-center justify-between p-4 lg:px-6">
        <Logo logoStyles={logoStyles} />

        <WrappedNav translations={translations} locale={locale} />
      </nav>
    </header>
  );
}
