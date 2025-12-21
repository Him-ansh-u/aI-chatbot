import { FEATURES } from '@/data/features';
import React from 'react';
import FeatureCard from './FeatureCard';

const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            About Our Chatbot
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Powered by cutting-edge artificial intelligence for natural conversations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(AboutSection);
