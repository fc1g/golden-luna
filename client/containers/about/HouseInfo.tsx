import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/client/components/ui/tabs';
import { useTranslations } from 'next-intl';

export default function HouseInfo() {
  const t = useTranslations('about.houseInfo');

  const tabsContent = [
    {
      value: 'house',
      text: [t('house.firstPart'), t('house.secondPart')],
    },
    {
      value: 'surrounding',
      text: [t('surrounding.firstPart'), t('surrounding.secondPart')],
    },
  ];

  return (
    <section className="flex items-center justify-center ~/lg:~py-8/16">
      <Tabs defaultValue="house" className="text-center">
        <TabsList className="mb-4">
          {tabsContent.map(({ value }) => (
            <TabsTrigger
              key={value}
              className="text-xs md:text-sm"
              value={value}
            >
              {t(`${value}.title`)}
            </TabsTrigger>
          ))}
        </TabsList>
        {tabsContent.map(({ value, text }) => (
          <TabsContent
            key={value}
            className="rounded bg-primary-foreground ~/md:~text-xs/base ~/md:~p-2/4"
            value={value}
          >
            {text.map((part, i) => (
              <p key={i} className="max-w-4xl last:mt-4">
                {part}
              </p>
            ))}
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
