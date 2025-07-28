import { User, Message, FriendRequest } from '../types/user';

// Sample users for testing
export const users: User[] = [];

// Messages storage
export const messages: Message[] = [];

// Friend requests storage
export const friendRequests: FriendRequest[] = [];

// User authentication functions
export function registerUser(username: string, email: string, password: string, name: string): User | null {
  // Check if username or email already exists
  const existingUser = users.find(user => user.username === username || user.email === email);
  if (existingUser) return null;
  
  const newUser: User = {
    id: Date.now().toString(),
    username,
    email,
    password, // In a real app, this would be hashed
    name,
    joinedDate: new Date().toISOString(),
    friends: [],
    learningPaths: [],
    certificates: [] // Initialize the certificates array
  };
  
  users.push(newUser);
  saveUsersToLocalStorage();
  return newUser;
}

export function loginUser(usernameOrEmail: string, password: string): User | null {
  const user = users.find(
    user => (user.username === usernameOrEmail || user.email === usernameOrEmail) && user.password === password
  );
  return user || null;
}

// Friend management functions
export function sendFriendRequest(senderId: string, receiverUsername: string): FriendRequest | null {
  const receiver = users.find(user => user.username === receiverUsername);
  if (!receiver) return null;
  
  // Check if request already exists
  const existingRequest = friendRequests.find(
    req => (req.senderId === senderId && req.receiverId === receiver.id) ||
           (req.senderId === receiver.id && req.receiverId === senderId)
  );
  if (existingRequest) return null;
  
  const newRequest: FriendRequest = {
    id: Date.now().toString(),
    senderId,
    receiverId: receiver.id,
    status: 'pending',
    timestamp: new Date().toISOString()
  };
  
  friendRequests.push(newRequest);
  saveRequestsToLocalStorage();
  return newRequest;
}

export function respondToFriendRequest(requestId: string, accept: boolean): boolean {
  const requestIndex = friendRequests.findIndex(req => req.id === requestId);
  if (requestIndex === -1) return false;
  
  const request = friendRequests[requestIndex];
  request.status = accept ? 'accepted' : 'rejected';
  
  if (accept) {
    // Add users to each other's friend lists
    const sender = users.find(user => user.id === request.senderId);
    const receiver = users.find(user => user.id === request.receiverId);
    
    if (sender && receiver) {
      sender.friends.push(receiver.id);
      receiver.friends.push(sender.id);
      saveUsersToLocalStorage();
    }
  }
  
  saveRequestsToLocalStorage();
  return true;
}

// Messaging functions
export function sendMessage(senderId: string, receiverId: string, content: string): Message {
  const newMessage: Message = {
    id: Date.now().toString(),
    senderId,
    receiverId,
    content,
    timestamp: new Date().toISOString(),
    read: false
  };
  
  messages.push(newMessage);
  saveMessagesToLocalStorage();
  return newMessage;
}

export function getConversation(userId1: string, userId2: string): Message[] {
  return messages.filter(
    msg => (msg.senderId === userId1 && msg.receiverId === userId2) ||
           (msg.senderId === userId2 && msg.receiverId === userId1)
  ).sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime());
}

// Local storage functions
export function saveUsersToLocalStorage(): void {
  localStorage.setItem('vlearn_users', JSON.stringify(users));
}

export function loadUsersFromLocalStorage(): void {
  const savedUsers = localStorage.getItem('vlearn_users');
  if (savedUsers) {
    users.length = 0; // Clear the array
    users.push(...JSON.parse(savedUsers));
  }
}

export function saveMessagesToLocalStorage(): void {
  localStorage.setItem('vlearn_messages', JSON.stringify(messages));
}

export function loadMessagesFromLocalStorage(): void {
  const savedMessages = localStorage.getItem('vlearn_messages');
  if (savedMessages) {
    messages.length = 0; // Clear the array
    messages.push(...JSON.parse(savedMessages));
  }
}

export function saveRequestsToLocalStorage(): void {
  localStorage.setItem('vlearn_friend_requests', JSON.stringify(friendRequests));
}

export function loadRequestsFromLocalStorage(): void {
  const savedRequests = localStorage.getItem('vlearn_friend_requests');
  if (savedRequests) {
    friendRequests.length = 0; // Clear the array
    friendRequests.push(...JSON.parse(savedRequests));
  }
}

// Initialize data from localStorage
export function initializeUserData(): void {
  loadUsersFromLocalStorage();
  loadMessagesFromLocalStorage();
  loadRequestsFromLocalStorage();
}

// Certificate management functions
export function addCertificateToUser(userId: string, certificateId: string): boolean {
  const user = users.find(user => user.id === userId);
  if (!user) return false;
  
  // Check if certificate already exists in user's profile
  if (!user.certificates) {
    user.certificates = [];
  }
  
  if (!user.certificates.includes(certificateId)) {
    user.certificates.push(certificateId);
    saveUsersToLocalStorage();
  }
  
  return true;
}

export function getUserCertificates(userId: string): string[] {
  const user = users.find(user => user.id === userId);
  return user?.certificates || [];
}