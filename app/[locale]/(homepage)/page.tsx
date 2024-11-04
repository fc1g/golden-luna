import Testimonials from "@/client/containers/homepage/Testimonials";
import { Params } from "@/client/types/Params";
import { setRequestLocale } from "next-intl/server";

export default async function Home({ params }: Params) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="flex-auto" role="main">
      <Testimonials />
    </main>
  );
}
