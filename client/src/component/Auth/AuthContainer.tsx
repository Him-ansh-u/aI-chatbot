'use client';
import { FormFields } from '@/types/auth';
import { useState } from 'react';
import AuthActions from './AuthActions';
import AuthFormFields from './AuthFormFields';
import AuthHeader from './AuthHeader';

const INITIAL_FORM = {
  firstName: '',
  lastName: '',
  phone: '',
  password: '',
};

export default function AuthContainer() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState<FormFields>(INITIAL_FORM);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (isLogin) {
      console.log('Login:', {
        phone: formData.phone,
        password: formData.password,
      });
      alert('Login successful!');
    } else {
      console.log('Signup:', formData);
      alert('Signup successful!');
    }
  };

  const toggleMode = () => {
    setIsLogin((prev) => !prev);
    setFormData(INITIAL_FORM);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-2xl shadow-2xl w-full max-w-md p-8 border border-gray-800">
        <AuthHeader isLogin={isLogin} />

        <AuthFormFields isLogin={isLogin} formData={formData} onChange={handleChange} />

        <AuthActions isLogin={isLogin} onSubmit={handleSubmit} onToggle={toggleMode} />
      </div>
    </div>
  );
}
