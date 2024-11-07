'use client';

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/client/components/ui/chart';
import { getPrice } from '@/client/services/getPrice';
import { type Locale } from '@/server/types/Locale';
import { format } from 'date-fns';
import { enUS, es, pl } from 'date-fns/locale';
import { useMemo } from 'react';
import { Bar, BarChart, CartesianGrid, LabelList } from 'recharts';

const chartConfig: ChartConfig = {
  price: {
    label: 'Price',
    color: '#2563eb',
  },
};

type ChartData = {
  month: string;
  price: number;
};

export default function PriceChart({ locale }: { locale: Locale }) {
  const lang = locale === 'en' ? enUS : locale === 'pl' ? pl : es;

  const chartData: ChartData[] = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => ({
        month: format(new Date(2024, i), 'MMM', { locale: lang }),
        price: getPrice(i),
      })),
    [lang],
  );

  return (
    <ChartContainer config={chartConfig} className="min-h-40 w-full">
      <BarChart data={chartData} accessibilityLayer>
        <CartesianGrid vertical={false} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend className="mt-4" content={<ChartLegendContent />} />
        <Bar dataKey="price" fill="var(--color-price)" radius={4}>
          <LabelList dataKey="month" position="bottom" />
        </Bar>
      </BarChart>
    </ChartContainer>
  );
}
