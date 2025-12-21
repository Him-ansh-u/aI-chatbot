import { memo } from 'react';

const FEATURES = [
  { text: 'Natural language conversations using Gemini API', color: 'text-blue-400' },
  { text: 'Context-aware responses with chat memory', color: 'text-purple-400' },
  { text: 'Clean and modern chat interface', color: 'text-blue-400' },
  { text: 'Easy to extend and customize', color: 'text-purple-400' },
  { text: 'Built for learning and experimentation', color: 'text-blue-400' },
];

const BuiltFor = () => {
  return (
    <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-5 sm:my-20">
      <div className="sm:bg-gray-800/50 backdrop-blur-xl sm:border border-gray-700/50 rounded-2xl shadow-2xl px-0 py-0 sm:px-10 sm:py-14 lg:px-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-5 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Built for Learning & Experimentation
            </h3>

            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              This chatbot is a personal project focused on understanding how modern AI models like{' '}
              <span className="text-blue-400">Google Gemini</span> can be integrated into real-world
              web applications.
            </p>

            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              The goal is not to sell a product, but to explore conversational AI, prompt design,
              and frontend architecture while building something practical, clean, and extendable.
            </p>
          </div>

          {/* Right Card */}
          <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-lg px-6 py-8 sm:px-8 sm:py-10">
            <h4 className="text-lg sm:text-xl font-semibold text-gray-100 mb-5 text-center md:text-left">
              What this project focuses on
            </h4>

            <ul className="space-y-4">
              {FEATURES.map(({ text, color }) => (
                <li key={text} className="flex items-start gap-3">
                  <span className={`${color} font-bold text-lg leading-none`}>✓</span>
                  <span className="text-sm sm:text-base text-gray-300">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(BuiltFor);
