import { Locale } from "./types/Locale";

const { env } = process;

export const NODE_ENV = env.NODE_ENV;
export const DEFAULT_LOCALE = env.DEFAULT_LOCALE as Locale;
