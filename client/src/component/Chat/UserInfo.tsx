import { logout } from '@/serverAction/auth';
import { UserSchema } from '@/types/auth';
import { useState } from 'react';
import { LuChevronRight, LuLogOut, LuUser } from 'react-icons/lu';

const UserInfo = ({ user }: { user: UserSchema }) => {
  const { first_name, last_name, phone } = user;
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  return (
    <div className="p-4 border-t border-gray-800">
      <div className="relative">
        <button
          onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
          className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-gray-800 transition group"
        >
          {/* Avatar */}
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center flex-shrink-0">
            <LuUser size={20} className="text-white" />
          </div>

          {/* User Details */}
          <div className="flex-1 text-left overflow-hidden">
            <p className="text-white font-medium truncate">{`${first_name} ${last_name || ''}`}</p>
            <p className="text-gray-400 text-sm truncate">{phone || ''}</p>
          </div>

          {/* Chevron Icon */}
          <LuChevronRight
            size={16}
            className={`text-gray-400 transition-transform ${isUserMenuOpen ? 'rotate-90' : ''}`}
          />
        </button>

        {/* Dropdown Menu */}
        {isUserMenuOpen && (
          <div className="absolute bottom-full left-0 right-0 mb-2 bg-gray-800 rounded-xl border border-gray-700 shadow-lg overflow-hidden">
            <button
              onClick={async ()=>await logout()}
              className="w-full flex items-center gap-3 p-3 hover:bg-gray-700 transition text-left text-red-400 hover:text-red-300"
            >
              <LuLogOut size={18} />
              <span>Logout</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserInfo;
