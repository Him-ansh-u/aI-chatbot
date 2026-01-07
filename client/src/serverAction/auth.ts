'use server';

import { LOGIN, SIGNUP } from '@/data/endpoints';
import { LoginPayload, SignupPayload, UserSchema } from '@/types/auth';
import { fetchData } from '@/utils/fetch.ut';
import { cookies } from 'next/headers';

const signupAction = async (payload: SignupPayload) => {
  return fetchData({
    url: SIGNUP,
    method: 'POST',
    body: payload,
  });
};

const loginAction = async (payload: LoginPayload) => {
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
};

const getMe = async () => {
  const res: { user: UserSchema } = await fetchData({
    url: '/api/auth/me',
    method: 'GET',
  });
  return res?.user;
};

const logout = async () => {
  (await cookies()).delete('token');
};

export { signupAction, loginAction, getMe, logout };
