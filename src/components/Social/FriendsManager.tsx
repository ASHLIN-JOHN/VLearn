import React, { useState, useEffect } from 'react';
import { User, FriendRequest } from '../../types/user';
import { users, friendRequests, sendFriendRequest, respondToFriendRequest } from '../../data/users';
import { UserPlus, Check, X, Search } from 'lucide-react';

interface FriendsManagerProps {
  currentUser: User;
  onClose: () => void;
}

export function FriendsManager({ currentUser, onClose }: FriendsManagerProps) {
  const [activeTab, setActiveTab] = useState<'friends' | 'requests' | 'add'>('friends');
  const [friendsList, setFriendsList] = useState<User[]>([]);
  const [pendingRequests, setPendingRequests] = useState<{request: FriendRequest, user: User}[]>([]);
  const [searchUsername, setSearchUsername] = useState('');
  const [searchResult, setSearchResult] = useState<User | null>(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Load friends list
  useEffect(() => {
    const friends = users.filter(user => 
      currentUser.friends.includes(user.id)
    );
    setFriendsList(friends);
  }, [currentUser]);

  // Load pending friend requests
  useEffect(() => {
    const requests = friendRequests
      .filter(req => req.receiverId === currentUser.id && req.status === 'pending')
      .map(request => {
        const sender = users.find(user => user.id === request.senderId);
        return { request, user: sender! };
      });
    setPendingRequests(requests);
  }, [currentUser.id]);

  const handleSearch = () => {
    setError('');
    setSuccess('');
    setSearchResult(null);
    
    if (!searchUsername.trim()) {
      setError('Please enter a username');
      return;
    }
    
    // Don't allow searching for yourself
    if (searchUsername === currentUser.username) {
      setError('You cannot add yourself as a friend');
      return;
    }
    
    const user = users.find(user => user.username === searchUsername);
    if (!user) {
      setError('User not found');
      return;
    }
    
    // Check if already friends
    if (currentUser.friends.includes(user.id)) {
      setError('You are already friends with this user');
      return;
    }
    
    // Check if there's a pending request
    const existingRequest = friendRequests.find(
      req => (req.senderId === currentUser.id && req.receiverId === user.id) ||
             (req.senderId === user.id && req.receiverId === currentUser.id)
    );
    
    if (existingRequest) {
      if (existingRequest.status === 'pending') {
        setError('A friend request is already pending with this user');
      } else if (existingRequest.status === 'accepted') {
        setError('You are already friends with this user');
      }
      return;
    }
    
    setSearchResult(user);
  };

  const handleSendRequest = () => {
    if (!searchResult) return;
    
    const request = sendFriendRequest(currentUser.id, searchResult.username);
    if (request) {
      setSuccess(`Friend request sent to ${searchResult.name}`);
      setSearchUsername('');
      setSearchResult(null);
    } else {
      setError('Failed to send friend request');
    }
  };

  const handleRespondToRequest = (requestId: string, accept: boolean) => {
    const success = respondToFriendRequest(requestId, accept);
    if (success) {
      // Refresh the pending requests list
      setPendingRequests(prev => prev.filter(item => item.request.id !== requestId));
      
      // If accepted, refresh friends list
      if (accept) {
        const friends = users.filter(user => 
          currentUser.friends.includes(user.id)
        );
        setFriendsList(friends);
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
      <div className="bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl w-full max-w-4xl overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-gray-700 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white">Friends</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-700 transition-colors"
          >
            <X className="w-6 h-6 text-gray-400" />
          </button>
        </div>
        
        {/* Tabs */}
        <div className="border-b border-gray-700">
          <nav className="flex">
            <button
              onClick={() => setActiveTab('friends')}
              className={`px-6 py-4 font-medium text-sm transition-colors ${activeTab === 'friends' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-400 hover:text-white'}`}
            >
              My Friends
            </button>
            <button
              onClick={() => setActiveTab('requests')}
              className={`px-6 py-4 font-medium text-sm transition-colors flex items-center ${activeTab === 'requests' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-400 hover:text-white'}`}
            >
              Friend Requests
              {pendingRequests.length > 0 && (
                <span className="ml-2 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {pendingRequests.length}
                </span>
              )}
            </button>
            <button
              onClick={() => setActiveTab('add')}
              className={`px-6 py-4 font-medium text-sm transition-colors ${activeTab === 'add' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-400 hover:text-white'}`}
            >
              Add Friend
            </button>
          </nav>
        </div>
        
        {/* Content */}
        <div className="p-6 max-h-[60vh] overflow-y-auto">
          {activeTab === 'friends' && (
            <div>
              {friendsList.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-400 mb-4">You don't have any friends yet</p>
                  <button
                    onClick={() => setActiveTab('add')}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors inline-flex items-center"
                  >
                    <UserPlus className="w-5 h-5 mr-2" />
                    Add Friends
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {friendsList.map(friend => (
                    <div key={friend.id} className="bg-gray-800 border border-gray-700 rounded-xl p-4 flex items-center">
                      <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold mr-4">
                        {friend.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-medium text-white">{friend.name}</div>
                        <div className="text-sm text-gray-400">@{friend.username}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
          
          {activeTab === 'requests' && (
            <div>
              {pendingRequests.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-400">No pending friend requests</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {pendingRequests.map(({ request, user }) => (
                    <div key={request.id} className="bg-gray-800 border border-gray-700 rounded-xl p-4 flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold mr-4">
                          {user.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-medium text-white">{user.name}</div>
                          <div className="text-sm text-gray-400">@{user.username}</div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleRespondToRequest(request.id, true)}
                          className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors"
                        >
                          <Check className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => handleRespondToRequest(request.id, false)}
                          className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-lg transition-colors"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
          
          {activeTab === 'add' && (
            <div>
              <div className="mb-6">
                <label className="block text-gray-300 mb-2">
                  Find a friend by username
                </label>
                <div className="flex">
                  <input
                    type="text"
                    value={searchUsername}
                    onChange={(e) => setSearchUsername(e.target.value)}
                    placeholder="Enter username"
                    className="flex-1 bg-gray-800 border border-gray-700 text-white rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    onClick={handleSearch}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg transition-colors"
                  >
                    <Search className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              {error && (
                <div className="bg-red-900/50 border border-red-800 text-red-100 px-4 py-3 rounded mb-4">
                  {error}
                </div>
              )}
              
              {success && (
                <div className="bg-green-900/50 border border-green-800 text-green-100 px-4 py-3 rounded mb-4">
                  {success}
                </div>
              )}
              
              {searchResult && (
                <div className="bg-gray-800 border border-gray-700 rounded-xl p-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold mr-4">
                      {searchResult.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-medium text-white">{searchResult.name}</div>
                      <div className="text-sm text-gray-400">@{searchResult.username}</div>
                    </div>
                  </div>
                  <button
                    onClick={handleSendRequest}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors inline-flex items-center"
                  >
                    <UserPlus className="w-5 h-5 mr-2" />
                    Send Request
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}