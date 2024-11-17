import { Locale } from './types/Locale';

const { env } = process;

export const NODE_ENV = env.NODE_ENV;
export const DEFAULT_LOCALE = env.DEFAULT_LOCALE as Locale;
export const DEVELOPER_EMAIL = env.DEVELOPER_EMAIL;
export const PROJECT_EMAIL = env.PROJECT_EMAIL;
export const AUTH_GOOGLE_ID = env.AUTH_GOOGLE_ID as string;
export const AUTH_GOOGLE_SECRET = env.AUTH_GOOGLE_SECRET as string;
