"use client";

import React from "react";
import { DollarSign, Clock, Award, CheckCircle } from "lucide-react";
import { moneyOnTableCards } from '@/data/sectionsData';

export default function MoneyOnTableSection() {
  return (
    <section className="relative py-16 bg-gradient-to-br from-slate-800 via-slate-900 to-gray-900 overflow-hidden">
      {/* Professional Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        {/* Subtle accent elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#2563eb]/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-[#122E5F]/5 rounded-full blur-2xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full mb-6">
            <DollarSign className="mr-2 h-5 w-5 text-[#2563eb]" />
            <span className="text-white font-semibold">DON'T MISS OUT</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white">
            Don't Leave Money on the Table
          </h2>

          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Your insurance company is required to pay for storm damage.
            <span className="text-[#2563eb] font-semibold">
              {" "}
              Let us help you get what you're owed.
            </span>
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {moneyOnTableCards.map((card) => (
            <div className="group text-center transform transition-all duration-300 hover:scale-105 flex">
              <div className="bg-white rounded-2xl p-12 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 flex flex-col flex-1 justify-between min-h-[420px]">
                {/* Icon */}
                <div className="relative inline-block mb-6">
                  <div className="w-16 h-16 bg-[#122E5F] rounded-2xl flex items-center justify-center shadow-lg mx-auto transform group-hover:rotate-6 transition-transform duration-300">
                    <card.icon className="h-8 w-8 text-white" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {card.description}
                </p>

                {/* Feature list */}
                <div className="mt-6 space-y-2">
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-[#2563eb]" />
                    <span>{card.features[0]}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-[#2563eb]" />
                    <span>{card.features[1]}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="mb-6">
              <button className="bg-[#122E5F] hover:bg-[#0f2347] text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg text-lg">
                <div className="flex items-center space-x-3">
                  <span>Free Inspection for Immediate Service</span>
                </div>
              </button>
            </div>

            {/* Guarantee */}
            <p className="text-gray-300 text-base mb-4">
              100% Risk-Free Guarantee - If we can't help you get your insurance
              claim approved, you owe us absolutely nothing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
