'use client';

import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';

import { FormFields } from '@/types/auth';

import AuthActions from './AuthActions';
import AuthFormFields from './AuthFormFields';
import AuthHeader from './AuthHeader';
import { loginAction, signupAction } from '@/serverAction/auth';

const INITIAL_FORM: FormFields = {
  firstName: '',
  lastName: '',
  phone: '',
  password: '',
};

export default function AuthContainer() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState<FormFields>(INITIAL_FORM);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    setError(null);

    startTransition(async () => {
      try {
        if (isLogin) {
          await loginAction({
            phone: formData.phone,
            password: formData.password,
          });

          // token is stored in httpOnly cookie by server action
          router.push('/chat');
        } else {
          await signupAction({
            first_name: formData.firstName,
            last_name: formData.lastName,
            phone: formData.phone,
            password: formData.password,
          });

          // after signup → switch to login
          setIsLogin(true);
          setFormData(INITIAL_FORM);
        }
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : 'Something went wrong');
      }
    });
  };

  const toggleMode = () => {
    setIsLogin((prev) => !prev);
    setFormData(INITIAL_FORM);
    setError(null);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-2xl shadow-2xl w-full max-w-md p-8 border border-gray-800">
        <AuthHeader isLogin={isLogin} />

        <AuthFormFields
          isLogin={isLogin}
          formData={formData}
          onChange={handleChange}
        />

        {error && (
          <p className="mt-3 text-sm text-red-500 text-center">
            {error}
          </p>
        )}

        <AuthActions
          isLogin={isLogin}
          onSubmit={handleSubmit}
          onToggle={toggleMode}
          isLoading={isPending}
        />
      </div>
    </div>
  );
}
