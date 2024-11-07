import { Locale } from '@/server/types/Locale';

export type Params = {
  params: Promise<{
    locale: Locale;
    id?: string;
  }>;
};
