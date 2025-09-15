'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Element } from 'react-scroll';
import Image from 'next/image';
import { ArrowRight, ArrowLeft, CheckCircle, Shield, Award, MapPin, Clock, Home } from 'lucide-react';

export default function Hero() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    zipCode: '',
    phoneNumber: '',
    email: '',
    firstName: '',
    lastName: '',
    insuredBy: '',
    policyNumber: ''
  });

  const [errors, setErrors] = React.useState<{ [key: string]: string }>({});

  const validateField = (field: string, value: string): string => {
    switch (field) {
      case 'zipCode':
        if (!/^\d{5}(-\d{4})?$/.test(value)) {
          return 'Please enter a valid ZIP code.';
        }
        return '';
      case 'firstName':
        if (!value.trim()) return 'First name is required.';
        if (!/^[A-Za-z]/.test(value.trim())) return 'First name must start with a letter.';
        return '';
      case 'lastName':
        if (!value.trim()) return 'Last name is required.';
        if (!/^[A-Za-z]/.test(value.trim())) return 'Last name must start with a letter.';
        return '';
      case 'phoneNumber':
        // Format input to (555) 123-4567 pattern
        const digits = value.replace(/\D/g, '').slice(0, 10);
        let formatted = digits;
        if (digits.length > 6) {
          formatted = `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
        } else if (digits.length > 3) {
          formatted = `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
        } else if (digits.length > 0) {
          formatted = `(${digits}`;
        }
        if (value !== formatted) {
          setFormData(prev => ({
        ...prev,
        phoneNumber: formatted
          }));
        }
        if (digits.length !== 10) {
          return 'Please enter a valid 10-digit phone number.';
        }
        return '';
      case 'email':
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          return 'Please enter a valid email.';
        }
        return '';
      case 'insuredBy':
        if (!value.trim()) return 'Insurance company is required.';
        return '';
      case 'policyNumber':
        if (!value.trim()) return 'Policy number is required.';
        return '';
      default:
        return '';
    }
  };











  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    const errorMessage = validateField(field, value);
    setErrors(prev => ({
      ...prev,
      [field]: errorMessage
    }));
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.zipCode.trim() !== '' && !errors.zipCode;
      case 2:
        return formData.firstName.trim() !== '' && !errors.firstName &&
          formData.lastName.trim() !== '' && !errors.lastName &&
          formData.phoneNumber.trim() !== '' && !errors.phoneNumber &&
          formData.email.trim() !== '' && !errors.email &&
          isValidEmail(formData.email);
      case 3:
        return formData.insuredBy.trim() !== '' && !errors.insuredBy &&
          formData.policyNumber.trim() !== '' && !errors.policyNumber;
      default:
        return false;
    }
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    router.push('/thank-you');
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      <Element name="free-inspection-form">
        <div className="absolute inset-0">
          <Image
            src="/BG-Image.png"
            alt="Professional roofing services"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/75"></div>
        </div>


        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
            {/* Left Content */}
            <div className="text-white space-y-6 lg:space-y-8 order-1 lg:order-1">
              {/* Trust Badge */}
              <div className="inline-flex items-center bg-blue-600 px-6 py-3 rounded-full text-sm font-semibold">
                <Shield className="mr-2 h-4 w-4 text-white" />
                <span className="text-white">Licensed & Insured in All 50 States</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="text-white">
                    Get Your Roof
                  </span>
                  <br />
                  {/* <span className="text-[#2563eb]"> */}
                  100% Covered
                  {/* </span> */}
                </h1>

                <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl lg:block hidden">
                  Professional roofing experts help homeowners get insurance-covered roof replacements with
                  <span className="text-[#2563eb] font-semibold"> zero out-of-pocket costs</span>.
                </p>
              </div>

              {/* Professional Features - Hidden on mobile, shown after form */}
              <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <CheckCircle className="h-6 w-6 text-[#2563eb] flex-shrink-0" />
                  <div>
                    <div className="text-white font-semibold">99.7% Success Rate</div>
                    <div className="text-xs text-gray-400">Insurance Claims Approved</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <Award className="h-6 w-6 text-[#2563eb] flex-shrink-0" />
                  <div>
                    <div className="text-white font-semibold">A+ BBB Rating</div>
                    <div className="text-xs text-gray-400">Trusted by Thousands</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <MapPin className="h-6 w-6 text-[#2563eb] flex-shrink-0" />
                  <div>
                    <div className="text-white font-semibold">Nationwide Service</div>
                    <div className="text-xs text-gray-400">All 50 States Coverage</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <Clock className="h-6 w-6 text-[#2563eb] flex-shrink-0" />
                  <div>
                    <div className="text-white font-semibold">24-Hour Response</div>
                    <div className="text-xs text-gray-400">Emergency Available</div>
                  </div>
                </div>
              </div>

              {/* Call to Action - Hidden on mobile, shown after form */}
              {/* <div className="hidden lg:block bg-[#122E5F]/20 backdrop-blur-sm border border-[#2563eb]/30 rounded-2xl p-6">
                <div className="flex items-center justify-center mb-3">
                  <Phone className="h-5 w-5 text-[#2563eb] mr-2" />
                  <span className="font-bold text-lg">
                    <span className="text-white">Free Inspection</span>
                    <span className="text-[#2563eb]"> for Immediate Service</span>
                  </span>
                </div>
                <div className="text-center">
                  <a
                    href="tel:1-800-ROOF-PRO"
                    className="text-3xl md:text-4xl font-bold text-white hover:text-[#2563eb] transition-colors"
                  >
                    1-800-ROOF-PRO
                  </a>
                </div>
                <div className="text-blue-200 text-sm text-center mt-2">
                  Available 24/7 for emergency roof repairs
                </div>
              </div> */}
            </div>


            {/* Professional Form */}
            <div className="relative order-2 lg:order-2 w-full">
              <div className="bg-white rounded-3xl shadow-2xl p-8">
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-16 h-16 bg-[#122E5F] rounded-2xl flex items-center justify-center">
                      <Home className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    Free Roof Inspection
                  </h2>
                  <p className="text-gray-600">
                    Step {currentStep} of 3 • Get your claim started in 60 seconds
                  </p>
                </div>

                {/* Progress Bar */}
                <div className="mb-8">
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-[#2563eb] h-3 rounded-full transition-all duration-500 ease-out"
                      style={{ width: `${(currentStep / 3) * 100}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-gray-500">
                    <span className={currentStep >= 1 ? 'text-blue-600 font-semibold' : ''}>Location</span>
                    <span className={currentStep >= 2 ? 'text-blue-600 font-semibold' : ''}>Contact Info</span>
                    <span className={currentStep >= 3 ? 'text-blue-600 font-semibold' : ''}>Insurance</span>
                  </div>
                </div>

                {/* Form Steps */}
                <div className="space-y-6">
                  {/* Step 1: ZIP Code */}
                  {currentStep === 1 && (
                    <div className="space-y-4">
                      <label className="block text-gray-700 font-semibold mb-3 text-left">
                        📍 Property ZIP Code
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your ZIP code"
                        className={`w-full px-6 py-4 border-2 border-gray-300 rounded-2xl focus:ring-2 focus:ring-[#2563eb] focus:border-[#2563eb] text-gray-900 placeholder-gray-500 transition-all duration-300 text-lg ${errors.zipCode ? 'border-red-500' : 'border-gray-300'}`}
                        value={formData.zipCode}
                        onChange={(e) => handleInputChange('zipCode', e.target.value)}
                        required
                      />
                      {errors.zipCode && <p className="text-red-500 text-xs mt-1">{errors.zipCode}</p>}
                      <p className="text-xs text-gray-500">We'll check for recent storm activity in your area</p>
                    </div>
                  )}

                  {/* Step 2: Contact Info */}
                  {currentStep === 2 && (
                    <div className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-gray-700 font-semibold mb-2 text-left">
                            First Name
                          </label>
                          <input
                            type="text"
                            placeholder="John"
                            className={`w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2563eb] focus:border-[#2563eb] text-gray-900 placeholder-gray-500 transition-all duration-300 ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
                            value={formData.firstName}
                            onChange={(e) => handleInputChange('firstName', e.target.value)}
                            required
                          />
                          {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                        </div>
                        <div>
                          <label className="block text-gray-700 font-semibold mb-2 text-left">
                            Last Name
                          </label>
                          <input
                            type="text"
                            placeholder="Smith"
                            className={`w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2563eb] focus:border-[#2563eb] text-gray-900 placeholder-gray-500 transition-all duration-300 ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`}
                            value={formData.lastName}
                            onChange={(e) => handleInputChange('lastName', e.target.value)}
                            required
                          />
                          {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                        </div>
                      </div>

                      <div>
                        <label className="block text-gray-700 font-semibold mb-2 text-left">
                          📱 Phone Number
                        </label>
                        <input
                          type="tel"
                          placeholder="(555) 123-4567"
                          className={`w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2563eb] focus:border-[#2563eb] text-gray-900 placeholder-gray-500 transition-all duration-300 ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'}`}
                          value={formData.phoneNumber}
                          onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                          required
                        />
                        {errors.phoneNumber && <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>}
                      </div>

                      <div>
                        <label className="block text-gray-700 font-semibold mb-2 text-left">
                          📧 Email Address
                        </label>
                        <input
                          type="email"
                          placeholder="john@example.com"
                          className={`w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2563eb] focus:border-[#2563eb] text-gray-900 placeholder-gray-500 transition-all duration-300 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                      </div>
                    </div>
                  )}

                  {/* Step 3: Insurance Info */}
                  {currentStep === 3 && (
                    <div className="space-y-6">
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2 text-left">
                          🏢 Insurance Company
                        </label>
                        <input
                          type="text"
                          placeholder="State Farm, Allstate, USAA, etc."
                          className={`w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2563eb] focus:border-[#2563eb] text-gray-900 placeholder-gray-500 transition-all duration-300 ${errors.insuredBy ? 'border-red-500' : 'border-gray-300'}`}
                          value={formData.insuredBy}
                          onChange={(e) => handleInputChange('insuredBy', e.target.value)}
                          required
                        />
                        {errors.insuredBy && <p className="text-red-500 text-xs mt-1">{errors.insuredBy}</p>}
                      </div>

                      <div>
                        <label className="block text-gray-700 font-semibold mb-2 text-left">
                          📋 Policy Number
                        </label>
                        <input
                          type="text"
                          placeholder="Your insurance policy number"
                          className={`w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2563eb] focus:border-[#2563eb] text-gray-900 placeholder-gray-500 transition-all duration-300 ${errors.policyNumber ? 'border-red-500' : 'border-gray-300'}`}
                          value={formData.policyNumber}
                          onChange={(e) => handleInputChange('policyNumber', e.target.value)}
                          required
                        />
                        {errors.policyNumber && <p className="text-red-500 text-xs mt-1">{errors.policyNumber}</p>}
                      </div>

                      {/* What Happens Next */}
                      <div className="bg-blue-50 border border-[#2563eb]/20 rounded-xl p-6">
                        <h3 className="text-[#122E5F] font-bold mb-4 flex items-center">
                          <CheckCircle className="h-5 w-5 mr-2" />
                          What Happens Next
                        </h3>
                        <div className="space-y-3 text-sm">
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-[#2563eb] rounded-full"></div>
                            <span className="text-gray-700">Expert roof inspection within 24 hours</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-[#2563eb] rounded-full"></div>
                            <span className="text-gray-700">Insurance claim filed on your behalf</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-[#2563eb] rounded-full"></div>
                            <span className="text-gray-700">Professional roof replacement if approved</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-[#2563eb] rounded-full"></div>
                            <span className="text-gray-700">You pay only your insurance deductible</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex space-x-4 mt-8">
                    {currentStep > 1 && (
                      <button
                        onClick={prevStep}
                        className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2"
                      >
                        <ArrowLeft className="h-5 w-5" />
                        <span>Back</span>
                      </button>
                    )}

                    <button
                      onClick={currentStep === 3 ? handleSubmit : nextStep}
                      disabled={!isStepValid()}
                      className="flex-1 bg-[#122E5F] hover:bg-[#0f2347] disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      {currentStep === 3 ? (
                        <span className="flex items-center space-x-2 whitespace-nowrap">
                          <Shield className="h-5 w-5" />
                          <span>Get My Free Inspection</span>
                        </span>
                      ) : (
                        <>
                          <span>Continue</span>
                          <ArrowRight className="h-5 w-5" />
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-xs text-gray-500 text-center mt-6">
                    🔒 Your information is secure and will never be shared
                  </p>
                </div>
              </div>
            </div>


            {/* Mobile-only content after form */}
            <div className="lg:hidden text-white space-y-6 order-3">
              {/* Mobile description */}
              <p className="text-lg text-gray-300 leading-relaxed text-center">
                Professional roofing experts help homeowners get insurance-covered roof replacements with
                <span className="text-[#2563eb] font-semibold"> zero out-of-pocket costs</span>.
              </p>

              {/* Mobile Professional Features */}
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <CheckCircle className="h-6 w-6 text-[#2563eb] flex-shrink-0" />
                  <div>
                    <div className="text-white font-semibold">99.7% Success Rate</div>
                    <div className="text-xs text-gray-400">Insurance Claims Approved</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <Award className="h-6 w-6 text-[#2563eb] flex-shrink-0" />
                  <div>
                    <div className="text-white font-semibold">A+ BBB Rating</div>
                    <div className="text-xs text-gray-400">Trusted by Thousands</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <MapPin className="h-6 w-6 text-[#2563eb] flex-shrink-0" />
                  <div>
                    <div className="text-white font-semibold">Nationwide Service</div>
                    <div className="text-xs text-gray-400">All 50 States Coverage</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <Clock className="h-6 w-6 text-[#2563eb] flex-shrink-0" />
                  <div>
                    <div className="text-white font-semibold">24-Hour Response</div>
                    <div className="text-xs text-gray-400">Emergency Available</div>
                  </div>
                </div>
              </div>

              {/* Mobile Call to Action */}
              {/* <div className="bg-[#122E5F]/20 backdrop-blur-sm border border-[#2563eb]/30 rounded-2xl p-6">
                <div className="flex items-center justify-center mb-3">
                  <Phone className="h-5 w-5 text-[#2563eb] mr-2" />
                  <span className="font-bold text-lg">
                    <span className="text-white">Free Inspection</span>
                    <span className="text-[#2563eb]"> for Immediate Service</span>
                  </span>
                </div>
                <div className="text-center">
                  <a
                    href="tel:1-800-ROOF-PRO"
                    className="text-2xl md:text-3xl font-bold text-white hover:text-[#2563eb] transition-colors"
                  >
                    1-800-ROOF-PRO
                  </a>
                </div>
                <div className="text-blue-200 text-sm text-center mt-2">
                  Available 24/7 for emergency roof repairs
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </Element>
    </section>
  );
}