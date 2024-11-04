import { Params } from "@/client/types/Params";
import { setRequestLocale } from "next-intl/server";

export default async function Home({ params }: Params) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="flex-auto" role="main">
      <h1 className="text-7xl text-primary">homepage</h1>
    </main>
  );
}
