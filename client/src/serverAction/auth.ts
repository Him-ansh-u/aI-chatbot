'use server';

import { LOGIN, SIGNUP } from '@/data/endpoints';
import { LoginPayload, SignupPayload } from '@/types/auth';
import { fetchData } from '@/utils/fetch.ut';
import { cookies } from 'next/headers';

async function signupAction(payload: SignupPayload) {
  return fetchData({    
    url: SIGNUP,
    method: 'POST',
    body: payload,
  });
}

async function loginAction(payload: LoginPayload) {
  const res = await fetchData<{
    token: string;
  }>({
    url: LOGIN,
    method: 'POST',
    body: payload,
  });

  (await cookies()).set('token', res.token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });

  return { success: true };
}

async function getMe() {
  return fetchData({
    url: '/api/me',
    method: 'GET',
  });
}


export { signupAction, loginAction, getMe };