'use client';

import { Locale } from '@/server/types/Locale';
import dynamic from 'next/dynamic';
import ChartSkeleton from '../../skeleton/ChartSkeleton';
const PriceChart = dynamic(
  () =>
    import('@/client/components/ui/contacts/PriceChart').then(
      mod => mod.default,
    ),
  {
    loading: () => <ChartSkeleton />,
  },
);

export default function WrappedChart({ locale }: { locale: Locale }) {
  return <PriceChart locale={locale} />;
}
