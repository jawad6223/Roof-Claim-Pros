'use client'

import React, { useState } from 'react';
import { CheckCircle, Share2, Copy, Facebook, Twitter, MessageCircle, Mail, Phone, Shield, Star, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function ThankYouPage() {
  const [copied, setCopied] = useState(false);
  
  const referralLink = "https://project-two-mu-88.vercel.app";
  const shareMessage = "I just got a FREE roof inspection from Roof Claim Pros! They help homeowners get insurance-covered roof replacements with zero out-of-pocket costs. Check them out!";

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(referralLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy link');
    }
  };

  const shareOnFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(referralLink)}&quote=${encodeURIComponent(shareMessage)}`;
    window.open(url, '_blank', 'width=600,height=400');
  };

  const shareOnTwitter = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareMessage)}&url=${encodeURIComponent(referralLink)}`;
    window.open(url, '_blank', 'width=600,height=400');
  };

  const shareViaEmail = () => {
    const subject = "Free Roof Inspection - Roof Claim Pros";
    const body = `${shareMessage}\n\n${referralLink}`;
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const shareViaSMS = () => {
    const message = `${shareMessage} ${referralLink}`;
    window.location.href = `sms:?body=${encodeURIComponent(message)}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 max-w-lg w-full">
        {/* Back to Home Button */}
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center space-x-2 text-[#122E5F] hover:text-indigo-700 font-semibold text-sm rounded-lg transition-all duration-300">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Thank You Message */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h1>
          <p className="text-gray-600">A certified roofing expert will contact you within 15 minutes.</p>
        </div>

        {/* Referral Link */}
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2 text-sm">
            Your Referral Link:
          </label>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={referralLink}
              readOnly
              className="flex-1 px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg text-gray-700 text-sm"
            />
            <button
              onClick={handleCopyLink}
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 text-sm shadow-sm ${
                copied 
                  ? 'bg-green-600 hover:bg-green-700 text-white' 
                  : 'bg-[#122E5F] hover:bg-[#0f2347] text-white'
              }`}
            >
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </div>

        {/* Social Share Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={shareOnFacebook}
            className="flex items-center justify-center space-x-2 bg-[#122E5F] hover:bg-[#0f2347] text-white px-4 py-3 rounded-lg transition-all duration-300 font-semibold text-sm shadow-sm hover:shadow-md"
          >
            <Facebook className="h-4 w-4" />
            <span>Facebook</span>
          </button>

          <button
            onClick={shareOnTwitter}
            className="flex items-center justify-center space-x-2 bg-[#122E5F] hover:bg-[#0f2347] text-white px-4 py-3 rounded-lg transition-all duration-300 font-semibold text-sm shadow-sm hover:shadow-md"
          >
            <Twitter className="h-4 w-4" />
            <span>Twitter</span>
          </button>

          <button
            onClick={shareViaEmail}
            className="flex items-center justify-center space-x-2 bg-[#122E5F] hover:bg-[#0f2347] text-white px-4 py-3 rounded-lg transition-all duration-300 font-semibold text-sm shadow-sm hover:shadow-md"
          >
            <Mail className="h-4 w-4" />
            <span>Email</span>
          </button>

          <button
            onClick={shareViaSMS}
            className="flex items-center justify-center space-x-2 bg-[#122E5F] hover:bg-[#0f2347] text-white px-4 py-3 rounded-lg transition-all duration-300 font-semibold text-sm shadow-sm hover:shadow-md"
          >
            <MessageCircle className="h-4 w-4" />
            <span>SMS</span>
          </button>
        </div>
      </div>
    </div>
  );
}