import React from 'react';
import { LuArrowRight } from 'react-icons/lu';

const HeroSection = () => {
  return (
    <section id="home" className="relative py-5 sm:py-20 md:py-28 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h1
          className="
          text-3xl
          sm:text-4xl
          md:text-5xl
          lg:text-6xl
          font-bold
          bg-gradient-to-r from-blue-400 to-purple-400
          bg-clip-text text-transparent
          mb-6
        "
        >
          Your Intelligent AI Assistant
        </h1>

        {/* Subheading */}
        <p
          className="
          text-sm
          sm:text-base
          md:text-lg
          lg:text-xl
          text-gray-400
          max-w-xl sm:max-w-2xl
          mx-auto
          mb-10
          leading-relaxed
        "
        >
          Experience the future of conversation with a modern AI chatbot built for learning,
          experimentation, and real-world interaction.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button
            className="
              w-full sm:w-auto
              flex items-center justify-center gap-2
              px-6 sm:px-8
              py-3
              bg-gradient-to-r from-blue-600 to-purple-600
              rounded-xl
              text-white
              transition-transform duration-300
              hover:scale-105
            "
          >
            Try Demo
            <LuArrowRight className="w-5 h-5" />
          </button>

          <a
            href="#built-for"
            className="
              w-full sm:w-auto
              px-6 sm:px-8
              py-3
              bg-gray-800/50
              border border-gray-700/50
              rounded-xl
              text-gray-200
              transition-transform duration-300
              hover:scale-105
            "
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default React.memo(HeroSection);
