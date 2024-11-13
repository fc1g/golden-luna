import { Button } from '@/client/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/client/components/ui/card';
import { SurroundingPlaces } from '@/client/types/SurroundingPlace';
import { Link } from '@/server/libs/i18n/routing';
import { Locale } from '@/server/types/Locale';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

type PlaceCardProps = {
  locale: Locale;
  place: SurroundingPlaces;
};

export default function PlaceCard({
  place: { title, subtitle, imageAltText, id, image },
  locale,
}: PlaceCardProps) {
  const t = useTranslations('surrounding');

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title[locale]}</CardTitle>
        <CardDescription>{subtitle[locale]}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative h-32 w-full sm:h-40 md:h-48">
          <Image
            priority
            src={image}
            alt={imageAltText[locale]}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="rounded object-cover"
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild>
          <Link href={`/surrounding/${id}`}>{t('placeMoreInfo')} &darr;</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
