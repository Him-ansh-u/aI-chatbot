import React from 'react';
import { LuArrowRight } from 'react-icons/lu';

const HeroSection = () => {
  return (
    <section id="home" className="py-20 text-center">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
          Your Intelligent AI Assistant
        </h1>

        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Experience the future of conversation with our advanced chatbot technology.
        </p>

        <div className="flex justify-center gap-4">
          <button className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:scale-105 transition">
            Try Demo <LuArrowRight className="w-5 h-5" />
          </button>

          <button className="px-8 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl hover:scale-105 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default React.memo(HeroSection);
