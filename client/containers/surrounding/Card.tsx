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
        <div className="relative h-48 w-full">
          <Image
            loading="lazy"
            src={image}
            alt={imageAltText[locale]}
            fill
            sizes="25vw"
            className="object-cover"
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button size="lg" asChild>
          <Link href={`/surrounding/${id}`}>{t('placeMoreInfo')} &darr;</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
