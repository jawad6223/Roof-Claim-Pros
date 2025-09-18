'use client'

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Users, Eye, Mail, Phone, MapPin, LogOut, TrendingUp, DollarSign, Clock, Shield, User, CreditCard, Lock, Building2, } from 'lucide-react';

interface Lead {
  id: string;
  name: string;
  address: string;
  email: string;
  phone: string;
  zipCode: string;
  status: 'owned' | 'available';
  price?: number;
  initials: string;
}

export default function ContractorDashboard() {
  const router = useRouter();
  const [username, setUsername] = useState('');

  useEffect(() => {
    // Check if user is logged in
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (!loggedInUser) {
      router.push('/');
      return;
    }
    setUsername(loggedInUser);
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    router.push('/');
  };

  const myLeads: Lead[] = [
    {
      id: '1',
      name: 'John Smith',
      address: '123 Main St, Dallas, TX 75201',
      email: 'john@email.com',
      phone: '555-0101',
      zipCode: '75201',
      status: 'owned',
      initials: 'JS'
    },
    {
      id: '2',
      name: 'Jane Doe',
      address: '456 Oak Ave, Denver, CO 80202',
      email: 'jane@email.com',
      phone: '555-0102',
      zipCode: '80202',
      status: 'owned',
      initials: 'JD'
    },
    {
      id: '3',
      name: 'Michael Johnson',
      address: '789 Pine St, Austin, TX 78701',
      email: 'michael@email.com',
      phone: '555-0103',
      zipCode: '78701',
      status: 'owned',
      initials: 'MJ'
    }
  ];

  const availableLeads: Lead[] = [
    {
      id: '4',
      name: 'B.J.',
      address: 'Kansas City, KS',
      email: 'hidden@email.com',
      phone: 'hidden',
      zipCode: '66101',
      status: 'available',
      price: 100,
      initials: 'BJ'
    },
    {
      id: '5',
      name: 'A.B.',
      address: 'Oklahoma City, OK',
      email: 'hidden@email.com',
      phone: 'hidden',
      zipCode: '78701',
      status: 'available',
      price: 100,
      initials: 'AB'
    },
    {
      id: '6',
      name: 'C.D.',
      address: 'Houston, TX',
      email: 'hidden@email.com',
      phone: 'hidden',
      zipCode: '77001',
      status: 'available',
      price: 150,
      initials: 'CD'
    }
  ];

  const stats = [
    {
      label: 'Total Leads',
      value: myLeads.length,
      icon: Users,
      bgColor: 'bg-blue-50',
      iconColor: 'text-[#2563eb]'
    },
    {
      label: 'Success Rate',
      value: '94%',
      icon: TrendingUp,
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      label: 'Revenue',
      value: '$12.5K',
      icon: DollarSign,
      bgColor: 'bg-yellow-50',
      iconColor: 'text-yellow-600'
    },
    {
      label: 'Response Time',
      value: '2.3h',
      icon: Clock,
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    }
  ];

  const handlePurchaseLead = (leadId: string) => {
    alert(`🎉 Lead purchased successfully! Contact details are now available.`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Logo and Brand */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#122E5F] rounded-lg flex items-center justify-center">
                <Building2 className="h-3 w-3 sm:h-5 sm:w-5 text-white" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-gray-900">
                  Contractor CRM
                </h1>
                <p className="text-xs text-gray-500">Professional Dashboard</p>
              </div>
              <div className="sm:hidden">
                <h1 className="text-lg font-bold text-gray-900">CRM</h1>
              </div>
            </div>

            {/* User Info and Logout */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="hidden md:flex items-center space-x-3 bg-gray-50 rounded-lg px-4 py-2 border border-gray-200">
                <div className="w-8 h-8 bg-[#122E5F] rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  {username.charAt(0).toUpperCase()}
                </div>
                <div>
                  <div className="text-gray-900 font-medium text-sm">Welcome, {username}</div>
                  <div className="text-[#2563eb] text-xs font-medium">Premium Contractor</div>
                </div>
              </div>
              
              {/* Mobile user avatar */}
              <div className="md:hidden w-8 h-8 bg-[#122E5F] rounded-full flex items-center justify-center text-white font-semibold text-sm">
                {username.charAt(0).toUpperCase()}
              </div>

              <button
                onClick={handleLogout}
                className="flex items-center space-x-1 sm:space-x-2 bg-[#122E5F] hover:bg-[#0f2347] text-white px-2 sm:px-4 py-2 rounded-lg transition-colors duration-200 text-xs sm:text-sm font-medium"
              >
                <LogOut className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-6 sm:mb-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-3 sm:p-6 hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-xs sm:text-sm font-medium">{stat.label}</p>
                    <p className="text-lg sm:text-3xl font-bold text-[#122E5F] mt-1">
                      {stat.value}
                    </p>
                  </div>
                  <div className={`w-8 h-8 sm:w-12 sm:h-12 ${stat.bgColor} rounded-xl flex items-center justify-center`}>
                    <IconComponent className={`h-4 w-4 sm:h-6 sm:w-6 ${stat.iconColor}`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* My Leads Section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            {/* Header */}
            <div className="bg-gray-50 border-b border-gray-200 px-4 sm:px-6 py-3 sm:py-4 rounded-t-xl">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-8 h-8 bg-[#2563eb] rounded-lg flex items-center justify-center">
                  <Users className="h-4 w-4 text-white" />
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                  My Leads ({myLeads.length})
                </h2>
              </div>
            </div>

            {/* Leads List */}
            <div className="p-4 sm:p-6 space-y-3 sm:space-y-4 max-h-80 sm:max-h-96 overflow-y-auto">
              {myLeads.map((lead) => (
                <div
                  key={lead.id}
                  className="border border-gray-200 rounded-xl p-3 sm:p-4 hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between space-y-3 sm:space-y-0">
                    <div className="flex items-start space-x-3 sm:space-x-4 flex-1">
                      {/* Avatar */}
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#122E5F] rounded-xl flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                        {lead.initials}
                      </div>

                      {/* Lead Info */}
                      <div className="flex-1">
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">{lead.name}</h3>
                        <div className="space-y-1 text-sm sm:text-base">
                          <div className="flex items-center space-x-2 text-gray-600">
                            <MapPin className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                            <span className="text-xs sm:text-sm break-all">{lead.address}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-gray-600">
                            <Mail className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                            <span className="text-xs sm:text-sm break-all">{lead.email}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-gray-600">
                            <Phone className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                            <span className="text-xs sm:text-sm">{lead.phone}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Status Badge */}
                    <div className="bg-green-50 text-green-700 border border-green-200 px-3 py-1 rounded-full font-medium text-xs sm:text-sm self-start sm:self-auto">
                      Owned
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Available Leads Section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            {/* Header */}
            <div className="bg-gray-50 border-b border-gray-200 px-4 sm:px-6 py-3 sm:py-4 rounded-t-xl">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-8 h-8 bg-[#122E5F] rounded-lg flex items-center justify-center">
                  <Eye className="h-4 w-4 text-white" />
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                  Available Leads ({availableLeads.length})
                </h2>
              </div>
            </div>

            {/* Available Leads List */}
            <div className="p-4 sm:p-6 space-y-3 sm:space-y-4 max-h-80 sm:max-h-96 overflow-y-auto">
              {availableLeads.map((lead) => (
                <div
                  key={lead.id}
                  className="border border-gray-200 rounded-xl p-3 sm:p-4 hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between space-y-3 sm:space-y-0">
                    <div className="flex items-start space-x-3 sm:space-x-4 flex-1">
                      {/* Avatar */}
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#2563eb] rounded-xl flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                        {lead.initials}
                      </div>

                      {/* Lead Info */}
                      <div className="flex-1">
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">{lead.name}</h3>
                        <div className="space-y-1 text-sm sm:text-base">
                          <div className="flex items-center space-x-2 text-gray-600">
                            <MapPin className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                            <span className="text-xs sm:text-sm">ZIP: {lead.zipCode}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-gray-500">
                            <Lock className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                            <span className="text-xs sm:text-sm italic">Full details available after purchase</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Purchase Button */}
                    <button
                      onClick={() => handlePurchaseLead(lead.id)}
                      className="bg-[#122E5F] hover:bg-[#0f2347] text-white px-3 sm:px-4 py-2 rounded-lg font-medium text-xs sm:text-sm transition-colors duration-200 flex items-center space-x-1 sm:space-x-2 self-start sm:self-auto"
                    >
                      <CreditCard className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span>Buy ${lead.price}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Summary */}
        <div className="mt-6 sm:mt-8 text-center">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
            <div className="flex items-center justify-center mb-2 sm:mb-3">
              <div className="w-8 h-8 bg-[#2563eb] rounded-lg flex items-center justify-center mr-3">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <span className="text-[#122E5F] font-bold text-base sm:text-lg">Professional Contractor Dashboard</span>
            </div>
            <p className="text-gray-600 text-sm sm:text-lg">
              Manage your leads efficiently and grow your roofing business
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}