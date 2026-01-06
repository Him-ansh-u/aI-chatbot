import { memo } from 'react';

const AuthActions = ({
  isLogin,
  onSubmit,
  onToggle,
  isLoading,
}: {
  isLogin: boolean;
  onSubmit: () => void;
  onToggle: () => void;
  isLoading?: boolean;
}) => {
  return (
    <>
      <button
        onClick={onSubmit}
        className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition mt-6"
      >
        {isLogin ? 'Login' : 'Sign Up'}
      </button>

      <div className="mt-6 text-center">
        <p className="text-gray-400">
          {isLogin ? "Don't have an account? " : 'Already have an account? '}
          <button
            onClick={onToggle}
            className="text-indigo-500 font-semibold hover:text-indigo-400 transition"
          >
            {isLogin ? 'Sign Up' : 'Login'}
          </button>
        </p>
      </div>
    </>
  );
};
export default memo(AuthActions);
