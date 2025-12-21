import React from 'react';

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
}

const FeatureCard = ({ icon: Icon, title, description, color }: FeatureCardProps) => {
  return (
    <div
      className="
        text-center
        h-full
        p-5 sm:p-6
        bg-gray-800/50 backdrop-blur-xl
        border border-gray-700/50
        rounded-2xl
        shadow-lg
        transition-all duration-300
        hover:border-gray-600/50
        sm:hover:scale-105
      "
    >
      {/* Icon */}
      <div className="flex justify-center mb-4 sm:mb-5">
        <Icon className={`w-10 h-10 sm:w-12 sm:h-12 ${color}`} />
      </div>

      {/* Title */}
      <h3 className="text-lg sm:text-xl font-semibold text-gray-100 mb-2 sm:mb-3">{title}</h3>

      {/* Description */}
      <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
};

export default React.memo(FeatureCard);
