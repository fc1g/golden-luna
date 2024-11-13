import '@/client/styles/hamburger.css';
import { Locale } from '@/server/types/Locale';
import { useTranslations } from 'next-intl';
import { Suspense } from 'react';
import { Skeleton } from '../skeleton';
import DarkMode from './DarkMode';
import Hamburger from './Hamburger';
import LangList from './LangList';
import Logo from './Logo';
import Nav from './Nav';

type HeaderProps = {
  logoStyles: string;
  className: string;
  locale: Locale;
};

export default function Header({ className, logoStyles, locale }: HeaderProps) {
  const t = useTranslations('header');

  const links = {
    home: t('nav.home'),
    about: t('nav.about'),
    surrounding: t('nav.surrounding'),
    contacts: t('nav.contacts'),
  };
  const darkMode = {
    toggleTheme: t('theme.toggle'),
    light: t('theme.light'),
    dark: t('theme.dark'),
    system: t('theme.system'),
  };
  const hamburger = {
    close: t('hamburger.close'),
    open: t('hamburger.open'),
    label: t('hamburger.label'),
  };
  const langList = {
    en: t('langList.en'),
    pl: t('langList.pl'),
    es: t('langList.es'),
  };

  return (
    <header className={className}>
      <nav className="flex items-center justify-between p-4 lg:px-6">
        <Logo logoStyles={logoStyles} />

        <Nav
          className="hidden items-center justify-center rounded border bg-background py-2 ~gap-4/12 ~/lg:~px-2/4 md:flex [&>li]:~/md:~p-3/0"
          links={links}
        />

        <div className="flex items-center justify-center space-x-4">
          <div className="hidden md:block">
            <DarkMode darkMode={darkMode}>
              <span className="sr-only" lang={locale}>
                {darkMode.toggleTheme}
              </span>
            </DarkMode>
          </div>

          <Suspense fallback={<Skeleton className="h-9 w-24 rounded-sm" />}>
            <LangList langList={langList} />
          </Suspense>

          <div className="md:hidden">
            <Hamburger hamburger={hamburger} locale={locale}>
              <Nav
                className="mt-4 flex w-full flex-col border border-gray-100 bg-primary-foreground p-4 font-medium dark:border-gray-700 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 rtl:space-x-reverse [&>li]:p-2 [&>lin]:w-full"
                links={links}
              >
                <DarkMode darkMode={darkMode}>
                  <span className="sr-only" lang={locale}>
                    {darkMode.toggleTheme}
                  </span>
                </DarkMode>
              </Nav>
            </Hamburger>
          </div>
        </div>
      </nav>
    </header>
  );
}
