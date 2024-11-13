'use client';

import navLinks from '@/data/navigation.json';
import { Link, usePathname } from '@/server/libs/i18n/routing';

type NavProps = {
  links: {
    home: string;
    about: string;
    surrounding: string;
    contacts: string;
  };
  className: string;
  children?: React.ReactNode;
};

export default function Nav({ className, links, children }: NavProps) {
  const pathname = usePathname();

  return (
    <ul aria-label="navigation" className={`${className} rounded-lg`}>
      {navLinks.map(link => (
        <li className="group rounded" key={link.label}>
          <Link
            className={`block rounded px-2 transition duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring group-hover:text-primary ${pathname === link.href ? 'text-primary' : ''}`}
            href={link.href}
          >
            {links[link.label as keyof typeof links]}
          </Link>
        </li>
      ))}

      {children && (
        <li className="flex items-center justify-around">{children}</li>
      )}
    </ul>
  );
}
