import { useTranslations } from 'next-intl';
import Image from 'next/image';

import { Button } from '@/client/components/ui/button';
import desk from '@/public/images/desktop/houseFromOutside.webp';
import mobile from '@/public/images/mobile/houseFromOutside.webp';
import { Link } from '@/server/libs/i18n/routing';
import { Locale } from '@/server/types/Locale';

type Data = {
  size: 'sm' | 'default' | 'lg';
  className: string;
}[];

const data: Data = [
  {
    size: 'sm',
    className: 'md:hidden',
  },
  {
    size: 'default',
    className: 'hidden md:inline-flex lg:hidden',
  },
  {
    size: 'lg',
    className: 'hidden lg:inline-flex',
  },
];

export default function Hero({ locale }: { locale: Locale }) {
  const t = useTranslations('homepage.hero');

  return (
    <section className="relative mx-auto flex h-screen w-full before:absolute before:inset-0 before:z-[1] before:block before:bg-gradient-to-r before:from-[#00000080] before:to-[#00000080] before:opacity-75 before:content-['']">
      {/* TODO: */}
      <Image
        src={mobile}
        alt="gs"
        priority
        fill
        sizes="(max-width: 600px) 375px, (min-width: 601px) 1280px"
        className="object-cover md:hidden"
      />
      {/* TODO: */}
      <Image
        src={desk}
        alt="gs"
        priority
        fill
        sizes="(max-width: 600px) 375px, (min-width: 601px) 1280px"
        className="hidden object-cover md:block"
      />

      <div className="relative z-[2] flex flex-col justify-center ~/md:~px-3/6">
        <h1
          className={`${locale === 'en' ? '~max-w-72/2xl' : '~max-w-80/3xl'} text-white ~text-xl/5xl md:mt-8`}
        >
          {t('title.firstPart')}{' '}
          <span className="text-[#85cbff]">{t('title.vacation')}</span>{' '}
          {t('title.secondPart')}
        </h1>

        <p className="mb-6 mt-2 text-white ~text-sm/2xl">{t('subtitle')}</p>

        {data.map(({ size, className }) => (
          <div key={size}>
            <Button className={className} variant="outline" size={size} asChild>
              <Link href="/about">{t('moreInfo')} &darr;</Link>
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}
