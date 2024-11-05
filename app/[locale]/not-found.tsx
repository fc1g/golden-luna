import NotFoundClientWrapper from '@/client/components/NotFoundClientWrapper';
import { useTranslations } from 'next-intl';

export default function NotFound() {
  const t = useTranslations('error');

  return (
    <NotFoundClientWrapper
      message={t('404m')}
      description={t('404d')}
      back={t('404b')}
    />
  );
}
