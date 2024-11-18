import NextAuth, { User } from 'next-auth';
import Google from 'next-auth/providers/google';
import {
  AUTH_GOOGLE_ID,
  AUTH_GOOGLE_SECRET,
  DEVELOPER_EMAIL,
  PROJECT_EMAIL,
} from '../env';

const allowedEmails = [DEVELOPER_EMAIL, PROJECT_EMAIL];

const authConfig = {
  providers: [
    Google({
      clientId: AUTH_GOOGLE_ID,
      clientSecret: AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    pages: {
      signIn: '/api/auth/signin',
    },
    async signIn({ user }: { user: User }) {
      if (allowedEmails.includes(user.email || '')) {
        return true;
      }

      console.warn(`Access denied for user: ${user.email}`);
      return false;
    },
  },
  trustHost: true,
};

export const {
  auth,
  handlers: { GET, POST },
} = NextAuth(authConfig);
