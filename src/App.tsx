import React, { useState, useEffect } from 'react';
import { LearningPath, LearningModule, UserProgress } from './types/learning';
import { User } from './types/user';
import { generateLearningPath } from './data/learningPaths';
import { saveProgress, loadProgress } from './utils/storage';
import { PromptInput } from './components/PromptInput';
import { PathVisualizer } from './components/PathVisualizer';
import { ModuleContent } from './components/ModuleContent';
import { QuizInterface } from './components/QuizInterface';
import { Dashboard } from './components/Dashboard';
import { AuthContainer } from './components/Auth/AuthContainer';
import { Messenger } from './components/Social/Messenger';
import { FriendsManager } from './components/Social/FriendsManager';
// Add this import at the top
import { Certifications } from './components/Certifications';
import { ArrowLeft, BarChart3, BookOpen, MessageCircle, Users, LogOut, Award } from 'lucide-react';
// Add this import
import { addCertificateToUser } from './data/users';

function App() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [currentPath, setCurrentPath] = useState<LearningPath | null>(null);
  const [selectedModule, setSelectedModule] = useState<LearningModule | null>(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [userProgress, setUserProgress] = useState<UserProgress | null>(null);
  const [activeView, setActiveView] = useState<'path' | 'dashboard'>('path');
  const [showMessenger, setShowMessenger] = useState(false);
  const [showFriendsManager, setShowFriendsManager] = useState(false);
  // Add this state
  const [showCertifications, setShowCertifications] = useState(false);

  // Check for logged in user on component mount
  useEffect(() => {
    const savedUser = localStorage.getItem('vlearn_current_user');
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
    }
  }, []);

  // Load progress on component mount
  useEffect(() => {
    const savedProgress = loadProgress();
    if (savedProgress) {
      setUserProgress(savedProgress);
      // You could also load the corresponding learning path here
    }
  }, []);

  // Save progress whenever it changes
  useEffect(() => {
    if (userProgress) {
      saveProgress(userProgress);
    }
  }, [userProgress]);

  // Save current user to localStorage when it changes
  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('vlearn_current_user', JSON.stringify(currentUser));
    }
  }, [currentUser]);

  // Add this function after the handleQuizComplete function
  const saveLearningPathToLocalStorage = (path: LearningPath) => {
    const savedPaths = localStorage.getItem('vlearn_learning_paths');
    let pathsObj = savedPaths ? JSON.parse(savedPaths) : {};
    
    pathsObj[path.id] = path;
    localStorage.setItem('vlearn_learning_paths', JSON.stringify(pathsObj));
  };
  
  // Then call this function when a learning path is generated
  const handlePromptSubmit = (prompt: string) => {
    const path = generateLearningPath(prompt);
    if (path) {
      setCurrentPath(path);
      saveLearningPathToLocalStorage(path); // Add this line
      
      // Initialize or update user progress
      const now = new Date().toISOString();
      setUserProgress({
        pathId: path.id,
        completedModules: [],
        quizScores: {},
        certificates: [],
        totalProgress: 0,
        startDate: now,
        lastAccessed: now
      });
    }
  };

  const handleModuleClick = (module: LearningModule) => {
    if (module.unlocked) {
      setSelectedModule(module);
    }
  };

  const handleQuizComplete = (score: number, passed: boolean) => {
    if (!currentPath || !selectedModule || !userProgress) return;

    const updatedProgress = { ...userProgress };
    updatedProgress.quizScores[selectedModule.id] = score;
    updatedProgress.lastAccessed = new Date().toISOString();

    if (passed) {
      // Mark current module as completed
      if (!updatedProgress.completedModules.includes(selectedModule.id)) {
        updatedProgress.completedModules.push(selectedModule.id);
      }

      // Unlock next module
      const currentIndex = currentPath.modules.findIndex(m => m.id === selectedModule.id);
      if (currentIndex < currentPath.modules.length - 1) {
        const nextModule = currentPath.modules[currentIndex + 1];
        nextModule.unlocked = true;
      }

      // Mark current module as completed
      selectedModule.completed = true;

      // Calculate total progress
      updatedProgress.totalProgress = (updatedProgress.completedModules.length / currentPath.modules.length) * 100;

      // Check if course is fully completed
      // In the handleQuizComplete function, update the certificate section:
      if (updatedProgress.completedModules.length === currentPath.modules.length) {
        if (!updatedProgress.certificates.includes(currentPath.id)) {
          updatedProgress.certificates.push(currentPath.id);
          
          // Add certificate to user's profile
          if (currentUser) {
            addCertificateToUser(currentUser.id, currentPath.id);
          }
        }
      }
    }

    setUserProgress(updatedProgress);
    setShowQuiz(false);
    setSelectedModule(null);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('vlearn_current_user');
  };

  // If no user is logged in, show the auth container
  if (!currentUser) {
    return <AuthContainer onAuthenticated={setCurrentUser} />;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-gray-900 border-b border-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold">VLearn</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setShowCertifications(true)}
              className="p-2 rounded-full hover:bg-gray-800 transition-colors relative"
              title="Certifications"
            >
              <Award className="w-6 h-6" />
            </button>
            
            <button
              onClick={() => setShowMessenger(true)}
              className="p-2 rounded-full hover:bg-gray-800 transition-colors relative"
              title="Messages"
            >
              <MessageCircle className="w-6 h-6" />
            </button>
            
            <button
              onClick={() => setShowFriendsManager(true)}
              className="p-2 rounded-full hover:bg-gray-800 transition-colors"
              title="Friends"
            >
              <Users className="w-6 h-6" />
            </button>
            
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                {currentUser.name.charAt(0)}
              </div>
              <span className="hidden md:inline">{currentUser.name}</span>
            </div>
            
            <button
              onClick={handleLogout}
              className="p-2 rounded-full hover:bg-gray-800 transition-colors"
              title="Log out"
            >
              <LogOut className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto p-4">
        {!currentPath ? (
          <PromptInput onSubmit={handlePromptSubmit} />
        ) : activeView === 'path' ? (
          <div>
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setCurrentPath(null)}
                  className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                >
                  <ArrowLeft className="w-6 h-6" />
                </button>
                <h2 className="text-2xl font-bold">{currentPath.title}</h2>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => setActiveView('dashboard')}
                  className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                  title="View Dashboard"
                >
                  <BarChart3 className="w-6 h-6" />
                </button>
              </div>
            </div>
            
            <PathVisualizer 
              modules={currentPath.modules}
              onModuleClick={handleModuleClick}
            />
          </div>
        ) : (
          userProgress && (
            <Dashboard 
              progress={userProgress} 
              learningPath={currentPath} 
              currentUser={currentUser} 
            />
            )
        )}
      </main>

      {/* Modals */}
      {selectedModule && !showQuiz && (
        <ModuleContent
          module={selectedModule}
          onClose={() => setSelectedModule(null)}
          onStartQuiz={() => setShowQuiz(true)}
        />
      )}

      {showQuiz && selectedModule && (
        <QuizInterface
          quiz={selectedModule.quiz}
          onClose={() => {
            setShowQuiz(false);
            setSelectedModule(null);
          }}
          onComplete={handleQuizComplete}
        />
      )}
      
      {showMessenger && (
        <Messenger
          currentUser={currentUser}
          onClose={() => setShowMessenger(false)}
        />
      )}
      
      {showFriendsManager && (
        <FriendsManager
          currentUser={currentUser}
          onClose={() => setShowFriendsManager(false)}
        />
      )}
      
      {/* Add this to the Modals section */}
      {showCertifications && (
        <Certifications
          currentUser={currentUser}
          onClose={() => setShowCertifications(false)}
        />
      )}
    </div>
  );
}

export default App;