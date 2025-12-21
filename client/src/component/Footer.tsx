import { memo } from 'react';
import { LuMessageCircle } from 'react-icons/lu';

const Footer = () => {
  return (
    <footer className="bg-gray-900/50 backdrop-blur-xl border-t border-gray-800/50 py-12 mt-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-linear-to-br from-blue-600 to-purple-600 rounded-xl shadow-lg">
                <LuMessageCircle className="w-5 h-5" />
              </div>
              <span className="text-lg font-bold bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                ChatBot AI
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Empowering conversations with artificial intelligence.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-gray-100">Product</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Demo
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-gray-100">Company</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-gray-100">Support</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Privacy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800/50 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; 2025 Himanshu Sharma. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
