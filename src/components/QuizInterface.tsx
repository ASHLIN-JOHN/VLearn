import React, { useState, useEffect } from 'react';
import { Quiz, Question } from '../types/learning';
import { X, CheckCircle, XCircle, Clock, ChevronRight, ChevronLeft } from 'lucide-react';

interface QuizInterfaceProps {
  quiz: Quiz;
  onClose: () => void;
  onComplete: (score: number, passed: boolean) => void;
}

export function QuizInterface({ quiz, onClose, onComplete }: QuizInterfaceProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [showResults, setShowResults] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes
  const [showExplanation, setShowExplanation] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (questionIndex: number, answerIndex: number) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionIndex]: answerIndex
    }));
    setShowExplanation(false);
  };

  const calculateScore = () => {
    let correct = 0;
    quiz.questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        correct++;
      }
    });
    return Math.round((correct / quiz.questions.length) * 100);
  };

  const handleSubmit = () => {
    setShowResults(true);
    const score = calculateScore();
    const passed = score >= quiz.passingScore;
    setTimeout(() => onComplete(score, passed), 2000);
  };

  const nextQuestion = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowExplanation(false);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setShowExplanation(false);
    }
  };

  const currentQ = quiz.questions[currentQuestion];
  const isAnswered = selectedAnswers[currentQuestion] !== undefined;
  const allAnswered = quiz.questions.every((_, index) => selectedAnswers[index] !== undefined);

  if (showResults) {
    const score = calculateScore();
    const passed = score >= quiz.passingScore;
    
    return (
      <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
        <div className="bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl max-w-md w-full p-8 text-center animate-scaleIn">
          <div className={`w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center ${
            passed ? 'bg-gray-800 border border-white' : 'bg-gray-800 border border-gray-600'
          }`}>
            {passed ? (
              <CheckCircle className="w-10 h-10 text-white" />
            ) : (
              <XCircle className="w-10 h-10 text-gray-400" />
            )}
          </div>
          
          <h2 className={`text-2xl font-bold mb-4 ${passed ? 'text-white' : 'text-gray-400'}`}>
            {passed ? 'Congratulations!' : 'Keep Learning!'}
          </h2>
          
          <p className="text-gray-300 mb-6">
            You scored <span className="font-bold text-2xl text-white">{score}%</span>
          </p>
          
          <p className="text-sm text-gray-400 mb-6">
            {passed 
              ? 'You passed the quiz and unlocked the next module!' 
              : `You need ${quiz.passingScore}% to pass. Review the materials and try again.`
            }
          </p>
          
          <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
            <div 
              className={`h-2 rounded-full transition-all duration-1000 ${
                passed ? 'bg-white' : 'bg-gray-500'
              }`}
              style={{ width: `${score}%` }}
            ></div>
          </div>
        </div>
        
        <style jsx>{`
          @keyframes scaleIn {
            from {
              opacity: 0;
              transform: scale(0.8);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
          .animate-scaleIn { animation: scaleIn 0.5s ease-out; }
        `}</style>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
      <div className="bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-black to-gray-800 text-white p-6 border-b border-gray-700">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">Quiz Time! 📝</h1>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-700 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="flex justify-between items-center text-sm">
            <span>Question {currentQuestion + 1} of {quiz.questions.length}</span>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span className={timeLeft < 60 ? 'text-red-200 font-bold' : ''}>
                {formatTime(timeLeft)}
              </span>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-700 rounded-full h-2 mt-4">
            <div 
              className="bg-white h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / quiz.questions.length) * 100}%` }}
            ></div>
          </div>
        </div>
        
        {/* Question Content */}
        <div className="p-8">
          <h2 className="text-xl font-bold text-white mb-6 leading-relaxed">
            {currentQ.question}
          </h2>
          
          <div className="space-y-3 mb-8">
            {currentQ.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(currentQuestion, index)}
                className={`w-full p-4 text-left rounded-xl border-2 font-medium transition-all hover:scale-[1.02] bg-gray-800 ${
                  selectedAnswers[currentQuestion] === index
                    ? 'border-white bg-gray-700 text-white shadow-md'
                    : 'border-gray-600 hover:border-gray-500 hover:bg-gray-700 text-gray-300'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    selectedAnswers[currentQuestion] === index
                      ? 'border-white bg-white'
                      : 'border-gray-500'
                  }`}>
                    {selectedAnswers[currentQuestion] === index && (
                      <div className="w-2 h-2 bg-black rounded-full"></div>
                    )}
                  </div>
                  <span>{option}</span>
                </div>
              </button>
            ))}
          </div>
          
          {/* Explanation */}
          {isAnswered && showExplanation && (
            <div className="bg-gray-800 border border-gray-600 rounded-xl p-4 mb-6 animate-fadeIn">
              <h3 className="font-medium text-white mb-2">Explanation:</h3>
              <p className="text-gray-300">{currentQ.explanation}</p>
            </div>
          )}
          
          {/* Controls */}
          <div className="flex justify-between items-center">
            <button
              onClick={prevQuestion}
              disabled={currentQuestion === 0}
              className="flex items-center space-x-2 px-4 py-2 text-gray-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>
            
            <div className="flex items-center space-x-4">
              {isAnswered && !showExplanation && (
                <button
                  onClick={() => setShowExplanation(true)}
                  className="px-4 py-2 text-white hover:text-gray-300 font-medium transition-colors"
                >
                  Show Explanation
                </button>
              )}
              
              {currentQuestion === quiz.questions.length - 1 ? (
                <button
                  onClick={handleSubmit}
                  disabled={!allAnswered}
                  className="px-6 py-3 bg-white text-black rounded-xl font-medium hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-105 shadow-lg"
                >
                  Submit Quiz
                </button>
              ) : (
                <button
                  onClick={nextQuestion}
                  className="flex items-center space-x-2 px-6 py-3 bg-white text-black rounded-xl font-medium hover:bg-gray-200 transition-all hover:scale-105 shadow-lg"
                >
                  <span>Next</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
      `}</style>
    </div>
  );
}