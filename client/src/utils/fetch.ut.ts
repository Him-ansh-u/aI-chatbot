'use server';

import { cookies } from 'next/headers';

interface FetchDataParams {
  url: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: unknown;
  headers?: HeadersInit;
}

export async function fetchData<T = unknown>({
  url,
  method = 'GET',
  body,
  headers = {},
}: FetchDataParams): Promise<T> {
  const cookieStore = await cookies();

  // Get token from cookies (if exists)
  const token = cookieStore.get('token')?.value;

  const res = await fetch(`${process.env.NEXT_PUBLIC_BE_URL}${url}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
    cache: 'no-store',
  });
  console.log('Fetch Response:', res);
  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    return error.message || 'Something went wrong';
  }

  return res.json();
}
