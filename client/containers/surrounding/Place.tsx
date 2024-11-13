'use client';

import Title from '@/client/components/Title';
import { Button } from '@/client/components/ui/button';
import '@/client/styles/leafMap.css';
import { SurroundingPlace } from '@/client/types/SurroundingPlace';
import { Locale } from '@/server/types/Locale';
import { useLocale } from 'next-intl';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useEffect, useState } from 'react';

type PlaceProps = {
  routeText: string;
  houseText: string;
  place: SurroundingPlace;
  enable: string;
  disable: string;
};

const LeafletMap = dynamic(
  () => import('@/client/components/ui/surrounding/LeafMap'),
  {
    ssr: false,
  },
);

export default function Place({
  routeText,
  houseText,
  enable,
  disable,
  place: { title, description, imageAltText, routeLink, coords, image },
}: PlaceProps) {
  const activeLocale = useLocale() as Locale;
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => setIsLoaded(true), []);

  return (
    <section className="text-center ~/lg:~px-4/12">
      <div className="my-16 grid gap-8 md:flex-row lg:grid-cols-2">
        <div className="relative h-[60vh]">
          <Image
            src={image}
            alt={imageAltText[activeLocale]}
            loading="lazy"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col items-center justify-center">
          <Title
            title={title[activeLocale]}
            subtitle={description[activeLocale]}
          />

          <a className="~-mt-0/8" target="_blank" href={routeLink}>
            <Button variant="link">{routeText} &rarr;</Button>
          </a>
        </div>
      </div>

      {isLoaded && (
        <div className="map-container loaded ~mb-8/16">
          <LeafletMap
            enable={enable}
            disable={disable}
            coords={[coords.lat, coords.lng]}
            houseText={houseText}
            title={title[activeLocale]}
          />
        </div>
      )}
    </section>
  );
}
