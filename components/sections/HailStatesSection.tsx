'use client'

import React from 'react';
import Image from 'next/image';
import { Sparkles, } from 'lucide-react';

const hailProneStates = [
  { name: 'Texas', color: 'blue' },
  { name: 'Colorado', color: 'blue' },
  { name: 'Nebraska', color: 'blue' },
  { name: 'Kansas', color: 'blue' },
  { name: 'Oklahoma', color: 'blue' },
  { name: 'Illinois', color: 'blue' },
  { name: 'Missouri', color: 'blue' },
  { name: 'Minnesota', color: 'blue' },
  { name: 'Georgia', color: 'blue' },
  { name: 'South Carolina', color: 'blue' },
  { name: 'Ohio', color: 'blue' }
];

export default function HailStatesSection() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-purple-200/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-200/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-[#2563eb]/10 to-[#122E5F]/10 backdrop-blur-sm border border-[#2563eb]/20 px-6 py-3 rounded-full mb-6">
            <Sparkles className="mr-2 h-5 w-5 text-[#2563eb]" />
            <span className="text-[#122E5F] font-semibold">NATIONWIDE COVERAGE</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-slate-800">Serving Hail-Prone States</span>
            <br />
            <span className="bg-gradient-to-r from-[#2563eb] via-[#122E5F] to-[#2563eb] bg-clip-text text-transparent">
              Nationwide
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-12">
            We specialize in the areas hit hardest by hail storms
          </p>
        </div>

        {/* States Grid */}
        {/* USA Map Section */}
        <div className="flex justify-center">
          <div className="relative group">
            <Image
              src="/usa-map.png"
              alt="USA Map"
              width={800}
              height={400}
              // className="rounded-xl shadow-lg"
              priority
            />
          </div>
        </div>

        {/* Simple Call to Action */}
        {/* <div className="text-center">
          <p className="text-xl text-slate-600">
            Don't see your state? Call us - we're expanding rapidly!
          </p>
        </div> */}
      </div>
    </section>
  );
}