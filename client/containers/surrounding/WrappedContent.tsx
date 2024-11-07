import CustomPagination from '@/client/components/CustomPagination';
import { Locale } from '@/server/types/Locale';
import Places from './Places';

type WrappedContentProps = {
  paginationTranslations: {
    prevLabel: string;
    nextLabel: string;
    prevAriaLabel: string;
    nextAriaLabel: string;
  };
  empty: string;
  locale: Locale;
};

export default function WrappedContent({
  paginationTranslations,
  empty,
  locale,
}: WrappedContentProps) {
  const places: any[] = [];
  // TODO: fetch data

  return (
    <Places places={places} empty={empty} locale={locale}>
      <CustomPagination translations={paginationTranslations} results={30} />
    </Places>
  );
}
