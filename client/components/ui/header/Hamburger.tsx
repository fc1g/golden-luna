import { Children } from '@/client/types/Children';

type HamburgerProps = {
  isOpen: boolean;
  hamburger: {
    close: string;
    open: string;
    label: string;
  };
  setIsOpen: () => void;
} & Children;

export default function Hamburger({
  isOpen,
  setIsOpen,
  hamburger: { open, close },
  children,
}: HamburgerProps) {
  return (
    <button
      aria-label={isOpen ? close : open}
      aria-expanded={isOpen}
      type="button"
      onClick={setIsOpen}
      className={`hamburger z-30 block md:hidden ${isOpen ? 'open' : ''}`}
    >
      <span className="hamburger-top" />
      <span className="hamburger-middle" />
      <span className="hamburger-bottom" />
      {children}
    </button>
  );
}
