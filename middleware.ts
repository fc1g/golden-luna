/* eslint-disable @typescript-eslint/no-explicit-any */
import { routing } from '@/server/libs/i18n/routing';
import createMiddleware from 'next-intl/middleware';
import { auth } from './server/libs/auth';

const nextIntlMiddleware = createMiddleware(routing);

export const middleware = async (request: any) => {
  const authResponse = await auth(request);

  if (authResponse) {
    return nextIntlMiddleware(request);
  }

  return authResponse;
};

export const config = {
  matcher: ['/', '/(en|pl|es)/:path*'],
};
