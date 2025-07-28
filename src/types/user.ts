import { LearningPath } from './learning';

export interface User {
  id: string;
  username: string;
  email: string;
  password: string; // In a real app, this would be hashed
  name: string;
  profilePicture?: string;
  bio?: string;
  joinedDate: string;
  friends: string[]; // Array of user IDs
  learningPaths: string[]; // Array of learning path IDs
  certificates: string[]; // Array of certificate IDs
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: string;
  read: boolean;
}

export interface FriendRequest {
  id: string;
  senderId: string;
  receiverId: string;
  status: 'pending' | 'accepted' | 'rejected';
  timestamp: string;
}
