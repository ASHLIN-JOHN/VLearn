export interface LearningModule {
  id: string;
  title: string;
  description: string;
  icon: string;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  resources: {
    videos: string[];
    articles: string[];
    exercises: string[];
  };
  quiz: Quiz;
  completed: boolean;
  unlocked: boolean;
}

export interface Quiz {
  id: string;
  questions: Question[];
  passingScore: number;
}

export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface LearningPath {
  id: string;
  title: string;
  description: string;
  modules: LearningModule[];
  totalDuration: string;
  difficulty: string;
}

export interface UserProgress {
  pathId: string;
  completedModules: string[];
  quizScores: { [moduleId: string]: number };
  certificates: string[];
  totalProgress: number;
  startDate: string;
  lastAccessed: string;
}

export interface Certificate {
  id: string;
  userName: string;
  courseName: string;
  completionDate: string;
  score: number;
}