import 'server-only';

import { jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";
import { redirect } from 'next/navigation';
import { cache } from 'react';

type SessionPayload = {
  userId: string;
  expiredAt: Date;
};

const encodedKey = new TextEncoder().encode(process.env.SECRET_KEY);

export async function createSession(userId: string) {
  const expiredAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const session = await encrypt({ userId, expiredAt });

  (await cookies()).set("session", session, {
    httpOnly: true, // prevent client from accessing cookie
    secure: process.env.NODE_ENV === "production", // true for https protocol
    expires: expiredAt,
    sameSite: "lax", // to prevent CSRF attack
  });
}

export async function encrypt(payload: SessionPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(encodedKey);
}

export async function decrypt(session: string | undefined = "") {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (error) {
    console.log("Failed to verify session", error);
    return null;
  }
}



export async function verifySession() {
  const authUser = await cachedGetAuthUser();
  
  if(!authUser) {
    redirect('/login')
  }
}

export async function deleteSession() {
  const cookieStore = await cookies();
  cookieStore.delete('session');
}

export async function getAuthUser() {
  const cookieStore = await cookies();
  const session = cookieStore.get('session');
  const authUser = await decrypt(session?.value);
  return authUser;
}

export const cachedGetAuthUser = cache(getAuthUser);