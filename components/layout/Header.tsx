'use client'

import React, { useState } from 'react';
import { scroller } from 'react-scroll';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import LoginModal from '@/components/auth/LoginModal';
import RegisterModal from '@/components/auth/RegisterModal';

export default function Header() {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'login' | 'register'>('login');

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const openModal = (mode: 'login' | 'register') => {
    setModalMode(mode);
    if (mode === 'login') {
      setIsLoginModalOpen(true);
    } else {
      setIsRegisterModalOpen(true);
    }
  };

  const closeModals = () => {
    setIsLoginModalOpen(false);
    setIsRegisterModalOpen(false);
  };

  const switchToRegister = () => {
    setIsLoginModalOpen(false);
    setIsRegisterModalOpen(true);
  };

  const switchToLogin = () => {
    setIsRegisterModalOpen(false);
    setIsLoginModalOpen(true);
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between h-16">

            <div className="flex items-center space-x-4">

              <div className="flex items-center md:space-x-4">
                <div className="relative w-40 h-40 mt-2 sm:w-40 sm:h-40 flex-shrink-0 flex items-center justify-center">
                  <Image
                    onClick={() => router.push('/')}
                    src="/roofing-logo.png"
                    alt="Logo"
                    fill
                    className="object-contain cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Desktop Navigation Items */}
            <div className="hidden md:flex items-center space-x-4">
            <button
                onClick={() => window.open(`${process.env.NEXT_PUBLIC_CONTRACTOR_URL}`, '_blank')}
                className="flex items-center space-x-2 bg-[#122E5F] hover:bg-transparent hover:text-[#122E5F] border hover:border-[#122E5F] text-white px-6 py-2.5 rounded-lg transition-all duration-300 font-medium shadow-sm"
              >
                <span className="text-sm font-semibold">Contractor</span>
              </button>
            <button
                onClick={() =>
                  scroller.scrollTo('how-it-works', {
                    duration: 800,
                    delay: 0,
                    smooth: 'easeInOutQuart'
                  })
                }
                className="flex items-center space-x-2 border border-[#122E5F] hover:bg-[#0f2347] hover:text-white text-[#122E5F] px-6 py-2.5 rounded-lg transition-all duration-300 font-medium shadow-sm"
              >
                <span className="text-sm font-semibold">How it works</span>
              </button>
              <button
                onClick={() =>
                  scroller.scrollTo('free-inspection-form', {
                    duration: 800,
                    delay: 0,
                    smooth: 'easeInOutQuart'
                  })
                }
                className="flex items-center space-x-2 bg-[#122E5F] hover:bg-transparent hover:text-[#122E5F] border hover:border-[#122E5F] text-white px-6 py-2.5 rounded-lg transition-all duration-300 font-medium shadow-sm"
              >
                <span className="text-sm font-semibold">Apply Now</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-gray-600 hover:text-blue-600 focus:outline-none p-2 rounded-lg transition-colors duration-200"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden pb-4 bg-white border-t border-gray-100">
              <div className="px-4 pt-4 flex flex-col space-y-4">
              <button
                onClick={() => {
                  scroller.scrollTo('how-it-works', {
                    duration: 800,
                    delay: 0,
                    smooth: 'easeInOutQuart'
                  });
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center space-x-2 border border-[#122E5F] hover:bg-[#0f2347] hover:text-white text-[#122E5F] px-6 py-2.5 rounded-lg transition-all duration-300 font-medium shadow-sm"
              >
                <span className="text-sm font-semibold">How it works</span>
              </button>
              <button
                onClick={() => {
                  scroller.scrollTo('free-inspection-form', {
                    duration: 800,
                    delay: 0,
                    smooth: 'easeInOutQuart'
                  });
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center space-x-2 bg-[#122E5F] hover:bg-transparent hover:text-[#122E5F] border hover:border-[#122E5F] text-white px-6 py-2.5 rounded-lg transition-all duration-300 font-medium shadow-sm"
              >
                <span className="text-sm font-semibold">Apply Now</span>
              </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Modals */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={closeModals}
        onSwitchToRegister={switchToRegister}
      />
      <RegisterModal
        isOpen={isRegisterModalOpen}
        onClose={closeModals}
        onSwitchToLogin={switchToLogin}
      />
    </>
  );
}
