import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/client/components/ui/carousel';
import { Image as ImageType } from '@/client/types/Image';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

import houseFromOutsideDesktop from '@/public/images/desktop/houseFromOutside.webp';
import houseFromOutsideMobile from '@/public/images/mobile/houseFromOutside.webp';

import parkDesktop from '@/public/images/desktop/park.webp';
import parkMobile from '@/public/images/mobile/park.webp';

import beachDesktop from '@/public/images/desktop/beach.webp';
import beachMobile from '@/public/images/mobile/beach.webp';

import playgroundNearSeaDesktop from '@/public/images/desktop/playgroundNearSea.webp';
import playgroundNearSeaMobile from '@/public/images/mobile/playgroundNearSea.webp';

import playgroundDesktop from '@/public/images/desktop/playground.webp';
import playgroundMobile from '@/public/images/mobile/playground.webp';

import poolDesktop from '@/public/images/desktop/pool.webp';
import poolMobile from '@/public/images/mobile/pool.webp';

import firstBathroomDesktop from '@/public/images/desktop/firstBathroom.webp';
import firstBathroomMobile from '@/public/images/mobile/firstBathroom.webp';

import secondBathroomDesktop from '@/public/images/desktop/secondBathroom.webp';
import secondBathroomMobile from '@/public/images/mobile/secondBathroom.webp';

import secondRoomDesktop from '@/public/images/desktop/secondRoom.webp';
import secondRoomMobile from '@/public/images/mobile/secondRoom.webp';

import firstRoomDesktop from '@/public/images/desktop/firstRoom.webp';
import firstRoomMobile from '@/public/images/mobile/firstRoom.webp';

import kitchenSecondPartDesktop from '@/public/images/desktop/kitchenSecondPart.webp';
import kitchenSecondPartMobile from '@/public/images/mobile/kitchenSecondPart.webp';

import kitchenFirstPartDesktop from '@/public/images/desktop/kitchenFirstPart.webp';
import kitchenFirstPartMobile from '@/public/images/mobile/kitchenFirstPart.webp';

import kitchenDesktop from '@/public/images/desktop/kitchen.webp';
import kitchenMobile from '@/public/images/mobile/kitchen.webp';

import loungeDesktop from '@/public/images/desktop/lounge.webp';
import loungeMobile from '@/public/images/mobile/lounge.webp';

import dinningRoomDesktop from '@/public/images/desktop/dinningRoom.webp';
import dinningRoomMobile from '@/public/images/mobile/dinningRoom.webp';

export default function Gallery() {
  const t = useTranslations('about.gallery');
  const images: ImageType[] = [
    {
      src: {
        desktop: loungeDesktop,
        mobile: loungeMobile,
      },
      altText: t('lounge'),
    },

    {
      src: {
        desktop: dinningRoomDesktop,
        mobile: dinningRoomMobile,
      },
      altText: t('dinningRoom'),
    },

    {
      src: {
        desktop: kitchenDesktop,
        mobile: kitchenMobile,
      },
      altText: t('kitchen'),
    },

    {
      src: {
        desktop: kitchenFirstPartDesktop,
        mobile: kitchenFirstPartMobile,
      },
      altText: t('kitchenFirstPart'),
    },

    {
      src: {
        desktop: kitchenSecondPartDesktop,
        mobile: kitchenSecondPartMobile,
      },
      altText: t('kitchenSecondPart'),
    },

    {
      src: {
        desktop: firstRoomDesktop,
        mobile: firstRoomMobile,
      },
      altText: t('firstRoom'),
    },

    {
      src: {
        desktop: secondRoomDesktop,
        mobile: secondRoomMobile,
      },
      altText: t('secondRoom'),
    },

    {
      src: {
        desktop: firstBathroomDesktop,
        mobile: firstBathroomMobile,
      },
      altText: t('firstBathroom'),
    },

    {
      src: {
        desktop: secondBathroomDesktop,
        mobile: secondBathroomMobile,
      },
      altText: t('secondBathroom'),
    },

    {
      src: {
        desktop: poolDesktop,
        mobile: poolMobile,
      },
      altText: t('pool'),
    },

    {
      src: {
        desktop: playgroundDesktop,
        mobile: playgroundMobile,
      },
      altText: t('playground'),
    },

    {
      src: {
        desktop: playgroundNearSeaDesktop,
        mobile: playgroundNearSeaMobile,
      },
      altText: t('playgroundNearSea'),
    },

    {
      src: {
        desktop: beachDesktop,
        mobile: beachMobile,
      },
      altText: t('beach'),
    },

    {
      src: {
        desktop: parkDesktop,
        mobile: parkMobile,
      },
      altText: t('park'),
    },

    {
      src: {
        desktop: houseFromOutsideDesktop,
        mobile: houseFromOutsideMobile,
      },
      altText: t('houseFromOutside'),
    },
  ];

  return (
    <section className="flex items-center justify-center">
      <Carousel
        opts={{
          loop: true,
        }}
        className="relative mx-auto w-full"
      >
        <CarouselContent>
          {images.map(({ src: { desktop, mobile }, altText }) => (
            <CarouselItem
              className="relative h-screen before:absolute before:inset-0 before:z-[1] before:block before:bg-gradient-to-r before:from-[#000000d0] before:to-[#000000d0] before:opacity-30 before:content-['']"
              key={altText}
            >
              <Image
                loading="lazy"
                fill
                sizes="(max-width: 600px) 375px, (min-width: 601px) 1280px"
                src={desktop}
                alt={altText}
                className="hidden rounded object-cover md:block"
              />
              <Image
                loading="lazy"
                fill
                sizes="(max-width: 600px) 375px, (min-width: 601px) 1280px"
                src={mobile}
                alt={altText}
                className="rounded object-cover md:hidden"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          aria-label="previous"
          className="absolute left-5 top-1/2 -translate-y-1/2"
        />
        <CarouselNext
          aria-label="next"
          className="absolute right-5 top-1/2 -translate-y-1/2"
        />
      </Carousel>
    </section>
  );
}
