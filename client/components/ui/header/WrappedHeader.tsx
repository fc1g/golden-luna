'use client';

import { Locale } from '@/server/types/Locale';
import { Suspense, useMemo, useState } from 'react';
import { Skeleton } from '../skeleton';
import DarkMode from './DarkMode';
import Hamburger from './Hamburger';
import LangList from './LangList';
import Nav from './Nav';

type WrappedHeaderProps = {
  locale: Locale;
  translations: {
    links: {
      home: string;
      about: string;
      surrounding: string;
      contacts: string;
    };
    darkMode: {
      toggleTheme: string;
      light: string;
      dark: string;
      system: string;
    };
    hamburger: {
      close: string;
      open: string;
      label: string;
    };
    langList: {
      en: string;
      pl: string;
      es: string;
    };
  };
};

export default function WrappedHeader({
  locale,
  translations,
}: WrappedHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { links, darkMode, langList, hamburger } = useMemo(
    () => translations,
    [translations],
  );

  return (
    <>
      <Nav
        onClick={() => setIsOpen(false)}
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
          <Hamburger
            hamburger={hamburger}
            locale={locale}
            isOpen={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          />

          <div
            className={`${isOpen ? 'absolute inset-x-0 top-0 z-40 mt-12' : 'hidden'}`}
          >
            <Nav
              onClick={() => setIsOpen(false)}
              className="mt-4 flex w-full flex-col border border-gray-100 bg-primary-foreground p-4 font-medium dark:border-gray-700 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 rtl:space-x-reverse [&>li]:p-2 [&>lin]:w-full"
              links={links}
            >
              <DarkMode darkMode={darkMode}>
                <span className="sr-only" lang={locale}>
                  {darkMode.toggleTheme}
                </span>
              </DarkMode>
            </Nav>
          </div>
        </div>
      </div>
    </>
  );
}
