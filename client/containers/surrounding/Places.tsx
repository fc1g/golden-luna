import PlaceCard from '@/client/components/ui/surrounding/PlaceCard';
import { Children } from '@/client/types/Children';
import { SurroundingPlaces } from '@/client/types/SurroundingPlace';
import { Locale } from '@/server/types/Locale';

type PlacesProps = {
  places: SurroundingPlaces[];
  empty: string;
  locale: Locale;
} & Children;

export default function Places({
  places,
  empty,
  locale,
  children,
}: PlacesProps) {
  return (
    <section className="mx-auto max-w-screen-xl px-4 ~/md:~mb-4/8 2xl:max-w-screen-2xl">
      {places ? (
        <>
          <ul className="mb-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {places.map(place => (
              <li key={place.id}>
                <PlaceCard locale={locale} place={place} />
              </li>
            ))}
          </ul>

          {children}
        </>
      ) : (
        <p className="text-center text-3xl text-primary sm:col-span-2 md:col-span-3">
          {empty}
        </p>
      )}
    </section>
  );
}
