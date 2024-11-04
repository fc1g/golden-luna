import { DEFAULT_LOCALE } from "@/server/env";
import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "pl", "es"],

  defaultLocale: DEFAULT_LOCALE,
});

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
