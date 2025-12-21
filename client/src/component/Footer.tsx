import { memo } from 'react';
import { LuMessageCircle, LuSparkles } from 'react-icons/lu';

const Footer = () => {
  return (
    <footer className="mt-5 sm:mt-20 border-t border-gray-800/50 bg-gray-900/30 backdrop-blur-xl">
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-col items-center text-center gap-4">
          {/* Logo / Title */}
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl shadow-lg">
              <LuMessageCircle className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              AI Chatbot
            </span>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-400 max-w-md">
            A personal AI chatbot project built for learning and experimentation, powered by the{' '}
            <span className="text-blue-400">Google Gemini API</span>.
          </p>

          {/* Tech note */}
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <LuSparkles className="w-4 h-4" />
            <span>Free • Open Learning • Non-commercial</span>
          </div>

          {/* Copyright */}
          <p className="pt-4 text-xs text-gray-500">
            © 2025 Himanshu Sharma · Built with curiosity & code
          </p>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
