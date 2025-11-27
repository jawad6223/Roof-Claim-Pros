"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Loader() {
  const [isVisible, setIsVisible] = useState(true);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setOpacity(0);
    }, 1500);

    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center transition-opacity duration-500"
      style={{ opacity }}
    >
      <div className="relative mb-8">
        <div className="w-24 h-24 border-4 border-[#122E5F]/10 border-t-[#122E5F] border-r-[#2563eb] rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg">
            <Image src="/roofIcon.png" alt="Logo" width={100} height={100} />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center space-y-4">
        <div className="flex space-x-2">
          <div
            className="w-3 h-3 bg-[#122E5F] rounded-full animate-bounce"
            style={{ animationDelay: "0s" }}
          ></div>
          <div
            className="w-3 h-3 bg-[#2563eb] rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></div>
          <div
            className="w-3 h-3 bg-[#122E5F] rounded-full animate-bounce"
            style={{ animationDelay: "0.4s" }}
          ></div>
        </div>
        <p className="text-[#122E5F] font-semibold text-sm animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
}
