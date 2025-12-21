import { memo } from 'react';

const BuiltFor = () => {
  return (
    <div className="mx-6 my-20 bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 md:p-12 shadow-2xl">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-3xl font-bold bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Built for Modern Businesses
          </h3>
          <p className="text-gray-400 mb-4">
            Our chatbot solution is designed to scale with your business needs. Whether you&apos;re
            a startup or an enterprise, we provide the tools you need to enhance customer engagement
            and streamline operations.
          </p>
          <p className="text-gray-400">
            With advanced natural language processing and machine learning capabilities, our chatbot
            understands context, remembers preferences, and delivers personalized experiences that
            keep your users coming back.
          </p>
        </div>
        <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 shadow-lg">
          <h4 className="text-xl font-bold text-gray-100 mb-4">Key Features</h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-blue-400 font-bold">✓</span>
              <span className="text-gray-300">Natural language understanding</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-400 font-bold">✓</span>
              <span className="text-gray-300">Multi-language support</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 font-bold">✓</span>
              <span className="text-gray-300">Easy integration</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-400 font-bold">✓</span>
              <span className="text-gray-300">Analytics dashboard</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 font-bold">✓</span>
              <span className="text-gray-300">Customizable responses</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default memo(BuiltFor);
