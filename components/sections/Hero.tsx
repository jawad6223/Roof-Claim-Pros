'use client'
import { Element } from 'react-scroll';
import Image from 'next/image';
import { CheckCircle, Shield, Award, MapPin, Clock, } from 'lucide-react';
import { LeadForm } from './LeadForm';

export default function Hero() {
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
            </div>

            {/* Professional Form */}
            <div className="relative order-2 lg:order-2 w-full">
            <LeadForm/>
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

            </div>
          </div>
        </div>
      </Element>
    </section>
  );
}