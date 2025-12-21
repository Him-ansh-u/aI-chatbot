'use client';
import React from 'react';
import { LuMessageCircle } from 'react-icons/lu';

const Header = () => {
  return (
    <header className="bg-gray-900/30 backdrop-blur-xl border-b border-gray-800/50 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="p-2 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl shadow-lg">
            <LuMessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            ChatBot AI
          </span>
        </div>

        {/* Navigation */}
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

        {/* CTA Button */}
        <button
          onClick={() => {}}
          className="
            px-3 py-1.5 sm:px-6 sm:py-2
            text-sm sm:text-base
            bg-gradient-to-r from-blue-600 to-purple-600
            rounded-lg sm:rounded-xl
            transition-transform duration-300
            hover:scale-105
            shadow-lg
          "
        >
          Get Started
        </button>
      </div>
    </header>
  );
};

export default React.memo(Header);
