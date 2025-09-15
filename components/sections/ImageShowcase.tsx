'use client'

import React from 'react';
import { Shield, Award, CheckCircle, Star, Sparkles } from 'lucide-react';

export default function ImageShowcase() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-400/30 px-6 py-3 rounded-full mb-6">
            <Sparkles className="mr-2 h-5 w-5 text-cyan-400" />
            <span className="text-cyan-400 font-semibold">PROFESSIONAL SHOWCASE</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">
              See Our Work in Action
            </span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Professional roof damage assessment and insurance claim processing
            <span className="text-cyan-400 font-semibold"> with guaranteed results</span>
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="relative group">
            {/* Glowing border effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-3xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            
            <div className="relative bg-slate-800/90 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-slate-600/50">
              <img
                src="https://images.pexels.com/photos/8293778/pexels-photo-8293778.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional roof inspection and damage assessment"
                className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
              
              {/* Overlay Badge */}
              <div className="absolute top-6 right-6">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl blur opacity-40"></div>
                  <div className="relative bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2 rounded-2xl font-bold text-sm shadow-lg">
                    <div className="flex items-center space-x-2">
                      <Shield className="h-4 w-4" />
                      <span>Certified</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Info */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 border border-white/50">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-slate-800 font-bold text-lg">Expert Assessment</div>
                      <div className="text-slate-600 text-sm">Professional damage evaluation</div>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-amber-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Features */}
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur opacity-20"></div>
              <div className="relative bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-xl rounded-3xl p-8 border border-blue-400/30 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-6">Why Choose Our Service?</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                      <CheckCircle className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">99.7% Success Rate</div>
                      <div className="text-slate-300 text-sm">Insurance claims approved</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Licensed & Insured</div>
                      <div className="text-slate-300 text-sm">All 50 states coverage</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Expert Team</div>
                      <div className="text-slate-300 text-sm">15+ years experience</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl flex items-center justify-center">
                      <Star className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Premium Service</div>
                      <div className="text-slate-300 text-sm">Zero out-of-pocket cost</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="relative inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl blur opacity-30 animate-pulse"></div>
            <button className="relative bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white font-bold py-6 px-12 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl text-xl">
              <div className="flex items-center space-x-3">
                <Shield className="h-6 w-6" />
                <span>Get Your Free Assessment</span>
              </div>
            </button>
          </div>
          
          <p className="text-slate-400 mt-6 text-lg">
            🔒 No obligation • Professional evaluation • Licensed experts
          </p>
        </div>
      </div>
    </section>
  );
}