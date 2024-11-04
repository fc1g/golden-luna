import Footer from "@/client/components/ui/footer/Footer";
import { Children } from "@/client/types/Children";
import { Params } from "@/client/types/Params";
import { routing } from "@/server/libs/i18n/routing";
import { Locale } from "@/server/types/Locale";
import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import Providers from "../(providers)/providers";

const inter = Inter({ subsets: ["latin"] });

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return {
    title: t("Metadata.title"),
    description: t("Metadata.description"),
    keywords: t("Metadata.keywords"),
  };
}

export default async function RootLayout({
  children,
  params,
}: Children & Params) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html className="h-full" lang={locale} suppressHydrationWarning>
      <body className={`${inter.className} h-full antialiased`}>
        <Providers>
          {children}

          <Footer locale={locale} />
        </Providers>
      </body>
    </html>
  );
}
