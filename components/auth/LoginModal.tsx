'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { User, X } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToRegister: () => void;
}

export default function LoginModal({ isOpen, onClose, onSwitchToRegister }: LoginModalProps) {
  const router = useRouter();
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setLoginData(prev => ({ ...prev, [field]: value }));
  };

  const handleLogin = () => {
    const validCredentials = [
      { username: 'contractor1', password: 'pass123' },
      { username: 'contractor2', password: 'pass456' }
    ];
    
    const isValid = validCredentials.some(
      cred => cred.username === loginData.username && cred.password === loginData.password
    );
    
    if (!isValid) {
      alert('Invalid credentials. Please use the demo credentials provided.');
      return;
    }
    
    // Set logged in state
    localStorage.setItem('loggedInUser', loginData.username);
    onClose();
    router.push('/dashboard');
  };

  const handleClose = () => {
    setLoginData({ username: '', password: '' });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[60] p-4 overflow-y-auto scrollbar-hide">
      <div className="relative my-auto w-full flex justify-center">
        <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg p-8 border border-gray-200">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="text-center mb-8">
            <div className="relative inline-block mb-6">
              <div className="w-16 h-16 bg-[#122E5F] rounded-2xl flex items-center justify-center shadow-lg mx-auto">
                <User className="h-8 w-8 text-white" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Contractor Login
            </h2>
            <p className="text-gray-600">Access your professional dashboard</p>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Username
              </label>
              <input
                type="text"
                placeholder="Enter username"
                className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2563eb] focus:border-[#2563eb] text-gray-900 placeholder-gray-500 transition-all duration-300"
                value={loginData.username}
                onChange={(e) => handleInputChange('username', e.target.value)}
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter password"
                className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2563eb] focus:border-[#2563eb] text-gray-900 placeholder-gray-500 transition-all duration-300"
                value={loginData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
              />
            </div>

            <div className="flex space-x-3 pt-4">
              <button
                onClick={handleLogin}
                className="flex-1 bg-[#122E5F] hover:bg-[#0f2347] text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 shadow-lg"
              >
                Login
              </button>
              <button
                onClick={handleClose}
                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-4 rounded-xl transition-all duration-300"
              >
                Cancel
              </button>
            </div>

            <div className="text-center pt-4 border-t border-gray-200">
              <span className="text-sm text-gray-600">
                Don't have an account?{' '}
                <button 
                  onClick={onSwitchToRegister}
                  className="text-[#2563eb] hover:text-[#1d4ed8] font-semibold transition-colors duration-200"
                >
                  Create Account
                </button>
              </span>
            </div>

            <div className="bg-gray-50 rounded-xl p-4 text-xs text-gray-600 border border-gray-200">
              <div className="font-semibold text-gray-800 mb-2">Demo Credentials:</div>
              <div>Username: contractor1, Password: pass123</div>
              <div>Username: contractor2, Password: pass456</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}