'use client';

import { Children } from '@/client/types/Children';
import { Locale } from '@/server/types/Locale';
import { useState } from 'react';

type HamburgerProps = {
  hamburger: {
    close: string;
    open: string;
    label: string;
  };
  locale: Locale;
} & Children;

export default function Hamburger({
  hamburger: { open, close, label },
  locale,
  children,
}: HamburgerProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        aria-label={isOpen ? close : open}
        aria-expanded={isOpen}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`hamburger z-30 block md:hidden ${isOpen ? 'open' : ''}`}
      >
        <span className="hamburger-top" />
        <span className="hamburger-middle" />
        <span className="hamburger-bottom" />
        <span className="sr-only" lang={locale}>
          {label}
        </span>
      </button>

      <div
        className={`${isOpen ? 'absolute inset-x-0 top-0 z-40 mt-12' : 'hidden'}`}
      >
        {children}
      </div>
    </>
  );
}
