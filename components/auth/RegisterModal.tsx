'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { User, X, Home, Star, ChevronDown } from 'lucide-react';

// Google Places API configuration
const GOOGLE_PLACES_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY || '';

// Interface for Google Places prediction
interface PlacePrediction {
  place_id: string;
  description: string;
  structured_formatting: {
    main_text: string;
    secondary_text: string;
  };
}

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToLogin: () => void;
}

export default function RegisterModal({ isOpen, onClose, onSwitchToLogin }: RegisterModalProps) {
  const router = useRouter();
  const [addressSuggestions, setAddressSuggestions] = useState<PlacePrediction[]>([]);
  const [showAddressSuggestions, setShowAddressSuggestions] = useState(false);
  const [isLoadingAddresses, setIsLoadingAddresses] = useState(false);
  const [registrationData, setRegistrationData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    position: '',
    phoneNumber: '',
    email: '',
    businessAddress: '',
    serviceRadius: ''
  });
  const [validationErrors, setValidationErrors] = useState<{[key: string]: string}>({});

  // Debounce timer for API calls
  const [debounceTimer, setDebounceTimer] = useState<NodeJS.Timeout | null>(null);

  const handleClose = () => {
    setRegistrationData({
      username: '',
      password: '',
      confirmPassword: '',
      fullName: '',
      position: '',
      phoneNumber: '',
      email: '',
      businessAddress: '',
      serviceRadius: ''
    });
    setValidationErrors({});
    setAddressSuggestions([]);
    setShowAddressSuggestions(false);
    onClose();
  };

  const validateRegistrationForm = () => {
    const errors: {[key: string]: string} = {};

    // Username validation
    if (!registrationData.username.trim()) {
      errors.username = 'Username is required';
    } else if (registrationData.username.length < 3) {
      errors.username = 'Username must be at least 3 characters';
    } else if (!/^[a-zA-Z0-9_]+$/.test(registrationData.username)) {
      errors.username = 'Username can only contain letters, numbers, and underscores';
    }

    // Password validation
    if (!registrationData.password) {
      errors.password = 'Password is required';
    } else if (registrationData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(registrationData.password)) {
      errors.password = 'Password must contain uppercase, lowercase, and number';
    }

    // Confirm password validation
    if (!registrationData.confirmPassword) {
      errors.confirmPassword = 'Please confirm your password';
    } else if (registrationData.password !== registrationData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    // Full name validation
    if (!registrationData.fullName.trim()) {
      errors.fullName = 'Full name is required';
    } else if (registrationData.fullName.trim().length < 2) {
      errors.fullName = 'Full name must be at least 2 characters';
    }

    // Position validation
    if (!registrationData.position.trim()) {
      errors.position = 'Position/Title is required';
    }

    // Phone number validation
    if (!registrationData.phoneNumber.trim()) {
      errors.phoneNumber = 'Phone number is required';
    } else if (!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(registrationData.phoneNumber)) {
      errors.phoneNumber = 'Please enter a valid phone number';
    }

    // Email validation
    if (!registrationData.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(registrationData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    // Business address validation
    if (!registrationData.businessAddress.trim()) {
      errors.businessAddress = 'Business address is required';
    } else if (registrationData.businessAddress.trim().length < 10) {
      errors.businessAddress = 'Please enter a complete business address';
    }

    // Service radius validation
    if (!registrationData.serviceRadius.trim()) {
      errors.serviceRadius = 'Service radius is required';
    } else if (isNaN(Number(registrationData.serviceRadius)) || Number(registrationData.serviceRadius) <= 0) {
      errors.serviceRadius = 'Please enter a valid number greater than 0';
    } else if (Number(registrationData.serviceRadius) > 500) {
      errors.serviceRadius = 'Service radius cannot exceed 500 miles';
    }

    return errors;
  };

  // Function to fetch Google Places suggestions
  const fetchAddressSuggestions = async (input: string) => {
    if (!GOOGLE_PLACES_API_KEY) {
      console.warn('Google Places API key not found. Please add NEXT_PUBLIC_GOOGLE_PLACES_API_KEY to your environment variables.');
      // Fallback to demo data for development
      const demoSuggestions: PlacePrediction[] = [
        {
          place_id: 'demo1',
          description: `${input} - Houston, TX, USA`,
          structured_formatting: {
            main_text: `${input} - Houston`,
            secondary_text: 'TX, USA'
          }
        },
        {
          place_id: 'demo2',
          description: `${input} - Dallas, TX, USA`,
          structured_formatting: {
            main_text: `${input} - Dallas`,
            secondary_text: 'TX, USA'
          }
        },
        {
          place_id: 'demo3',
          description: `${input} - Austin, TX, USA`,
          structured_formatting: {
            main_text: `${input} - Austin`,
            secondary_text: 'TX, USA'
          }
        }
      ];
      setAddressSuggestions(demoSuggestions);
      setIsLoadingAddresses(false);
      return;
    }

    try {
      setIsLoadingAddresses(true);
      
      // Google Places Autocomplete API call
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/autocomplete/json?` +
        `input=${encodeURIComponent(input)}&` +
        `types=address&` +
        `components=country:us&` +
        `key=${GOOGLE_PLACES_API_KEY}`
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch address suggestions');
      }
      
      const data = await response.json();
      
      if (data.status === 'OK') {
        setAddressSuggestions(data.predictions || []);
      } else {
        console.error('Google Places API error:', data.status);
        setAddressSuggestions([]);
      }
    } catch (error) {
      console.error('Error fetching address suggestions:', error);
      setAddressSuggestions([]);
    } finally {
      setIsLoadingAddresses(false);
    }
  };

  const handleRegistrationInputChange = (field: string, value: string) => {
    setRegistrationData(prev => ({ ...prev, [field]: value }));
    
    // Handle address autocomplete
    if (field === 'businessAddress') {
      // Clear previous timer
      if (debounceTimer) {
        clearTimeout(debounceTimer);
      }
      
      if (value.length >= 2) {
        setShowAddressSuggestions(true);
        setIsLoadingAddresses(true);
        
        // Debounce API calls to avoid too many requests
        const timer = setTimeout(() => {
          fetchAddressSuggestions(value);
        }, 300); // 300ms delay
        
        setDebounceTimer(timer);
      } else {
        setShowAddressSuggestions(false);
        setAddressSuggestions([]);
      }
    }
    
    // Clear validation error when user starts typing
    if (validationErrors[field]) {
      setValidationErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handleAddressSelect = (prediction: PlacePrediction) => {
    setRegistrationData(prev => ({ ...prev, businessAddress: prediction.description }));
    setShowAddressSuggestions(false);
    setAddressSuggestions([]);
    setIsLoadingAddresses(false);
    
    // Clear debounce timer
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }
  };

  const handleRegistration = () => {
    const errors = validateRegistrationForm();
    setValidationErrors(errors);
    
    if (Object.keys(errors).length > 0) {
      return;
    }

    console.log('Registration data:', registrationData);
    
    // Store the user as logged in
    localStorage.setItem('loggedInUser', registrationData.username);
    
    alert('🎉 Account created successfully! Redirecting to your dashboard...');
    handleClose();
    
    // Redirect to dashboard
    router.push('/dashboard');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[60] p-4 overflow-y-auto">
      <div className="relative my-8">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl p-8 border border-gray-200 max-h-[90vh] overflow-y-auto scrollbar-hide">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 z-10"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="text-center mb-8">
            <div className="relative inline-block mb-6">
              <div className="w-16 h-16 bg-[#122E5F] rounded-2xl flex items-center justify-center shadow-lg mx-auto">
                <User className="h-8 w-8 text-white" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Create Contractor Account
            </h2>
            <p className="text-gray-600">Join our network of professional contractors</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Account Information */}
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-[#122E5F] mb-4 flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  Account Information
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-2">
                      Username *
                    </label>
                    <input
                      type="text"
                      placeholder="Choose a username"
                      className={`w-full px-4 py-3 bg-white border-2 rounded-xl focus:ring-2 focus:border-transparent text-gray-900 placeholder-gray-500 transition-all duration-300 ${
                        validationErrors.username 
                          ? 'border-red-500 focus:ring-red-500' 
                          : 'border-gray-300 focus:ring-[#2563eb]'
                      }`}
                      value={registrationData.username}
                      onChange={(e) => handleRegistrationInputChange('username', e.target.value)}
                    />
                    {validationErrors.username && (
                      <p className="text-red-500 text-xs mt-1">{validationErrors.username}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-2">
                      Password *
                    </label>
                    <input
                      type="password"
                      placeholder="Create a strong password"
                      className={`w-full px-4 py-3 bg-white border-2 rounded-xl focus:ring-2 focus:border-transparent text-gray-900 placeholder-gray-500 transition-all duration-300 ${
                        validationErrors.password 
                          ? 'border-red-500 focus:ring-red-500' 
                          : 'border-gray-300 focus:ring-[#2563eb]'
                      }`}
                      value={registrationData.password}
                      onChange={(e) => handleRegistrationInputChange('password', e.target.value)}
                    />
                    {validationErrors.password && (
                      <p className="text-red-500 text-xs mt-1">{validationErrors.password}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-2">
                      Confirm Password *
                    </label>
                    <input
                      type="password"
                      placeholder="Confirm your password"
                      className={`w-full px-4 py-3 bg-white border-2 rounded-xl focus:ring-2 focus:border-transparent text-gray-900 placeholder-gray-500 transition-all duration-300 ${
                        validationErrors.confirmPassword 
                          ? 'border-red-500 focus:ring-red-500' 
                          : 'border-gray-300 focus:ring-[#2563eb]'
                      }`}
                      value={registrationData.confirmPassword}
                      onChange={(e) => handleRegistrationInputChange('confirmPassword', e.target.value)}
                    />
                    {validationErrors.confirmPassword && (
                      <p className="text-red-500 text-xs mt-1">{validationErrors.confirmPassword}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Personal Information */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-[#122E5F] mb-4 flex items-center">
                  <Star className="h-5 w-5 mr-2" />
                  Personal Information
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Your full name"
                      className={`w-full px-4 py-3 bg-white border-2 rounded-xl focus:ring-2 focus:border-transparent text-gray-900 placeholder-gray-500 transition-all duration-300 ${
                        validationErrors.fullName 
                          ? 'border-red-500 focus:ring-red-500' 
                          : 'border-gray-300 focus:ring-[#2563eb]'
                      }`}
                      value={registrationData.fullName}
                      onChange={(e) => handleRegistrationInputChange('fullName', e.target.value)}
                    />
                    {validationErrors.fullName && (
                      <p className="text-red-500 text-xs mt-1">{validationErrors.fullName}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-2">
                      Position/Title *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Owner, Project Manager"
                      className={`w-full px-4 py-3 bg-white border-2 rounded-xl focus:ring-2 focus:border-transparent text-gray-900 placeholder-gray-500 transition-all duration-300 ${
                        validationErrors.position 
                          ? 'border-red-500 focus:ring-red-500' 
                          : 'border-gray-300 focus:ring-[#2563eb]'
                      }`}
                      value={registrationData.position}
                      onChange={(e) => handleRegistrationInputChange('position', e.target.value)}
                    />
                    {validationErrors.position && (
                      <p className="text-red-500 text-xs mt-1">{validationErrors.position}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="(555) 123-4567"
                      className={`w-full px-4 py-3 bg-white border-2 rounded-xl focus:ring-2 focus:border-transparent text-gray-900 placeholder-gray-500 transition-all duration-300 ${
                        validationErrors.phoneNumber 
                          ? 'border-red-500 focus:ring-red-500' 
                          : 'border-gray-300 focus:ring-[#2563eb]'
                      }`}
                      value={registrationData.phoneNumber}
                      onChange={(e) => handleRegistrationInputChange('phoneNumber', e.target.value)}
                    />
                    {validationErrors.phoneNumber && (
                      <p className="text-red-500 text-xs mt-1">{validationErrors.phoneNumber}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className={`w-full px-4 py-3 bg-white border-2 rounded-xl focus:ring-2 focus:border-transparent text-gray-900 placeholder-gray-500 transition-all duration-300 ${
                        validationErrors.email 
                          ? 'border-red-500 focus:ring-red-500' 
                          : 'border-gray-300 focus:ring-[#2563eb]'
                      }`}
                      value={registrationData.email}
                      onChange={(e) => handleRegistrationInputChange('email', e.target.value)}
                    />
                    {validationErrors.email && (
                      <p className="text-red-500 text-xs mt-1">{validationErrors.email}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Business Information */}
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-[#122E5F] mb-4 flex items-center">
                  <Home className="h-5 w-5 mr-2" />
                  Business Information
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-2">
                      Business Address * (US Only)
                    </label>
                    <input
                      type="text"
                      placeholder="Start typing your business address..."
                      className={`w-full px-4 py-3 bg-white border-2 rounded-xl focus:ring-2 focus:border-transparent text-gray-900 placeholder-gray-500 transition-all duration-300 ${
                        validationErrors.businessAddress 
                          ? 'border-red-500 focus:ring-red-500' 
                          : 'border-gray-300 focus:ring-[#2563eb]'
                      }`}
                      value={registrationData.businessAddress}
                      onChange={(e) => handleRegistrationInputChange('businessAddress', e.target.value)}
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      {GOOGLE_PLACES_API_KEY 
                        ? 'Powered by Google Places - Start typing for suggestions' 
                        : 'Demo mode - Add GOOGLE_PLACES_API_KEY for live suggestions'
                      }
                    </p>
                    {validationErrors.businessAddress && (
                      <p className="text-red-500 text-xs mt-1">{validationErrors.businessAddress}</p>
                    )}
                    
                    {/* Address Suggestions Dropdown */}
                    {showAddressSuggestions && (
                      <div className="relative mt-1">
                        <div className="absolute z-50 w-full bg-white border border-gray-300 rounded-xl shadow-xl max-h-48 overflow-y-auto">
                          {isLoadingAddresses ? (
                            <div className="px-4 py-3 text-gray-600 text-center">
                              <div className="flex items-center justify-center space-x-2">
                                <div className="w-4 h-4 border-2 border-[#2563eb] border-t-transparent rounded-full animate-spin"></div>
                                <span className="text-sm">Loading addresses...</span>
                              </div>
                            </div>
                          ) : addressSuggestions.length > 0 ? (
                            addressSuggestions.map((prediction, index) => (
                              <button
                                key={prediction.place_id}
                                type="button"
                                onClick={() => handleAddressSelect(prediction)}
                                className="w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-all duration-200 flex items-start space-x-3 border-b border-gray-200 last:border-b-0"
                              >
                                <div className="w-2 h-2 bg-[#2563eb] rounded-full mt-2 flex-shrink-0"></div>
                                <div className="flex-1 min-w-0">
                                  <div className="text-sm font-medium text-gray-900 truncate">
                                    {prediction.structured_formatting.main_text}
                                  </div>
                                  <div className="text-xs text-gray-500 truncate">
                                    {prediction.structured_formatting.secondary_text}
                                  </div>
                                </div>
                              </button>
                            ))
                          ) : (
                            <div className="px-4 py-3 text-gray-500 text-center text-sm">
                              No addresses found. Try a different search term.
                            </div>
                          )}
                          
                          {/* Footer */}
                          {!isLoadingAddresses && addressSuggestions.length > 0 && (
                            <div className="px-4 py-2 bg-gray-50 border-t border-gray-200">
                              <p className="text-xs text-gray-500 flex items-center">
                                <ChevronDown className="h-3 w-3 mr-1" />
                                {GOOGLE_PLACES_API_KEY 
                                  ? `${addressSuggestions.length} suggestions from Google Places`
                                  : 'Demo suggestions - Add API key for live data'
                                }
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-2">
                      Service Radius (miles) *
                    </label>
                    <input
                      type="number"
                      placeholder="e.g., 50"
                      className={`w-full px-4 py-3 bg-white border-2 rounded-xl focus:ring-2 focus:border-transparent text-gray-900 placeholder-gray-500 transition-all duration-300 ${
                        validationErrors.serviceRadius 
                          ? 'border-red-500 focus:ring-red-500' 
                          : 'border-gray-300 focus:ring-[#2563eb]'
                      }`}
                      value={registrationData.serviceRadius}
                      onChange={(e) => handleRegistrationInputChange('serviceRadius', e.target.value)}
                    />
                    <p className="text-xs text-gray-500 mt-1">How many miles from your business do you service?</p>
                    {validationErrors.serviceRadius && (
                      <p className="text-red-500 text-xs mt-1">{validationErrors.serviceRadius}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <div className="flex space-x-4">
                  <button
                    onClick={handleRegistration}
                    className="flex-1 bg-[#122E5F] hover:bg-[#0f2347] text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg"
                  >
                    Create Account
                  </button>
                  <button
                    onClick={handleClose}
                    className="px-8 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-4 rounded-xl transition-all duration-300"
                  >
                    Cancel
                  </button>
                </div>

                <div className="text-center pt-4 border-t border-gray-200">
                  <span className="text-sm text-gray-600">
                    Already have an account?{' '}
                    <button 
                      onClick={onSwitchToLogin}
                      className="text-[#2563eb] hover:text-[#1d4ed8] font-semibold transition-colors duration-200"
                    >
                      Login here
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}