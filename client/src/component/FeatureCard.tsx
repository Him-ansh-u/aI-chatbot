import React from 'react';

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
}

const FeatureCard = ({ icon: Icon, title, description, color }: FeatureCardProps) => {
  return (
    <div className="text-center p-6 bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl hover:border-gray-600/50 transition-all duration-300 hover:scale-105 shadow-lg">
      <div className="flex justify-center mb-4">
        <Icon className={`w-12 h-12 ${color}`} />
      </div>
      <h3 className="text-xl font-bold text-gray-100 mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default React.memo(FeatureCard);
