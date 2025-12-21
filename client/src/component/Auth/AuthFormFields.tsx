import { FormFields } from '@/types/auth';
import { memo } from 'react';

function Input({ label, ...props }: { label: string; [key: string]: unknown }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-2">{label}</label>
      <input
        {...props}
        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-indigo-600 outline-none transition"
      />
    </div>
  );
}

const AuthFormFields = ({
  isLogin,
  formData,
  onChange,
}: {
  isLogin: boolean;
  formData: FormFields;
  onChange: unknown;
}) => {
  return (
    <div className="space-y-4">
      {!isLogin && (
        <div className="flex gap-4">
          <Input
            label="First Name"
            name="firstName"
            value={formData?.firstName}
            onChange={onChange}
            placeholder="John"
          />

          <Input
            label="Last Name"
            name="lastName"
            value={formData?.lastName}
            onChange={onChange}
            placeholder="Doe"
          />
        </div>
      )}

      <Input
        label="Phone Number"
        type="tel"
        name="phone"
        value={formData?.phone}
        onChange={onChange}
        placeholder="+1 (555) 000-0000"
      />

      <Input
        label="Password"
        type="password"
        name="password"
        value={formData?.password}
        onChange={onChange}
        placeholder="••••••••"
      />
    </div>
  );
};

export default memo(AuthFormFields);
