import NextAuth, { Session, User } from 'next-auth';
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
      } else {
        return false;
      }
    },
    authorized: async ({ auth }: { auth: Session | null }) => {
      return !!auth;
    },
  },
  trustHost: true,
};

export const {
  auth,
  handlers: { GET, POST },
} = NextAuth(authConfig);
