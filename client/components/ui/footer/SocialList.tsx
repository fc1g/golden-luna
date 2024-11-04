import { Children } from "@/client/types/Children";
import { Locale } from "@/server/types/Locale";

export default function SocialList({ children }: Children) {
  return (
    <ul className="flex items-center justify-center gap-6 md:gap-12">
      {children}
    </ul>
  );
}

type SocialProps = {
  href: string;
  label: string;
  locale: Locale;
} & Children;

function Social({ href, label, locale, children }: SocialProps) {
  return (
    <li className="group">
      <a
        className="rounded focus:outline-offset-2 focus:outline-primary"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
      >
        {children}

        <span className="sr-only" lang={locale}>
          {label}
        </span>
      </a>
    </li>
  );
}

SocialList.Social = Social;
