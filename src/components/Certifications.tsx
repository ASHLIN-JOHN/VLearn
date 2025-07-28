import React, { useState, useEffect } from 'react';
import { User } from '../types/user';
import { Certificate, LearningPath } from '../types/learning';
import { Trophy, Download, Medal, Users, Search } from 'lucide-react';
import { downloadCertificate } from '../utils/certificate';
import { users } from '../data/users';

interface CertificationsProps {
  currentUser: User;
  onClose: () => void;
}

interface UserWithCertCount {
  id: string;
  name: string;
  username: string;
  certificateCount: number;
}

export function Certifications({ currentUser, onClose }: CertificationsProps) {
  const [activeTab, setActiveTab] = useState<'my-certificates' | 'leaderboard'>('my-certificates');
  const [searchQuery, setSearchQuery] = useState('');
  const [leaderboard, setLeaderboard] = useState<UserWithCertCount[]>([]);
  const [learningPaths, setLearningPaths] = useState<{[key: string]: LearningPath}>({});
  
  // Load learning paths from localStorage
  useEffect(() => {
    const savedPaths = localStorage.getItem('vlearn_learning_paths');
    if (savedPaths) {
      setLearningPaths(JSON.parse(savedPaths));
    }
  }, []);
  
  // Generate leaderboard
  useEffect(() => {
    const leaderboardData = users.map(user => ({
      id: user.id,
      name: user.name,
      username: user.username,
      certificateCount: user.certificates?.length || 0
    }));
    
    // Sort by certificate count (descending)
    leaderboardData.sort((a, b) => b.certificateCount - a.certificateCount);
    setLeaderboard(leaderboardData);
  }, []);
  
  const handleDownloadCertificate = (certificateId: string) => {
    // Find the learning path for this certificate
    const pathId = certificateId;
    const path = learningPaths[pathId];
    
    if (!path) return;
    
    // Calculate average score (simplified version)
    const averageScore = 85; // In a real app, this would be calculated from actual quiz scores
    
    downloadCertificate({
      id: certificateId,
      userName: currentUser.name,
      courseName: path.title,
      completionDate: new Date().toLocaleDateString(),
      score: averageScore
    });
  };
  
  const filteredCertificates = currentUser.certificates.filter(cert => {
    if (!searchQuery) return true;
    const path = learningPaths[cert];
    return path && path.title.toLowerCase().includes(searchQuery.toLowerCase());
  });
  
  const filteredLeaderboard = leaderboard.filter(user => {
    if (!searchQuery) return true;
    return (
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.username.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-gray-900 rounded-xl w-full max-w-4xl border border-gray-700 shadow-2xl">
        {/* Header */}
        <div className="border-b border-gray-700 p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-white flex items-center">
              <Trophy className="w-6 h-6 mr-2 text-yellow-400" />
              Certifications
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              &times;
            </button>
          </div>
          
          {/* Tabs */}
          <div className="flex mt-6 border-b border-gray-700">
            <button
              className={`px-4 py-2 font-medium ${activeTab === 'my-certificates' ? 'text-white border-b-2 border-white' : 'text-gray-400'}`}
              onClick={() => setActiveTab('my-certificates')}
            >
              My Certificates
            </button>
            <button
              className={`px-4 py-2 font-medium ${activeTab === 'leaderboard' ? 'text-white border-b-2 border-white' : 'text-gray-400'}`}
              onClick={() => setActiveTab('leaderboard')}
            >
              Leaderboard
            </button>
          </div>
        </div>
        
        {/* Search */}
        <div className="p-6 border-b border-gray-700">
          <div className="relative">
            <input
              type="text"
              placeholder={activeTab === 'my-certificates' ? "Search certificates..." : "Search users..."}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg py-2 pl-10 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6 max-h-[60vh] overflow-y-auto">
          {activeTab === 'my-certificates' ? (
            <div className="space-y-4">
              {filteredCertificates.length > 0 ? (
                filteredCertificates.map(certId => {
                  const path = learningPaths[certId];
                  return (
                    <div key={certId} className="flex items-center justify-between p-4 border border-gray-700 rounded-lg bg-gray-800 hover:bg-gray-750 transition-colors">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-yellow-900 rounded-full">
                          <Trophy className="w-6 h-6 text-yellow-400" />
                        </div>
                        <div>
                          <h3 className="font-medium text-white text-lg">{path?.title || 'Unknown Course'} Certificate</h3>
                          <p className="text-gray-400">Earned on completion</p>
                        </div>
                      </div>
                      <button
                        onClick={() => handleDownloadCertificate(certId)}
                        className="flex items-center space-x-2 px-4 py-2 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-all hover:scale-105"
                      >
                        <Download className="w-4 h-4" />
                        <span>Download</span>
                      </button>
                    </div>
                  );
                })
              ) : (
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center p-4 bg-gray-800 rounded-full mb-4">
                    <Trophy className="w-8 h-8 text-gray-500" />
                  </div>
                  <h3 className="text-xl font-medium text-white mb-2">No Certificates Yet</h3>
                  <p className="text-gray-400 max-w-md mx-auto">
                    Complete courses to earn certificates that will appear here.
                  </p>
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredLeaderboard.map((user, index) => (
                <div key={user.id} className="flex items-center justify-between p-4 border border-gray-700 rounded-lg bg-gray-800 hover:bg-gray-750 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 text-center">
                      {index < 3 ? (
                        <Medal className={`w-6 h-6 ${index === 0 ? 'text-yellow-400' : index === 1 ? 'text-gray-300' : 'text-yellow-700'}`} />
                      ) : (
                        <span className="text-gray-400 font-medium">{index + 1}</span>
                      )}
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                        {user.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="font-medium text-white">{user.name}</h3>
                        <p className="text-gray-400">@{user.username}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Trophy className="w-5 h-5 text-yellow-400" />
                    <span className="text-white font-medium">{user.certificateCount}</span>
                  </div>
                </div>
              ))}
              
              {filteredLeaderboard.length === 0 && (
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center p-4 bg-gray-800 rounded-full mb-4">
                    <Users className="w-8 h-8 text-gray-500" />
                  </div>
                  <h3 className="text-xl font-medium text-white mb-2">No Users Found</h3>
                  <p className="text-gray-400 max-w-md mx-auto">
                    No users match your search criteria.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}