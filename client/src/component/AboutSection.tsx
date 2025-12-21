import { FEATURES } from '@/data/features';
import { memo } from 'react';
import FeatureCard from './FeatureCard';

const AboutSection = () => {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-14 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            About the Chatbot
          </h2>

          <p className="text-sm sm:text-base text-gray-400 max-w-xl sm:max-w-2xl mx-auto leading-relaxed">
            A personal AI chatbot project powered by modern language models, designed for natural
            conversations and real-world experimentation.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(AboutSection);
