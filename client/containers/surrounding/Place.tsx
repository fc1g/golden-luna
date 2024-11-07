'use client';

import Title from '@/client/components/Title';
import { Button } from '@/client/components/ui/button';
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
};

const LeafletMap = dynamic(() => import('./LeafMap'), {
  ssr: false,
});

export default function Place({
  routeText,
  houseText,
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
          <Title title={title[activeLocale]} subtitle="" />

          <p className="-mt-6 text-secondary-foreground ~/lg:~mb-3/6">
            {description[activeLocale]}
          </p>

          <Button variant="default" size="lg" asChild>
            <a target="_blank" href={routeLink}>
              <Button variant="link">{routeText} &rarr;</Button>
            </a>
          </Button>
        </div>
      </div>

      <div className={`map-container ${isLoaded ? 'loaded' : ''}`}>
        <LeafletMap
          coords={[coords.lat, coords.lng]}
          houseText={houseText}
          title={title[activeLocale]}
        />
      </div>
    </section>
  );
}
