import React, { useState } from 'react';
import { Search, Sparkles, ArrowRight } from 'lucide-react';

interface PromptInputProps {
  onSubmit: (prompt: string) => void;
}

export function PromptInput({ onSubmit }: PromptInputProps) {
  const [prompt, setPrompt] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim()) {
      onSubmit(prompt.trim());
    }
  };

  const examplePrompts = [
    'Full Stack Development',
    'AI with Python',
    'Cybersecurity Beginner Track',
    'React & Node.js',
    'Data Science Fundamentals'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Sparkles className="w-8 h-8 text-white" />
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Learning<span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Path AI</span>
            </h1>
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Generate personalized learning paths with interactive modules, quizzes, and certificates. 
            Start your journey to mastery today!
          </p>
        </div>

        {/* Prompt Input */}
        <form onSubmit={handleSubmit} className="mb-8">
          <div className="relative">
            <div className="absolute inset-y-0 left-4 flex items-center">
              <Search className="w-6 h-6 text-gray-500" />
            </div>
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Enter your learning goal (e.g., 'Full Stack Development', 'AI with Python')..."
              className="w-full pl-14 pr-32 py-6 text-lg bg-gray-800 border border-gray-600 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all"
            />
            <button
              type="submit"
              disabled={!prompt.trim()}
              className="absolute right-2 top-2 bottom-2 px-8 bg-white text-black rounded-xl font-medium hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-105 flex items-center space-x-2"
            >
              <span>Generate Path</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>

        {/* Example Prompts */}
        <div className="text-center">
          <p className="text-gray-500 mb-4">Or try one of these popular learning paths:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {examplePrompts.map((example, index) => (
              <button
                key={index}
                onClick={() => setPrompt(example)}
                className="px-6 py-3 bg-gray-800 border border-gray-600 rounded-xl text-white hover:bg-gray-700 transition-all hover:scale-105 text-sm font-medium"
              >
                {example}
              </button>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {[
            {
              icon: '🎯',
              title: 'Personalized Paths',
              description: 'AI-generated learning modules tailored to your goals'
            },
            {
              icon: '📊',
              title: 'Interactive Quizzes',
              description: 'Test your knowledge with engaging assessments'
            },
            {
              icon: '🏆',
              title: 'Certificates',
              description: 'Earn downloadable certificates upon completion'
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-center hover:bg-white/20 transition-all"
              style={{
                animationDelay: `${index * 200}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}