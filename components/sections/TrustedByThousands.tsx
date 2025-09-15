"use client";
import React from 'react';
import Image from 'next/image';
import { scroller } from 'react-scroll';
import { Shield, Award, Users, CheckCircle, Star, Clock, TrendingUp } from 'lucide-react';

const trustFeatures = [
  {
    id: 1,
    icon: Shield,
    text: "Licensed and insured in all 50 states",
    color: "emerald"
  },
  {
    id: 2,
    icon: Clock,
    text: "Over 15 years of roofing experience",
    color: "blue"
  },
  {
    id: 3,
    icon: Award,
    text: "A+ Better Business Bureau rating",
    color: "amber"
  },
  {
    id: 4,
    icon: TrendingUp,
    text: "Million-dollar liability insurance",
    color: "purple"
  }
];

const stats = [
  {
    id: 1,
    number: "10,000+",
    label: "Happy Customers",
    icon: Users
  },
  {
    id: 2,
    number: "99.7%",
    label: "Approval Rate",
    icon: CheckCircle
  },
  {
    id: 3,
    number: "4.9/5",
    label: "Customer Rating",
    icon: Star
  },
  {
    id: 4,
    number: "$180M+",
    label: "Claims Processed",
    icon: TrendingUp
  }
];

export default function TrustedByThousands() {
  return (
    <section className="relative py-20 bg-gray-50 overflow-hidden">
      {/* Professional Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/8293778/pexels-photo-8293778.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Professional roofing team"
          className="w-full h-full object-cover opacity-5"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white border border-gray-200 px-6 py-3 rounded-full mb-6 shadow-sm">
            <Award className="mr-2 h-5 w-5 text-[#2563eb]" />
            <span className="text-[#122E5F] font-semibold">TRUSTED PROFESSIONALS</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-gray-900">Trusted by Thousands</span>
            <br />
            <span className="text-[#2563eb]">of Homeowners</span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our certified roofing professionals have helped over
            <span className="text-[#2563eb] font-semibold"> 10,000 homeowners</span> get their insurance claims approved and roofs replaced at
            <span className="text-[#122E5F] font-semibold"> no out-of-pocket cost</span>.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left: Trust Features */}
          <div className="space-y-6">
            {trustFeatures.map((feature, index) => {
              const IconComponent = feature.icon;

              return (
                <div
                  key={feature.id}
                  className="group flex items-center space-x-6 transform transition-all duration-300 hover:scale-105"
                  style={{
                    animationDelay: `${index * 200}ms`
                  }}
                >
                  {/* Icon Container */}
                  <div className="relative flex-shrink-0">
                    <div className="w-16 h-16 bg-[#122E5F] rounded-2xl flex items-center justify-center shadow-lg transform group-hover:rotate-6 transition-transform duration-300">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="relative">
                    <div className="flex items-center space-x-3 bg-white border border-gray-200 rounded-xl px-6 py-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <CheckCircle className="h-6 w-6 text-[#2563eb] flex-shrink-0" />
                      <span className="text-gray-700 text-lg font-semibold">
                        {feature.text}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Professional Team Image */}
          <div className="relative group">
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-200">
              {/* Main Image */}
              <div className="relative h-96 overflow-hidden">
                <Image
                  src="/process-4.png"
                  alt="Professional roofing service and installation"
                  width={800}
                  height={384}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>

                {/* Overlay Badge */}
                <div className="absolute top-6 right-6">
                  <div className="bg-[#122E5F] text-white px-6 py-3 rounded-2xl font-bold text-lg shadow-lg">
                    <div className="flex items-center space-x-2">
                      <Users className="h-5 w-5" />
                      <span>10,000+</span>
                    </div>
                    <div className="text-xs text-white/80 mt-1">Happy Customers</div>
                  </div>
                </div>

                {/* Bottom Info */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 border border-white/50">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-slate-800 font-bold text-lg">Professional Roofing Service</div>
                        <div className="text-slate-600 text-sm">Expert installation & repair</div>
                      </div>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Stats Section */}
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;

              return (
                <div
                  key={stat.id}
                  className="group text-center transform transition-all duration-300 hover:scale-110"
                  style={{
                    animationDelay: `${index * 150}ms`
                  }}
                >
                  {/* Icon */}
                  <div className="relative inline-block mb-4">
                    <div className="w-16 h-16 bg-[#122E5F] rounded-2xl flex items-center justify-center shadow-lg mx-auto transform group-hover:rotate-12 transition-transform duration-300">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  {/* Number */}
                  <div className="text-3xl md:text-4xl font-bold text-[#2563eb] mb-2">
                    {stat.number}
                  </div>

                  {/* Label */}
                  <div className="text-gray-600 font-semibold text-sm">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-3">
              <Shield className="h-6 w-6 text-[#2563eb] mr-2" />
              <span className="text-[#122E5F] font-bold text-lg">100% Satisfaction Guaranteed</span>
              <Shield className="h-6 w-6 text-[#2563eb] ml-2" />
            </div>
            <p className="text-gray-600 text-lg mb-6">
              Join thousands of satisfied homeowners who got their roofs replaced for free
            </p>
            <button
              onClick={() =>
                scroller.scrollTo('free-inspection-form', {
                  duration: 800,
                  delay: 0,
                  smooth: 'easeInOutQuart'
                })
              }
              className="bg-[#122E5F] hover:bg-[#0f2347] text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get My Free Inspection
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}