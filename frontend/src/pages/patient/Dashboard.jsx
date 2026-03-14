import React, { useState } from 'react';
import { HealthWidget } from '../../components/dashboard/HealthWidget';
import { healthMetrics, upcomingAppointments } from './mockData';
import { Calendar, Clock, User, ChevronRight } from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('Overview');

  const tabs = ['Overview', 'Analytics', 'Reports'];

  return (
    <div className="space-y-8 pb-10">
      {/* Header Section */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Patient Dashboard</h1>
          <p className="mt-2 text-slate-500">Welcome back! Here is your health overview for today.</p>
        </div>
        
        {/* Simple Tabs */}
        <div className="inline-flex items-center bg-slate-100 p-1 rounded-lg border border-slate-200 shadow-inner">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                activeTab === tab 
                  ? 'bg-white text-slate-900 shadow-sm ring-1 ring-slate-200' 
                  : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Area (2/3 width on large screens) */}
        <div className="lg:col-span-2 space-y-8">
          
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-slate-800">Health Overview</h2>
              <button className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1 group">
                Customize
                <ChevronRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {healthMetrics.map(metric => (
                <HealthWidget key={metric.id} metric={metric} />
              ))}
            </div>
          </section>

        </div>

        {/* Sidebar/Secondary Column (1/3 width on large screens) */}
        <div className="space-y-8">
          
          {/* Action Card */}
          <div className="rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 p-6 text-white shadow-lg relative overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-400/20 rounded-full blur-xl -ml-10 -mb-10"></div>
            
            <div className="relative z-10">
              <h3 className="font-semibold text-lg mb-2">Need a consultation?</h3>
              <p className="text-blue-100 text-sm mb-6 leading-relaxed">
                Connect with our healthcare professionals instantly through our telehealth service.
              </p>
              <button className="w-full bg-white text-blue-700 hover:bg-blue-50 font-medium py-2.5 rounded-lg transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-700">
                Book Appointment
              </button>
            </div>
          </div>

          {/* Appointments List */}
          <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-slate-800">Upcoming Visits</h2>
              <button className="text-slate-400 hover:text-blue-600 transition-colors tooltip group relative">
                <Calendar className="h-5 w-5" />
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 rounded bg-slate-800 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100 whitespace-nowrap">Open Calendar</span>
              </button>
            </div>
            
            <div className="space-y-5">
              {upcomingAppointments.map((apt, idx) => (
                <div key={apt.id} className="group relative pl-4 border-l-2 border-blue-200 hover:border-blue-500 transition-colors">
                  <div className="absolute -left-[5px] top-2 h-2 w-2 rounded-full bg-blue-500 ring-4 ring-white" />
                  <h4 className="font-medium text-slate-700">{apt.doctorName}</h4>
                  <div className="mt-1 flex items-center text-sm text-slate-500 gap-3">
                    <span className="flex items-center gap-1 border border-slate-200 rounded px-1.5 py-0.5 bg-slate-50"><User className="h-3 w-3" /> {apt.specialty}</span>
                  </div>
                  <div className="mt-2 flex items-center text-sm font-medium text-slate-600 gap-3">
                    <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4 text-blue-500" /> {apt.date}</span>
                    <span className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-emerald-500" /> {apt.time}</span>
                  </div>
                  {idx < upcomingAppointments.length - 1 && <div className="mt-5 h-px w-full bg-slate-100" />}
                </div>
              ))}
            </div>
            
            <button className="mt-6 w-full py-2 text-sm font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors flex items-center justify-center gap-1.5 border border-blue-100">
              View All Appointments
            </button>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
