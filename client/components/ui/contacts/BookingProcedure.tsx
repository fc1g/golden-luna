type BookingProcedureProps = {
  translations: {
    id: string;
    text: string;
  }[];
};

export default function BookingProcedure({
  translations,
}: BookingProcedureProps) {
  return (
    <ul className="mx-auto grid max-w-screen-xl ~/lg:~mb-8/12 md:grid-cols-2 2xl:max-w-screen-2xl">
      {translations.map(({ id, text }) => (
        <li
          key={id}
          className="min-h-32 border-b border-gray-200 bg-primary-foreground text-center text-secondary-foreground ~/md:~p-6/12 dark:border-gray-600 md:border-r"
        >
          {text}
        </li>
      ))}
    </ul>
  );
}
