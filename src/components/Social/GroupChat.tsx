@@ .. @@
 import React, { useState, useEffect, useRef } from 'react';
 import { User, Group, GroupMessage } from '../../types/user';
 import { users, createGroup, sendGroupMessage, getGroupMessages } from '../../data/users';
-import { Send, X, Users, Mic, Video, Phone, PhoneOff } from 'lucide-react';
+import { Send, X, Users, Mic, Video, Phone, PhoneOff, UserPlus } from 'lucide-react';

 interface GroupChatProps {
@@ .. @@
   const [isRecording, setIsRecording] = useState(false);
   const [recordingTime, setRecordingTime] = useState(0);
   const [inCall, setInCall] = useState(false);
+  const [showAddFriends, setShowAddFriends] = useState(false);
+  const [selectedFriends, setSelectedFriends] = useState<string[]>([]);
   const messagesEndRef = useRef<HTMLDivElement>(null);
   const mediaRecorderRef = useRef<MediaRecorder | null>(null);
   const recordingIntervalRef = useRef<NodeJS.Timeout | null>(null);
@@ .. @@
     }
   };

+  const handleAddFriendsToGroup = () => {
+    if (!selectedGroup || selectedFriends.length === 0) return;
+    
+    // Add friends to the group (in a real app, this would update the backend)
+    const updatedGroups = groups.map(group => {
+      if (group.id === selectedGroup.id) {
+        const newMembers = [...group.members];
+        selectedFriends.forEach(friendId => {
+          if (!newMembers.includes(friendId)) {
+            newMembers.push(friendId);
+          }
+        });
+        return { ...group, members: newMembers };
+      }
+      return group;
+    });
+    
+    setGroups(updatedGroups);
+    setSelectedFriends([]);
+    setShowAddFriends(false);
+    
+    // Save to localStorage
+    localStorage.setItem('vlearn_groups', JSON.stringify(updatedGroups));
+  };
+
+  const availableFriends = users.filter(user => 
+    currentUser.friends.includes(user.id) && 
+    selectedGroup && 
+    !selectedGroup.members.includes(user.id)
+  );
+
   return (
@@ .. @@
               {selectedGroup ? (
                 <div className="flex items-center justify-between">
                   <div className="flex items-center">
                     <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold mr-3">
                       {selectedGroup.name.charAt(0)}
                     </div>
                     <div>
                       <div className="font-medium text-white">{selectedGroup.name}</div>
                       <div className="text-sm text-gray-400">{selectedGroup.members.length} members</div>
                     </div>
                   </div>
                   
                   <div className="flex items-center space-x-2">
+                    <button
+                      onClick={() => setShowAddFriends(true)}
+                      className="p-2 rounded-full hover:bg-gray-700 transition-colors"
+                      title="Add Friends"
+                    >
+                      <UserPlus className="w-5 h-5 text-gray-400" />
+                    </button>
                     <button
                       onClick={startVideoCall}
                       className="p-2 rounded-full hover:bg-gray-700 transition-colors"
@@ .. @@
           </div>
         </div>
       </div>
+      
+      {/* Add Friends Modal */}
+      {showAddFriends && (
+        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
+          <div className="bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl max-w-md w-full">
+            <div className="p-6 border-b border-gray-700">
+              <div className="flex justify-between items-center">
+                <h3 className="text-xl font-bold text-white">Add Friends to Group</h3>
+                <button
+                  onClick={() => {
+                    setShowAddFriends(false);
+                    setSelectedFriends([]);
+                  }}
+                  className="p-2 rounded-full hover:bg-gray-700 transition-colors"
+                >
+                  <X className="w-5 h-5 text-gray-400" />
+                </button>
+              </div>
+            </div>
+            
+            <div className="p-6 max-h-96 overflow-y-auto">
+              {availableFriends.length === 0 ? (
+                <p className="text-gray-400 text-center">No friends available to add</p>
+              ) : (
+                <div className="space-y-3">
+                  {availableFriends.map(friend => (
+                    <div key={friend.id} className="flex items-center justify-between p-3 rounded-lg bg-gray-800">
+                      <div className="flex items-center">
+                        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold mr-3">
+                          {friend.name.charAt(0)}
+                        </div>
+                        <div>
+                          <div className="font-medium text-white">{friend.name}</div>
+                          <div className="text-sm text-gray-400">@{friend.username}</div>
+                        </div>
+                      </div>
+                      <input
+                        type="checkbox"
+                        checked={selectedFriends.includes(friend.id)}
+                        onChange={(e) => {
+                          if (e.target.checked) {
+                            setSelectedFriends([...selectedFriends, friend.id]);
+                          } else {
+                            setSelectedFriends(selectedFriends.filter(id => id !== friend.id));
+                          }
+                        }}
+                        className="w-5 h-5 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500"
+                      />
+                    </div>
+                  ))}
+                </div>
+              )}
+            </div>
+            
+            {availableFriends.length > 0 && (
+              <div className="p-6 border-t border-gray-700">
+                <button
+                  onClick={handleAddFriendsToGroup}
+                  disabled={selectedFriends.length === 0}
+                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-700 disabled:cursor-not-allowed text-white font-bold py-3 px-4 rounded-lg transition-colors"
+                >
+                  Add {selectedFriends.length} Friend{selectedFriends.length !== 1 ? 's' : ''}
+                </button>
+              </div>
+            )}
+          </div>
+        </div>
+      )}
     </div>
   );
 }