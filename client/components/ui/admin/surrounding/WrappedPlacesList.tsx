import { SurroundingPlaces } from '@/client/types/SurroundingPlace';
import { useTranslations } from 'next-intl';
import PlacesList from './PlacesList';

type WrappedPlacesListProps = {
  places: SurroundingPlaces[];
  results: number;
};

export default function WrappedPlacesList({
  places,
  results,
}: WrappedPlacesListProps) {
  const t = useTranslations('surrounding');

  const translations = {
    empty: t('empty'),
    deleteQuestion: t('deletePlace'),
    pagination: {
      prevLabel: t('pagination.previous'),
      nextLabel: t('pagination.next'),
      prevAriaLabel: t('pagination.previousAria'),
      nextAriaLabel: t('pagination.nextAria'),
    },
  };

  return (
    <PlacesList data={places} results={results} translations={translations} />
  );
}
