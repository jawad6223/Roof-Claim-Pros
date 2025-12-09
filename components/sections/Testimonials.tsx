"use client";

import React, { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials, customrStats } from "@/data/sectionsData";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-rotate testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex(
        (prev) => (prev + 1) % Math.ceil(testimonials.length / 3)
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + Math.ceil(testimonials.length / 3)) %
        Math.ceil(testimonials.length / 3)
    );
    setIsAutoPlaying(false);
  };

  const getVisibleTestimonials = () => {
    const start = currentIndex * 3;
    return testimonials.slice(start, start + 3);
  };

  const getRating = (rating: number) => {
    return Array.from({ length: rating }, (_, i) => (
      <Star key={i} className="h-5 w-5 text-[#2563eb] fill-current" />
    ));
  };

  return (
    <section className="relative py-20 bg-gray-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Roofing background"
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-[#122E5F] px-6 py-3 rounded-full mb-6">
            <Star className="mr-2 h-5 w-5 text-white" />
            <span className="text-white font-semibold">
              CUSTOMER SUCCESS STORIES
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900">Join 10,000+ Homeowners</span>
            <br />
            <span className="text-[#2563eb]">Who Got New Roofs for Free</span>
          </h2>

          {/* Compact Stats Bar */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {customrStats.map((stat) => (
              <div className="flex items-center space-x-2 bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="relative">
                  <stat.icon className="h-5 w-5 text-[#2563eb]" />
                </div>
                <div>
                  <div className="text-xl font-bold text-[#2563eb]">
                    {stat.title}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-white hover:bg-gray-50 border border-gray-200 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>

          <button
            onClick={nextSlide}
            className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-white hover:bg-gray-50 border border-gray-200 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-0 md:px-14 justify-items-center">
          {getVisibleTestimonials().map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="group relative transform transition-all duration-500 hover:scale-105 w-full max-w-sm"
                style={{
                  animationDelay: `${index * 200}ms`,
                }}
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 h-72 flex flex-col">
                  {/* Star Rating */}
                  <div className="flex items-center mb-4">
                    {getRating(testimonial.rating)}
                  </div>

                  {/* Testimonial Text - Fixed Height */}
                  <div className="flex items-start flex-grow">
                    <blockquote className="text-gray-700 text-lg leading-relaxed">
                      "{testimonial.text}"
                    </blockquote>
                  </div>

                  {/* Customer Info */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      {/* Avatar */}
                      <div className="relative">
                        <div className="w-12 h-12 bg-[#122E5F] rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {testimonial.avatar}
                        </div>
                      </div>

                      <div>
                        <div className="font-bold text-gray-900 text-lg">
                          {testimonial.name}
                        </div>
                        <div className="text-gray-500 text-sm">
                          {testimonial.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-12 space-x-3">
            {Array.from({ length: Math.ceil(testimonials.length / 3) }).map(
              (_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsAutoPlaying(false);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-[#2563eb] w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
