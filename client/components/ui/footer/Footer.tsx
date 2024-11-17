import tools from '@/data/tools.json';
import { Locale } from '@/server/types/Locale';
import { useTranslations } from 'next-intl';
import { FaFacebook } from 'react-icons/fa';
import { Button } from '../button';
import SocialList from './SocialList';

export default function Footer({ locale }: { locale: Locale }) {
  const t = useTranslations('footer');

  return (
    <footer className="my-1 flex-col space-y-4 p-1 text-center text-xs text-muted-foreground sm:my-2 sm:p-2 sm:text-sm md:lg:text-base lg:space-y-6">
      <div>
        &copy; Golden Luna. {t('copyrights')}
        {tools.map(({ href, label }, i) => {
          const condition = i + 1 !== tools.length;

          return (
            <div className="inline-block px-1" key={label}>
              <Button
                className="px-1 text-xs sm:px-2 md:text-base"
                variant="link"
                size="sm"
              >
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex={-1}
                  href={href}
                >
                  {label}
                </a>
              </Button>

              {condition && <span className="pl-1">&</span>}
            </div>
          );
        })}
      </div>

      <SocialList>
        <SocialList.Social
          locale={locale}
          href="https://www.facebook.com/people/Golden-Luna/100089141321163/?sk=about"
          label="Facebook"
        >
          <FaFacebook className="text-xl text-muted-foreground transition duration-300 group-hover:-translate-y-1 group-hover:text-secondary-foreground" />
        </SocialList.Social>

        {/* TODO: */}
        {/* <SocialList.Social locale={locale} href="#" label="Instagram">
          <FaInstagram className="text-xl text-muted-foreground transition duration-300 group-hover:-translate-y-1 group-hover:text-secondary-foreground" />
        </SocialList.Social> */}
      </SocialList>
    </footer>
  );
}
