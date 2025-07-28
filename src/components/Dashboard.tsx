// Update imports
import React from 'react';
import { UserProgress, LearningPath } from '../types/learning';
import { Trophy, Clock, Target, Download, Star, BarChart3 } from 'lucide-react';
import { downloadCertificate } from '../utils/certificate';
import { User } from '../types/user';

// Update props interface
interface DashboardProps {
  progress: UserProgress;
  learningPath: LearningPath;
  currentUser: User | null;
}

// Update component definition
export function Dashboard({ progress, learningPath, currentUser }: DashboardProps) {
  const completedCount = progress.completedModules.length;
  const totalModules = learningPath.modules.length;
  const averageScore = Object.values(progress.quizScores).length > 0 
    ? Math.round(Object.values(progress.quizScores).reduce((a, b) => a + b, 0) / Object.values(progress.quizScores).length)
    : 0;

  const handleDownloadCertificate = (courseId: string) => {
    // Only allow download if course is fully completed
    if (progress.completedModules.length !== learningPath.modules.length) {
      return;
    }
    
    downloadCertificate({
      id: courseId,
      userName: currentUser?.name || 'Learning Enthusiast', // Use current user's name
      courseName: learningPath.title,
      completionDate: new Date().toLocaleDateString(),
      score: averageScore
    });
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 shadow-xl border border-gray-800">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Your Progress Dashboard</h2>
          <p className="text-gray-300">Track your learning journey and achievements</p>
        </div>
        <div className="text-right">
          <div className="text-sm text-gray-400">Started</div>
          <div className="font-medium text-white">
            {new Date(progress.startDate).toLocaleDateString()}
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-300">Modules Completed</p>
              <p className="text-3xl font-bold text-white">{completedCount}</p>
              <p className="text-sm text-gray-400">of {totalModules}</p>
            </div>
            <div className="p-3 bg-gray-700 rounded-full">
              <Target className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-300">Average Score</p>
              <p className="text-3xl font-bold text-white">{averageScore}%</p>
              <p className="text-sm text-gray-400">across all quizzes</p>
            </div>
            <div className="p-3 bg-gray-700 rounded-full">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-300">Certificates Earned</p>
              <p className="text-3xl font-bold text-white">{progress.certificates.length}</p>
              <p className="text-sm text-gray-400">ready to download</p>
            </div>
            <div className="p-3 bg-gray-700 rounded-full">
              <Trophy className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-300">Overall Progress</p>
              <p className="text-3xl font-bold text-white">{Math.round(progress.totalProgress)}%</p>
              <p className="text-sm text-gray-400">course completion</p>
            </div>
            <div className="p-3 bg-gray-700 rounded-full">
              <Clock className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 shadow-lg mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white">Course Progress</h3>
          <span className="text-sm font-medium text-gray-300">
            {Math.round(progress.totalProgress)}% Complete
          </span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-4">
          <div 
            className="bg-gradient-to-r from-white to-gray-300 h-4 rounded-full transition-all duration-1000 relative overflow-hidden"
            style={{ width: `${progress.totalProgress}%` }}
          >
            <div className="absolute inset-0 bg-black/20 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Module Status */}
      <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 shadow-lg mb-8">
        <h3 className="text-lg font-semibold text-white mb-4">Module Status</h3>
        <div className="space-y-3">
          {learningPath.modules.map((module) => {
            const isCompleted = progress.completedModules.includes(module.id);
            const score = progress.quizScores[module.id];
            
            return (
              <div key={module.id} className="flex items-center justify-between p-3 rounded-lg border border-gray-600 bg-gray-700">
                <div className="flex items-center space-x-3">
                  <span className="text-xl">{module.icon}</span>
                  <div>
                    <h4 className="font-medium text-white">{module.title}</h4>
                    <p className="text-sm text-gray-300">{module.duration} • {module.difficulty}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  {score && (
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span className="text-sm font-medium text-white">{score}%</span>
                    </div>
                  )}
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    isCompleted 
                      ? 'bg-green-900 text-green-300 border border-green-700' 
                      : module.unlocked
                      ? 'bg-gray-600 text-white border border-gray-500'
                      : 'bg-gray-800 text-gray-400 border border-gray-600'
                  }`}>
                    {isCompleted ? 'Completed' : module.unlocked ? 'Available' : 'Locked'}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Certificates */}
      {progress.certificates.length > 0 && (
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 shadow-lg">
          <h3 className="text-lg font-semibold text-white mb-4">Your Certificates</h3>
          <div className="space-y-3">
            {progress.certificates.map((certId) => (
              <div key={certId} className="flex items-center justify-between p-4 border border-gray-600 rounded-lg bg-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-yellow-900 rounded-full">
                    <Trophy className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">{learningPath.title} Certificate</h4>
                    <p className="text-sm text-gray-300">Earned on completion</p>
                  </div>
                </div>
                {progress.completedModules.length === learningPath.modules.length ? (
                  <button
                    onClick={() => handleDownloadCertificate(certId)}
                    className="flex items-center space-x-2 px-4 py-2 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-all hover:scale-105"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </button>
                ) : (
                  <div className="flex items-center space-x-2 px-4 py-2 bg-gray-600 text-gray-400 rounded-lg font-medium cursor-not-allowed">
                    <Download className="w-4 h-4" />
                    <span>Complete Course</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}