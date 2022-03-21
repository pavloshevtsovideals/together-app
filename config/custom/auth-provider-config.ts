import type { Nullable, AuthProviderConfig } from '../../types';
import GoogleProvider from 'next-auth/providers/google';

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID!;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET!;

export const authProviderConfig: Nullable<AuthProviderConfig> = {
  provider: GooleProvider({
    clientId: 413446987194-a0vn73aptj04j0sua62310chf3vkbhtr.apps.googleusercontent.com,
    clientSecret: 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,
  }),
  type: 'google',
};
