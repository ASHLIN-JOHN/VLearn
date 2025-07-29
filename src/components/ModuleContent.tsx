import React, { useState } from 'react';
import { LearningModule } from '../types/learning';
import { X, Play, BookOpen, Code, ArrowRight } from 'lucide-react';
import { FullStackPage } from './LearningPages/FullStackPage';
import { AIPythonPage } from './LearningPages/AIPythonPage';
import { CybersecurityPage } from './LearningPages/CybersecurityPage';

interface ModuleContentProps {
  module: LearningModule;
  onClose: () => void;
  onStartQuiz: () => void;
}

export function ModuleContent({ module, onClose, onStartQuiz }: ModuleContentProps) {
  const [activeTab, setActiveTab] = useState<'videos' | 'articles' | 'exercises'>('videos');
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null);
  const [showDomainPage, setShowDomainPage] = useState<string | null>(null);

  const tabs = [
    { id: 'videos' as const, label: 'Videos', icon: Play, content: module.resources.videos },
    { id: 'articles' as const, label: 'Articles', icon: BookOpen, content: module.resources.articles },
    { id: 'exercises' as const, label: 'Exercises', icon: Code, content: module.resources.exercises }
  ];

  const handleArticleClick = (article: string) => {
    // Check if it's a domain topic that should open a dedicated page
    if (article.toLowerCase().includes('full stack')) {
      setShowDomainPage('fullstack');
    } else if (article.toLowerCase().includes('ai') || article.toLowerCase().includes('python')) {
      setShowDomainPage('ai-python');
    } else if (article.toLowerCase().includes('cybersecurity') || article.toLowerCase().includes('security')) {
      setShowDomainPage('cybersecurity');
    } else {
      setSelectedArticle(article);
    }
  };

  const getArticleSummary = (article: string) => {
    // Return detailed summaries for different articles
    if (article.includes('HTML')) {
      return "HTML (HyperText Markup Language) is the foundation of web development. This comprehensive guide covers semantic HTML5 elements, accessibility best practices, form validation, and modern HTML features. Learn how to structure web content effectively, implement proper SEO techniques, and create accessible websites that work across all devices and assistive technologies.";
    } else if (article.includes('CSS')) {
      return "Modern CSS techniques including Flexbox, Grid, and responsive design principles. Explore CSS architecture methodologies like BEM and OOCSS, learn about CSS custom properties, animations, and performance optimization. Master advanced selectors, pseudo-elements, and create maintainable stylesheets for large-scale applications.";
    } else if (article.includes('JavaScript')) {
      return "JavaScript fundamentals and modern ES6+ features including arrow functions, destructuring, modules, and async/await. Understand the event loop, closures, prototypes, and functional programming concepts. Learn best practices for writing clean, maintainable JavaScript code and common design patterns used in modern web development.";
    } else if (article.includes('React')) {
      return "React component architecture, hooks, state management, and performance optimization. Deep dive into component lifecycle, context API, custom hooks, and testing strategies. Learn about React patterns, error boundaries, code splitting, and building scalable React applications with modern tooling and best practices.";
    } else if (article.includes('Node.js')) {
      return "Server-side JavaScript development with Node.js, including event-driven architecture, non-blocking I/O, and the npm ecosystem. Learn about Express.js framework, middleware, routing, authentication, and building RESTful APIs. Explore database integration, error handling, and deployment strategies for Node.js applications.";
    } else if (article.includes('Database')) {
      return "Database design principles, SQL fundamentals, and NoSQL alternatives. Learn about normalization, indexing, query optimization, and database security. Explore different database types including relational (PostgreSQL, MySQL), document (MongoDB), and key-value stores (Redis). Understand ACID properties and CAP theorem.";
    } else if (article.includes('Python')) {
      return "Python programming for AI and machine learning, covering NumPy, Pandas, and scikit-learn. Learn data manipulation, statistical analysis, and machine learning algorithms. Explore deep learning frameworks like TensorFlow and PyTorch, natural language processing, computer vision, and building end-to-end ML pipelines.";
    } else if (article.includes('Security') || article.includes('Cybersecurity')) {
      return "Cybersecurity fundamentals including threat modeling, risk assessment, and security frameworks. Learn about common vulnerabilities, penetration testing, incident response, and security monitoring. Explore cryptography, network security, identity management, and compliance requirements for modern organizations.";
    }
    return "This article provides comprehensive coverage of the topic with practical examples, best practices, and real-world applications. Learn from industry experts and gain hands-on experience through guided tutorials and exercises.";
  };

  // Show domain-specific pages
  if (showDomainPage === 'fullstack') {
    return <FullStackPage onBack={() => setShowDomainPage(null)} />;
  }
  if (showDomainPage === 'ai-python') {
    return <AIPythonPage onBack={() => setShowDomainPage(null)} />;
  }
  if (showDomainPage === 'cybersecurity') {
    return <CybersecurityPage onBack={() => setShowDomainPage(null)} />;
  }

  // Show article summary
  if (selectedArticle) {
    return (
      <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50 animate-fadeIn">
        <div className="bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-slideUp">
          <div className="bg-gradient-to-r from-black to-gray-800 text-white p-6 relative border-b border-gray-700">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-700 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <h1 className="text-2xl font-bold pr-12">{selectedArticle}</h1>
          </div>
          <div className="p-6 overflow-y-auto" style={{ maxHeight: 'calc(90vh - 200px)' }}>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed text-lg">
                {getArticleSummary(selectedArticle)}
              </p>
            </div>
          </div>
          <div className="border-t border-gray-700 p-6 bg-gray-800">
            <button
              onClick={() => setSelectedArticle(null)}
              className="px-6 py-3 bg-white text-black rounded-xl font-medium hover:bg-gray-200 transition-all hover:scale-105 shadow-lg"
            >
              Back to Resources
            </button>
          </div>
        </div>
      </div>
    );
  }
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
                className="p-4 rounded-xl border border-gray-600 hover:border-gray-500 hover:shadow-md transition-all cursor-pointer group bg-gray-800"
                onClick={() => activeTab === 'articles' ? handleArticleClick(item) : undefined}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-white group-hover:text-gray-300 transition-colors">
                    {item}
                  </span>
                  {activeTab === 'articles' && (
                    <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Footer */}
        <div className="border-t border-gray-700 p-6 bg-gray-800">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-300">
              {activeTab === 'articles' ? 'Click on articles to read detailed content, then take the quiz to unlock the next module.' : 'Complete the learning materials above, then take the quiz to unlock the next module.'}
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
