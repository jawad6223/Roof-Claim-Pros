'use client'

import React, { useState, useEffect } from 'react';
import { Star, Users, DollarSign, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "Dallas, TX",
    rating: 5,
    text: "I had no idea my insurance would cover my entire roof! Got a brand new roof for just my $1,000 deductible.",
    saved: "$18,500",
    avatar: "SJ"
  },
  {
    id: 2,
    name: "Mike Rodriguez",
    location: "Denver, CO",
    rating: 5,
    text: "The process was so easy. They handled everything with my insurance company. Highly recommend!",
    saved: "$22,000",
    avatar: "MR"
  },
  {
    id: 3,
    name: "Lisa Chen",
    location: "Kansas City, KS",
    rating: 5,
    text: "After the hail storm last year, I thought I'd have to pay thousands. Insurance covered it all!",
    saved: "$15,800",
    avatar: "LC"
  },
  {
    id: 4,
    name: "David Thompson",
    location: "Austin, TX",
    rating: 5,
    text: "Amazing service! They found damage I didn't even know existed. Got a complete roof replacement covered.",
    saved: "$24,300",
    avatar: "DT"
  },
  {
    id: 5,
    name: "Jennifer Martinez",
    location: "Phoenix, AZ",
    rating: 5,
    text: "Professional team, seamless process. My insurance claim was approved in just 3 days!",
    saved: "$19,700",
    avatar: "JM"
  },
  {
    id: 6,
    name: "Robert Kim",
    location: "Atlanta, GA",
    rating: 5,
    text: "Best decision ever! They handled all the paperwork and I got a premium roof upgrade at no cost.",
    saved: "$21,200",
    avatar: "RK"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-rotate testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.ceil(testimonials.length / 3)) % Math.ceil(testimonials.length / 3));
    setIsAutoPlaying(false);
  };

  const getVisibleTestimonials = () => {
    const start = currentIndex * 3;
    return testimonials.slice(start, start + 3);
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
            <span className="text-white font-semibold">CUSTOMER SUCCESS STORIES</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900">Join 10,000+ Homeowners</span>
            <br />
            <span className="text-[#2563eb]">
              Who Got New Roofs for Free
            </span>
          </h2>

          {/* Compact Stats Bar */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center space-x-2 bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="relative">
                <Star className="h-5 w-5 text-[#2563eb]" />
              </div>
              <div>
                <div className="text-xl font-bold text-[#2563eb]">4.9/5</div>
                <div className="text-sm text-gray-600">Customer Rating</div>
              </div>
            </div>

            <div className="flex items-center space-x-2 bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="relative">
                <Users className="h-5 w-5 text-[#2563eb]" />
              </div>
              <div>
                <div className="text-xl font-bold text-[#2563eb]">10,000+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
            </div>

            <div className="flex items-center space-x-2 bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="relative">
                <DollarSign className="h-5 w-5 text-[#2563eb]" />
              </div>
              <div>
                <div className="text-xl font-bold text-[#2563eb]">$180M+</div>
                <div className="text-sm text-gray-600">Claims Processed</div>
              </div>
            </div>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-0 md:px-8 justify-items-center">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div
          key={testimonial.id}
          className="group relative transform transition-all duration-500 hover:scale-105 w-full max-w-md"
          style={{
            animationDelay: `${index * 200}ms`
          }}
              >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 h-80 flex flex-col">
            {/* Star Rating */}
            <div className="flex items-center mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star
            key={i}
            className="h-5 w-5 text-[#2563eb] fill-current"
                />
              ))}
            </div>

            {/* Testimonial Text - Fixed Height */}
            <div className="min-h-[120px] flex items-start mb-6 flex-grow">
              <blockquote className="text-gray-700 text-lg leading-relaxed">
                "{testimonial.text}"
              </blockquote>
            </div>

            {/* Customer Info */}
            <div className="flex items-center justify-between mt-auto">
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

              {/* Savings Badge - Reduced Height */}
              <div className="relative">
                <div className="bg-[#122E5F] text-white px-3 py-1.5 rounded-full font-bold text-sm shadow-lg whitespace-nowrap">
            Saved {testimonial.saved}
                </div>
              </div>
            </div>
          </div>
              </div>
            ))}
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-12 space-x-3">
            {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, index) => (
              <button
          key={index}
          onClick={() => {
            setCurrentIndex(index);
            setIsAutoPlaying(false);
          }}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            index === currentIndex
              ? 'bg-[#2563eb] w-8'
              : 'bg-gray-300 hover:bg-gray-400'
          }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}