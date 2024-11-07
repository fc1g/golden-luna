import { useTranslations } from 'next-intl';

export default function BookingProcedure() {
  const t = useTranslations('contacts.bookingProcedure');

  const items = [
    {
      id: 'firstCol',
      text: t('firstCol'),
    },
    {
      id: 'secondCol',
      text: t('secondCol'),
    },
    {
      id: 'thirdCol',
      text: t('thirdCol'),
    },
    {
      id: 'forthCol',
      text: t('forthCol'),
    },
  ];

  return (
    <ul className="mx-auto mb-8 grid max-w-screen-xl md:grid-cols-2 lg:mb-12 2xl:max-w-screen-2xl">
      {items.map(({ id, text }) => (
        <li
          key={id}
          className="flex-[1_1_350px] border-b border-gray-200 bg-primary-foreground p-8 text-center text-secondary-foreground dark:border-gray-600 md:p-12 lg:border-r"
        >
          {text}
        </li>
      ))}
    </ul>
  );
}
