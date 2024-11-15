import { Children } from '@/client/types/Children';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { ThemeProvider } from './theme-provider';

export default async function Providers({ children }: Children) {
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <div className="flex h-full min-h-screen flex-col">{children}</div>
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
