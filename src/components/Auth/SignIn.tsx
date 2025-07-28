import React, { useState } from 'react';
import { loginUser } from '../../data/users';

interface SignInProps {
  onSignIn: (user: any) => void;
  onSwitchToSignUp: () => void;
}

export function SignIn({ onSignIn, onSwitchToSignUp }: SignInProps) {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!usernameOrEmail || !password) {
      setError('Please fill in all fields');
      return;
    }
    
    const user = loginUser(usernameOrEmail, password);
    if (user) {
      onSignIn(user);
    } else {
      setError('Invalid username/email or password');
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 shadow-xl border border-gray-800 max-w-md w-full">
      <h2 className="text-3xl font-bold text-white mb-6 text-center">Sign In</h2>
      
      {error && (
        <div className="bg-red-900/50 border border-red-800 text-red-100 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-300 mb-2" htmlFor="usernameOrEmail">
            Username or Email
          </label>
          <input
            id="usernameOrEmail"
            type="text"
            className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={usernameOrEmail}
            onChange={(e) => setUsernameOrEmail(e.target.value)}
          />
        </div>
        
        <div className="mb-6">
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
        
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors"
        >
          Sign In
        </button>
      </form>
      
      <div className="mt-6 text-center text-gray-400">
        Don't have an account?{' '}
        <button
          onClick={onSwitchToSignUp}
          className="text-blue-400 hover:text-blue-300 underline focus:outline-none"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}