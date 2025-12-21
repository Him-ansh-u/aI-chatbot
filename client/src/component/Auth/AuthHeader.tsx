import { memo } from 'react';
import { LuMessageSquare } from 'react-icons/lu';

const AuthHeader = ({ isLogin }: { isLogin: boolean }) => {
  return (
    <>
      <div className="flex items-center justify-center mb-6">
        <div className="bg-indigo-600 rounded-xl p-3">
          <LuMessageSquare className="w-8 h-8 text-white" />
        </div>
      </div>

      <h2 className="text-3xl font-bold text-center text-white mb-2">
        {isLogin ? 'Welcome Back' : 'Create Account'}
      </h2>

      <p className="text-center text-gray-400 mb-8">
        {isLogin ? 'Login to your account' : 'Sign up to get started'}
      </p>
    </>
  );
};
export default memo(AuthHeader);
