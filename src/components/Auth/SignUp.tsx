import React, { useState } from 'react';
import { registerUser } from '../../data/users';

interface SignUpProps {
  onSignUp: (user: any) => void;
  onSwitchToSignIn: () => void;
}

export function SignUp({ onSignUp, onSwitchToSignIn }: SignUpProps) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!username || !email || !password || !confirmPassword || !name) {
      setError('Please fill in all fields');
      return;
    }
    
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    const user = registerUser(username, email, password, name);
    if (user) {
      onSignUp(user);
    } else {
      setError('Username or email already exists');
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 shadow-xl border border-gray-800 max-w-md w-full">
      <h2 className="text-3xl font-bold text-white mb-6 text-center">Sign Up</h2>
      
      {error && (
        <div className="bg-red-900/50 border border-red-800 text-red-100 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-300 mb-2" htmlFor="name">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-300 mb-2" htmlFor="username">
            Username
          </label>
          <input
            id="username"
            type="text"
            className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-300 mb-2" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-300 mb-2" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        
        <div className="mb-6">
          <label className="block text-gray-300 mb-2" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            type="password"
            className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors"
        >
          Sign Up
        </button>
      </form>
      
      <div className="mt-6 text-center text-gray-400">
        Already have an account?{' '}
        <button
          onClick={onSwitchToSignIn}
          className="text-blue-400 hover:text-blue-300 underline focus:outline-none"
        >
          Sign In
        </button>
      </div>
    </div>
  );
}