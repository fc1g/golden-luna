'use client';

import { usePathname } from '@/server/libs/i18n/routing';
import { Locale } from '@/server/types/Locale';
import { useLocale } from 'next-intl';
import { useRouter, useSearchParams } from 'next/navigation';
import { useTransition } from 'react';
import { Button } from '../button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../dropdown-menu';

type LangListProps = {
  langList: {
    en: string;
    pl: string;
    es: string;
  };
};

export default function LangList({ langList }: LangListProps) {
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const router = useRouter();
  const localeActive = useLocale();
  const searchParams = useSearchParams();

  function changeLocale(nextLocale: 'en' | 'pl' | 'es') {
    startTransition(() => {
      router.replace(`/${nextLocale}/${pathname}?${searchParams}`);
    });
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        aria-haspopup="menu"
        className="w-24"
        asChild
        disabled={isPending}
      >
        <Button variant="outline">
          {localeActive === 'en'
            ? langList.en
            : localeActive === 'pl'
              ? langList.pl
              : langList.es}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {['en', 'pl', 'es'].map(lang => (
          <DropdownMenuItem
            key={lang}
            className="cursor-pointer"
            onClick={() => changeLocale(lang as Locale)}
          >
            {langList[lang as Locale]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
