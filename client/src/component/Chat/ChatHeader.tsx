import { memo } from 'react';
import { LuMenu, LuSparkles } from 'react-icons/lu';

const ChatHeader = ({ toggleSidebar, sidebarHeader=false }: { toggleSidebar?: () => void; sidebarHeader?: boolean }) => {
  return (
    <div className="h-20 border-b border-gray-800 flex items-center justify-between px-6 gap-4 bg-gray-900/30">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-linear-to-br from-blue-600 to-purple-600 rounded-xl">
          <LuSparkles size={22} />
        </div>
        <div className={sidebarHeader ? 'hidden' : ''}>
          <h1 className="text-xl font-bold text-white">Chat Assistant</h1>
          <p className="text-xs text-gray-400">Always here to help</p>
        </div>
      </div>
      <button onClick={toggleSidebar} className={`p-3 hover:bg-gray-800 rounded-xl  ${sidebarHeader ? '' : 'hidden'}`}>
        <LuMenu size={24} />
      </button>
    </div>
  );
};
export default memo(ChatHeader);
