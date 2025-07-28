import React from 'react';
import { LearningModule } from '../types/learning';
import { CheckCircle, Lock, Play, Clock, BarChart3 } from 'lucide-react';

interface PathVisualizerProps {
  modules: LearningModule[];
  onModuleClick: (module: LearningModule) => void;
}

export function PathVisualizer({ modules, onModuleClick }: PathVisualizerProps) {
  return (
    <div className="relative py-8">
      {/* Progress Line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gray-600 via-gray-500 to-gray-400"></div>
      
      <div className="space-y-6">
        {modules.map((module, index) => (
          <div
            key={module.id}
            className={`relative flex items-start space-x-6 group transition-all duration-500 ${
              module.unlocked ? 'cursor-pointer hover:scale-[1.02]' : 'opacity-60'
            }`}
            onClick={() => module.unlocked && onModuleClick(module)}
            style={{
              animationDelay: `${index * 100}ms`,
              animation: 'fadeInUp 0.6s ease-out forwards'
            }}
          >
            {/* Module Status Icon */}
            <div className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full transition-all duration-300 ${
              module.completed 
                ? 'bg-white text-black shadow-lg shadow-white/30' 
                : module.unlocked
                ? 'bg-gray-700 text-white shadow-lg shadow-gray-700/30 group-hover:shadow-gray-700/50'
                : 'bg-gray-800 text-gray-400 border border-gray-600'
            }`}>
              {module.completed ? (
                <CheckCircle className="w-8 h-8" />
              ) : module.unlocked ? (
                <Play className="w-8 h-8" />
              ) : (
                <Lock className="w-8 h-8" />
              )}
            </div>
            
            {/* Module Card */}
            <div className={`flex-1 min-w-0 p-6 rounded-xl border-2 transition-all duration-300 ${
              module.completed
               ? 'bg-gray-800 border-white shadow-lg shadow-white/10'
                : module.unlocked
               ? 'bg-gray-900 border-gray-600 shadow-lg hover:shadow-xl hover:border-gray-500'
               : 'bg-gray-900 border-gray-700'
            }`}>
              <div className="flex items-start justify-between">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-2xl">{module.icon}</span>
                    <h3 className="text-xl font-bold text-white group-hover:text-gray-300 transition-colors">
                      {module.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {module.description}
                  </p>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{module.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <BarChart3 className="w-4 h-4" />
                      <span>{module.difficulty}</span>
                    </div>
                  </div>
                </div>
                
                {module.unlocked && (
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-700 text-white group-hover:bg-gray-600 transition-colors">
                    <Play className="w-4 h-4" />
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
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