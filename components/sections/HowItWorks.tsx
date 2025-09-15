'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { scroller } from 'react-scroll';
import { Search, FileText, Wrench, ArrowRight, CheckCircle, Shield, Star } from 'lucide-react';

const steps = [
  {
    id: 1,
    number: "01",
    title: "Free Professional Inspection",
    subtitle: "Expert Damage Detection",
    description: "Our licensed roofing experts conduct a comprehensive roof inspection at no cost to you. Professional assessment and drone analysis detect all types of damage.",
    icon: Search,
    color: "blue",
    gradient: "from-blue-600 to-blue-500",
    bgGradient: "from-blue-600/10 to-blue-500/10",
    borderColor: "border-blue-400/30",
    features: ["Professional Analysis", "Drone Technology", "Expert Assessment", "Zero Cost to You"],
    image: "/process-1.png"
  },
  {
    id: 2,
    number: "02",
    title: "Insurance Claim Filing",
    subtitle: "Expert Claim Management",
    description: "We handle all paperwork and work directly with your insurance company using our proprietary claim optimization system. Our 99.7% approval rate speaks for itself.",
    icon: FileText,
    color: "purple",
    gradient: "from-blue-700 to-blue-600",
    bgGradient: "from-blue-700/10 to-blue-600/10",
    borderColor: "border-blue-500/30",
    features: ["99.7% Approval Rate", "Zero Paperwork", "Direct Insurance Contact", "Claim Optimization"],
    image: "/process-2.png"
  },
  {
    id: 3,
    number: "03",
    title: "Professional Installation",
    subtitle: "Premium Roof Replacement",
    description: "Top-rated local contractors install your premium new roof using the finest materials. You pay only your insurance deductible - we handle the rest completely.",
    icon: Wrench,
    color: "emerald",
    gradient: "from-green-600 to-green-500",
    bgGradient: "from-green-600/10 to-green-500/10",
    borderColor: "border-green-400/30",
    features: ["Premium Materials", "Licensed Contractors", "Lifetime Warranty", "Deductible Only"],
    image: "/process-3.png"
  }
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(1);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    // Auto-cycle through steps
    const interval = setInterval(() => {
      setActiveStep(prev => prev === 3 ? 1 : prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Professional Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Professional roofing work"
          className="w-full h-full object-cover opacity-5"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Professional Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-[#122E5F] px-8 py-4 rounded-full mb-8">
            <CheckCircle className="mr-3 h-6 w-6 text-white" />
            <span className="text-white font-bold text-lg tracking-wide">HOW IT WORKS</span>
            <CheckCircle className="ml-3 h-6 w-6 text-white" />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            <span className="text-gray-900">
              Simple 3-Step Process
            </span>
            <br />
            <span className="text-[#2563eb] text-3xl md:text-4xl">
              Get Your New Roof
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We handle everything from inspection to installation - you pay only your deductible.
          </p>
        </div>

        {/* Step Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-4">
            {steps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`relative group transition-all duration-300 ${activeStep === step.id ? 'scale-105' : 'hover:scale-105'
                  }`}
              >
                {/* Step number */}
                <div className={`relative w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl border-2 transition-all duration-300 ${activeStep === step.id
                    ? 'bg-[#122E5F] text-white border-[#122E5F] shadow-lg'
                    : 'bg-white text-gray-400 border-gray-300 group-hover:border-gray-400'
                  }`}>
                  {step.number}
                </div>

                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="absolute top-8 left-16 w-20 h-0.5 bg-gray-300">
                    <div className={`h-full bg-[#2563eb] transition-all duration-1000 ${activeStep > step.id ? 'w-full' : 'w-0'
                      }`}></div>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Step Details */}
          <div className="space-y-8">
            {steps.map((step) => (
              <div
                key={step.id}
                className={`transition-all duration-700 ${activeStep === step.id
                    ? 'opacity-100 transform translate-x-0'
                    : 'opacity-0 transform translate-x-8 absolute'
                  }`}
              >
                {activeStep === step.id && (
                  <div className="relative">
                    <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-xl">
                      {/* Icon and Title */}
                      <div className="flex items-center mb-6">
                        <div className="relative mr-6">
                          <div className="w-16 h-16 bg-[#122E5F] rounded-2xl flex items-center justify-center shadow-lg">
                            <step.icon className="h-8 w-8 text-white" />
                          </div>
                        </div>

                        <div>
                          <h3 className="text-3xl font-bold text-gray-900 mb-2">
                            {step.title}
                          </h3>
                          <p className="text-lg font-semibold text-[#2563eb]">
                            {step.subtitle}
                          </p>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 text-lg leading-relaxed mb-8">
                        {step.description}
                      </p>

                      {/* Features Grid */}
                      <div className="grid grid-cols-2 gap-4">
                        {step.features.map((feature, index) => (
                          <div
                            key={index}
                            className="flex items-center space-x-3 bg-blue-50 rounded-xl p-3 border border-[#2563eb]/20"
                          >
                            <CheckCircle className="h-5 w-5 text-[#2563eb]" />
                            <span className="text-gray-700 text-sm font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right: Visual Display */}
          <div className="relative">
            {steps.map((step) => (
              <div
                key={step.id}
                className={`transition-all duration-700 ${activeStep === step.id
                    ? 'opacity-100 transform translate-x-0'
                    : 'opacity-0 transform translate-x-8 absolute inset-0'
                  }`}
              >
                {activeStep === step.id && (
                  <div className="relative group">
                    <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-200">
                      {/* Image */}
                      <div className="relative h-80 overflow-hidden">
                        <Image
                          src={step.image}
                          alt={step.title}
                          width={640}
                          height={320}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-60"></div>

                        {/* Overlay content */}
                        <div className="absolute bottom-6 left-6 right-6">
                          <div className="inline-flex items-center bg-[#122E5F] px-4 py-2 rounded-full text-white font-bold text-sm shadow-lg">
                            <Star className="h-4 w-4 mr-2" />
                            Step {step.id} Active
                          </div>
                        </div>
                      </div>

                      {/* Stats Bar */}
                      <div className="p-6 bg-gray-50">
                        <div className="grid grid-cols-3 gap-4 text-center">
                          <div>
                            <div className="text-2xl font-bold text-gray-900">99.7%</div>
                            <div className="text-xs text-gray-600">Success Rate</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-gray-900">24hrs</div>
                            <div className="text-xs text-gray-600">Response Time</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-gray-900">$0</div>
                            <div className="text-xs text-gray-600">Upfront Cost</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="relative inline-block">
            <button
              onClick={() =>
                scroller.scrollTo('free-inspection-form', {
                  duration: 800,
                  delay: 0,
                  smooth: 'easeInOutQuart'
                })
              }
              className="bg-[#122E5F] hover:bg-[#0f2347] text-white font-bold py-6 px-12 rounded-2xl transition-all duration-300 shadow-lg text-xl">
              <div className="flex items-center space-x-3">
                <Shield className="h-6 w-6" />
                <span>Start My Free Inspection</span>
                <ArrowRight className="h-6 w-6" />
              </div>
            </button>
          </div>

          <p className="text-gray-600 mt-6 text-lg">
            🔒 No obligation • Free consultation • Licensed professionals
          </p>
        </div>
      </div>
    </section>
  );
}