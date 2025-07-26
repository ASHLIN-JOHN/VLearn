import React, { useState } from 'react';
import { LearningModule } from '../types/learning';
import { X, Play, BookOpen, Code, ArrowRight } from 'lucide-react';

interface ModuleContentProps {
  module: LearningModule;
  onClose: () => void;
  onStartQuiz: () => void;
}

export function ModuleContent({ module, onClose, onStartQuiz }: ModuleContentProps) {
  const [activeTab, setActiveTab] = useState<'videos' | 'articles' | 'exercises'>('videos');

  const tabs = [
    { id: 'videos' as const, label: 'Videos', icon: Play, content: module.resources.videos },
    { id: 'articles' as const, label: 'Articles', icon: BookOpen, content: module.resources.articles },
    { id: 'exercises' as const, label: 'Exercises', icon: Code, content: module.resources.exercises }
  ];

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50 animate-fadeIn">
      <div className="bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-slideUp">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-black to-gray-800 text-white p-6 relative border-b border-gray-700">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-700 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="flex items-center space-x-4 mb-4">
            <span className="text-4xl">{module.icon}</span>
            <div>
              <h1 className="text-2xl font-bold">{module.title}</h1>
              <p className="text-gray-300">{module.description}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-gray-300">
            <span>Duration: {module.duration}</span>
            <span>Difficulty: {module.difficulty}</span>
          </div>
        </div>
        
        {/* Tabs */}
        <div className="border-b border-gray-700">
          <nav className="flex space-x-8 px-6">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
        
        {/* Content */}
        <div className="p-6 overflow-y-auto" style={{ maxHeight: 'calc(90vh - 200px)' }}>
          <div className="space-y-4">
            {tabs.find(tab => tab.id === activeTab)?.content.map((item, index) => (
              <div
                key={index}
                className={`p-4 rounded-xl border hover:border-gray-600 hover:shadow-md transition-all cursor-pointer group bg-gray-800 ${
                  activeTab === tabs.find(tab => tab.id === activeTab)?.id
                    ? 'border-white text-white'
                    : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-600'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-white group-hover:text-gray-300 transition-colors">
                    {item}
                  </span>
                  <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Footer */}
        <div className="border-t border-gray-700 p-6 bg-gray-800">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-300">
              Complete the learning materials above, then take the quiz to unlock the next module.
            </p>
            <button
              onClick={onStartQuiz}
              className="px-6 py-3 bg-white text-black rounded-xl font-medium hover:bg-gray-200 transition-all hover:scale-105 shadow-lg"
            >
              Start Quiz
            </button>
          </div>
        </div>
      </div>

      {/* Inline animation styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
        .animate-slideUp { animation: slideUp 0.4s ease-out; }
      `}</style>
    </div>
  );
}
