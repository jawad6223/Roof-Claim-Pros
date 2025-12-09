"use client";

import React from "react";
import { City } from "@/types/AuthType";
import { whyChooseUs } from "@/data/cities";
import { Home, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

interface CityPageProps {
  city: City;
}

const CityPage: React.FC<CityPageProps> = ({ city }) => {
  const router = useRouter();
  const title = `Free Roof Replacement Quotes in ${city.name}, ${city.state} After Storm`;
  const metaDescription = `Get a free roof replacement quote in ${city.name}, ${city.state} after storm damage. Reliable, fast, and affordable roofing services.`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#122E5F] via-[#1a3f7a] to-[#122E5F]">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <Home className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white">
                {city.name}, {city.state}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-10">
              Free Roof Replacement Quotes in{" "}
              <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                {city.name}, {city.state}
              </span>{" "}
              After Storm
            </h1>
            <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              {metaDescription}
            </p>
            <div className="flex justify-center items-center">
              <button
                onClick={() => router.push("/")}
                className="flex items-center gap-2 bg-white text-[#122E5F] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                Get Free Quote Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center ">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Expert Roof Replacement Services in {city.name}, {city.state}
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                {city.description} When severe weather strikes {city.name},{" "}
                {city.state}, your roof is often the first line of defense
                protecting your home and family. Storm damage can be extensive,
                leaving your property vulnerable to water leaks, structural
                issues, and further deterioration. Our team specializes in
                providing comprehensive roof replacement services throughout{" "}
                {city.name}, helping homeowners recover quickly after storms,
                hurricanes, high winds, and hail damage.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#122E5F] to-[#1a3f7a] rounded-2xl transform rotate-3 opacity-20"></div>
            <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <div className="space-y-4">
                {whyChooseUs.map((item) => (
                  <div key={item.id} className="flex items-start gap-4">
                    <div className="p-2 bg-blue-50 rounded-lg">
                      <item.icon className="w-6 h-6 text-[#122E5F]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <p className="text-lg text-gray-600 leading-relaxed">
            After a storm in {city.name}, immediate action is crucial to prevent
            additional damage to your property. Our licensed and insured roofing
            professionals conduct thorough inspections to identify all areas of
            concern, from missing shingles and damaged flashing to structural
            compromises that may not be immediately visible. We work directly
            with your insurance company to ensure your claim is properly
            documented and processed, maximizing your coverage while minimizing
            your out-of-pocket expenses. With years of experience serving
            homeowners in {city.name}, {city.state}, we understand the local
            building codes, weather patterns, and insurance requirements
            specific to your area.
          </p>
        </div>
      </section>
    </div>
  );
};

export default CityPage;
