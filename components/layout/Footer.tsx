'use client'

import React from 'react';
import { Phone, Shield, Zap, Star, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-[#122E5F] overflow-hidden">
      {/* Professional Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        {/* Subtle accent elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#2563eb]/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-white/5 rounded-full blur-2xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* Logo and Brand */}
            <div className="flex items-center space-x-3 group">
              <div>
                <h3 className="text-2xl font-bold text-white">
                  Roof Claim Pros
                </h3>
                <div className="flex items-center space-x-2 mt-1">
                  <Star className="h-3 w-3 text-[#2563eb] fill-current" />
                  <span className="text-xs text-gray-300 font-medium">Premium Service</span>
                </div>
              </div>
            </div>

            {/* Company Description */}
            <div className="relative">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                <p className="text-gray-300 text-sm leading-relaxed">
                  America's #1 hail damage roofing specialists. Licensed, insured, and trusted by thousands.
                </p>
                <div className="flex items-center space-x-2 mt-3">
                  <Shield className="h-4 w-4 text-[#2563eb]" />
                  <span className="text-[#2563eb] text-xs font-semibold">Licensed & Insured</span>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white mb-4 flex items-center">
              <Zap className="h-5 w-5 text-[#2563eb] mr-2" />
              Services
            </h4>
            
            <div className="space-y-3">
              {[
                'Hail Damage Inspection',
                'Insurance Claim Filing', 
                'Roof Replacement',
                'Emergency Repairs'
              ].map((service, index) => (
                <div
                  key={index}
                  className="group flex items-center space-x-3 p-2 rounded-lg hover:bg-white/5 transition-all duration-300 cursor-pointer"
                >
                  <div className="w-2 h-2 bg-[#2563eb] rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300 text-sm">
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white mb-4 flex items-center">
              {/* <Phone className="h-5 w-5 text-[#2563eb] mr-2" /> */}
              Contact
            </h4>
            
            <div className="space-y-4">
              {/* Phone Number */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                <div className="flex items-center space-x-3 mb-2">
                  <Phone className="h-5 w-5 text-[#2563eb]" />
                  <span className="text-[#2563eb] font-semibold">24/7 Emergency Service</span>
                </div>
                {/* <a 
                  href="tel:1-800-ROOF-PRO"
                  className="text-2xl font-bold text-white hover:text-[#2563eb] transition-colors block"
                >
                  1-800-ROOF-PRO
                </a> */}
                <p className="text-gray-300 text-sm mt-1">
                  Available nationwide for emergency repairs
                </p>
              </div>

              {/* Licensed Info */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Shield className="h-4 w-4 text-[#2563eb]" />
                  <span className="text-[#2563eb] font-semibold text-sm">Licensed & Insured Nationwide</span>
                </div>
                <p className="text-gray-300 text-xs">
                  Serving all 50 states with certified roofing professionals
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="relative">
          {/* Professional divider */}
          <div className="border-t border-white/10 mb-8"></div>
          
          <div className="text-center">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-6 py-3 inline-block">
              <p className="text-gray-400 text-sm">
                © 2024 Roof Claim Pros. All rights reserved. Licensed, bonded, and insured.
              </p>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex justify-center items-center space-x-6 mt-6">
              <div className="flex items-center space-x-2">
                <Star className="h-4 w-4 text-[#2563eb] fill-current" />
                <span className="text-gray-400 text-xs">A+ BBB Rating</span>
              </div>
              <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-[#2563eb]" />
                <span className="text-gray-400 text-xs">Fully Insured</span>
              </div>
              <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
              <div className="flex items-center space-x-2">
                <Sparkles className="h-4 w-4 text-[#2563eb]" />
                <span className="text-gray-400 text-xs">99.7% Success Rate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}