'use client';

import { Locale } from '@/server/types/Locale';
import PriceChart from './PriceChart';

export default function WrappedChart({ locale }: { locale: Locale }) {
  return <PriceChart locale={locale} />;
}
