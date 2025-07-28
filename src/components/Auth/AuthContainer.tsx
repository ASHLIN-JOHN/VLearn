import React, { useState } from 'react';
import { SignIn } from './SignIn';
import { SignUp } from './SignUp';
import { User } from '../../types/user';
import { initializeUserData } from '../../data/users';

interface AuthContainerProps {
  onAuthenticated: (user: User) => void;
}

export function AuthContainer({ onAuthenticated }: AuthContainerProps) {
  const [showSignIn, setShowSignIn] = useState(true);
  
  // Initialize user data from localStorage
  React.useEffect(() => {
    initializeUserData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {showSignIn ? (
          <SignIn 
            onSignIn={onAuthenticated} 
            onSwitchToSignUp={() => setShowSignIn(false)} 
          />
        ) : (
          <SignUp 
            onSignUp={onAuthenticated} 
            onSwitchToSignIn={() => setShowSignIn(true)} 
          />
        )}
      </div>
    </div>
  );
}