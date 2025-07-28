import React, { useState, useEffect, useRef } from 'react';
import { User, Message } from '../../types/user';
import { sendMessage, getConversation, users } from '../../data/users';
import { Send, X } from 'lucide-react';

interface MessengerProps {
  currentUser: User;
  onClose: () => void;
}

export function Messenger({ currentUser, onClose }: MessengerProps) {
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  const [messageText, setMessageText] = useState('');
  const [conversations, setConversations] = useState<Message[]>([]);
  const [availableUsers, setAvailableUsers] = useState<User[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Get friends list
  useEffect(() => {
    const friends = users.filter(user => 
      currentUser.friends.includes(user.id)
    );
    setAvailableUsers(friends);
  }, [currentUser]);

  // Load conversation when user is selected
  useEffect(() => {
    if (selectedUserId) {
      const messages = getConversation(currentUser.id, selectedUserId);
      setConversations(messages);
    }
  }, [selectedUserId, currentUser.id]);

  // Scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [conversations]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!messageText.trim() || !selectedUserId) return;

    const newMessage = sendMessage(currentUser.id, selectedUserId, messageText);
    setConversations([...conversations, newMessage]);
    setMessageText('');
  };

  const getSelectedUser = () => {
    return availableUsers.find(user => user.id === selectedUserId);
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
      <div className="bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl w-full max-w-4xl h-[80vh] overflow-hidden">
        <div className="flex h-full">
          {/* Sidebar - Friends list */}
          <div className="w-1/3 border-r border-gray-700 h-full overflow-y-auto">
            <div className="p-4 border-b border-gray-700">
              <h2 className="text-xl font-bold text-white">Messages</h2>
            </div>
            
            <div className="overflow-y-auto">
              {availableUsers.length === 0 ? (
                <div className="p-4 text-gray-400 text-center">
                  No friends yet. Add friends to start messaging.
                </div>
              ) : (
                availableUsers.map(user => (
                  <button
                    key={user.id}
                    onClick={() => setSelectedUserId(user.id)}
                    className={`w-full p-4 text-left hover:bg-gray-800 transition-colors flex items-center ${selectedUserId === user.id ? 'bg-gray-800' : ''}`}
                  >
                    <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold mr-3">
                      {user.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-medium text-white">{user.name}</div>
                      <div className="text-sm text-gray-400">{user.username}</div>
                    </div>
                  </button>
                ))
              )}
            </div>
          </div>
          
          {/* Main chat area */}
          <div className="w-2/3 flex flex-col h-full">
            {/* Header */}
            <div className="p-4 border-b border-gray-700 flex justify-between items-center">
              {selectedUserId ? (
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold mr-3">
                    {getSelectedUser()?.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-medium text-white">{getSelectedUser()?.name}</div>
                    <div className="text-sm text-gray-400">@{getSelectedUser()?.username}</div>
                  </div>
                </div>
              ) : (
                <h2 className="text-xl font-bold text-white">Select a friend to start chatting</h2>
              )}
              
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-gray-700 transition-colors"
              >
                <X className="w-6 h-6 text-gray-400" />
              </button>
            </div>
            
            {/* Messages */}
            {selectedUserId ? (
              <>
                <div className="flex-1 overflow-y-auto p-4">
                  {conversations.length === 0 ? (
                    <div className="h-full flex items-center justify-center text-gray-400">
                      No messages yet. Start the conversation!
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {conversations.map(message => {
                        const isCurrentUser = message.senderId === currentUser.id;
                        return (
                          <div 
                            key={message.id} 
                            className={`flex ${isCurrentUser ? 'justify-end' : 'justify-start'}`}
                          >
                            <div 
                              className={`max-w-[70%] rounded-2xl px-4 py-3 ${isCurrentUser ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-200'}`}
                            >
                              <div>{message.content}</div>
                              <div className="text-xs opacity-70 mt-1">
                                {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                      <div ref={messagesEndRef} />
                    </div>
                  )}
                </div>
                
                {/* Message input */}
                <div className="p-4 border-t border-gray-700">
                  <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
                    <input
                      type="text"
                      value={messageText}
                      onChange={(e) => setMessageText(e.target.value)}
                      placeholder="Type a message..."
                      className="flex-1 bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      type="submit"
                      className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors"
                      disabled={!messageText.trim()}
                    >
                      <Send className="w-5 h-5" />
                    </button>
                  </form>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center text-gray-400">
                Select a friend to start chatting
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}