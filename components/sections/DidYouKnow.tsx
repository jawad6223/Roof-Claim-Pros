'use client'

import React from 'react';
import { scroller } from 'react-scroll';
import { AlertTriangle, Shield, Clock, Award, Eye, CheckCircle } from 'lucide-react';

const knowledgeCards = [
  {
    id: 1,
    icon: AlertTriangle,
    title: "Hidden Damage",
    description: "Hail damage isn't always visible but can cause leaks and structural issues over time. Most customers don't even realize they have damage.",
    stat: "85%",
    statLabel: "Damage Goes Unnoticed"
  },
  {
    id: 2,
    icon: Shield,
    title: "Insurance Coverage",
    description: "Most policies cover 100% of hail damage repairs after your deductible. Put your insurance to work and get a new roof!",
    stat: "100%",
    statLabel: "Coverage Available"
  },
  {
    id: 3,
    icon: Clock,
    title: "Time Limits",
    description: "You only have 1 year from the storm date to file your insurance claim. Don't wait until it's too late.",
    stat: "1 Year",
    statLabel: "Filing Deadline"
  },
  {
    id: 4,
    icon: Award,
    title: "Expert Help",
    description: "Professional claim assistance increases approval rates by 300%. Let our experts handle your claim.",
    stat: "300%",
    statLabel: "Higher Success Rate"
  }
];

export default function DidYouKnow() {
  return (
    <section className="relative py-20 bg-gray-50 overflow-hidden">
      {/* Professional Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Professional roofing background"
          className="w-full h-full object-cover opacity-5"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white border border-gray-200 px-6 py-3 rounded-full mb-6 shadow-sm">
            <Eye className="mr-2 h-5 w-5 text-[#2563eb]" />
            <span className="text-[#122E5F] font-semibold">INSIDER KNOWLEDGE</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            Did You Know?
          </h2>

          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Most homeowners don't realize their insurance covers hail damage
            <span className="text-[#2563eb] font-semibold"> - giving them a new roof!</span>
          </p>
        </div>

        {/* Knowledge Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {knowledgeCards.map((card, index) => {
            const IconComponent = card.icon;

            return (
              <div
                key={card.id}
                className="group relative transform transition-all duration-300 hover:scale-105"
                style={{
                  animationDelay: `${index * 150}ms`
                }}
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 h-80 flex flex-col overflow-hidden">
                  {/* Icon Section */}
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className="w-16 h-16 bg-[#122E5F] rounded-2xl flex items-center justify-center shadow-lg">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 text-center mb-4 px-2">
                    {card.title}
                  </h3>

                  {/* Description - Same Height for All Cards */}
                  <div className="flex-grow flex items-center mb-4 px-2">
                    <p
                      className="text-gray-600 text-center leading-relaxed text-sm overflow-y-auto scrollbar-hide"
                      style={{ maxHeight: "64px", width: "100%" }}
                    >
                      {card.description}
                    </p>
                  </div>

                  {/* Stat Section */}
                  <div className="text-center mt-auto pt-4 md:pt-0 border-t border-gray-100">
                    <div className="text-3xl font-bold text-[#2563eb]">
                      {card.stat}
                    </div>
                    <div className="text-xs text-gray-500 font-medium leading-tight">
                      {card.statLabel}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <CheckCircle className="h-6 w-6 text-[#2563eb] mr-2" />
              <span className="text-[#122E5F] font-bold text-xl">Don't Wait - Act Now!</span>
              <CheckCircle className="h-6 w-6 text-[#2563eb] ml-2" />
            </div>
            <p className="text-gray-600 text-lg mb-6">
              Insurance claims must be filed within 1 year of storm damage
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
              Get My Free Inspection Now
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
