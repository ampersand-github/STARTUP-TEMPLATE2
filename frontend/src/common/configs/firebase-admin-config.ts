import admin from "firebase-admin";

import { DecodedIdToken } from "firebase-admin/lib/auth/token-verifier";

const firebasePrivateKey = process.env.FIREBASE_PRIVATE_KEY as string;
const initializeApp = () => {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: firebasePrivateKey.replace(/\\n/g, "\n"),
    }),
  });
};

admin.apps.length ? admin.app() : initializeApp();
const firebaseAdminAuth = admin.auth();

export const verifyIdToken = async (idToken: string): Promise<DecodedIdToken> => {
  return await firebaseAdminAuth.verifyIdToken(idToken, true);
};

export const revokeRefreshTokens = async (token: string): Promise<void> => {
  const decodedIdToken = await firebaseAdminAuth.verifyIdToken(token);
  return await firebaseAdminAuth.revokeRefreshTokens(decodedIdToken.uid);
};
