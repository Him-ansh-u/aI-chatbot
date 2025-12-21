'use client';
import React from 'react';
import { LuMessageCircle } from 'react-icons/lu';

const Header = () => {
  return (
    <header className="bg-gray-900/30 backdrop-blur-xl border-b border-gray-800/50 shadow-lg">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-linear-to-br from-blue-600 to-purple-600 rounded-xl shadow-lg">
            <LuMessageCircle className="w-6 h-6" />
          </div>
          <span className="text-xl font-bold bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            ChatBot AI
          </span>
        </div>

        <nav className="hidden md:flex gap-8">
          {['Home', 'About', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        <button
          onClick={() => {}}
          className="px-6 py-2 bg-linear-to-r from-blue-600 to-purple-600 rounded-xl transition-all hover:scale-105 shadow-lg"
        >
          Get Started
        </button>
      </div>
    </header>
  );
};

export default React.memo(Header);
