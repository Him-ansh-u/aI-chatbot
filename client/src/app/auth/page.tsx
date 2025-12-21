import { lazy } from 'react';

const AuthContainer = lazy(() => import('@/component/Auth/AuthContainer'));

export default function AuthForm() {
  return <AuthContainer />;
}
