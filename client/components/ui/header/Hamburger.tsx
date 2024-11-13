'use client';

import { Locale } from '@/server/types/Locale';

type HamburgerProps = {
  isOpen: boolean;
  onClick: () => void;
  hamburger: {
    close: string;
    open: string;
    label: string;
  };
  locale: Locale;
};

export default function Hamburger({
  isOpen,
  onClick,
  hamburger: { open, close, label },
  locale,
}: HamburgerProps) {
  return (
    <>
      <button
        aria-label={isOpen ? close : open}
        aria-expanded={isOpen}
        type="button"
        onClick={onClick}
        className={`hamburger z-30 block md:hidden ${isOpen ? 'open' : ''}`}
      >
        <span className="hamburger-top" />
        <span className="hamburger-middle" />
        <span className="hamburger-bottom" />
        <span className="sr-only" lang={locale}>
          {label}
        </span>
      </button>
    </>
  );
}
