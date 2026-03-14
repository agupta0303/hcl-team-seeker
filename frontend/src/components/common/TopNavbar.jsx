import React from 'react';
import { Menu, Bell } from 'lucide-react';

export const TopNavbar = ({ onMenuClick }) => {
  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b bg-white px-4 shadow-sm md:px-6 z-10 sticky top-0 transition-all">
      <div className="flex items-center gap-4">
        <button 
          onClick={onMenuClick}
          className="rounded-md p-2 hover:bg-slate-100 md:hidden text-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-400 transition-colors"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </button>
        <div className="h-6 w-px bg-slate-200 hidden md:block" />
        <h1 className="text-lg font-semibold text-slate-800 md:ml-2">Healthcare Wellness Portal</h1>
      </div>
      
      <div className="hidden sm:flex items-center gap-4">
        <button className="relative rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
        </button>
        <div className="h-9 w-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-medium border border-blue-200 shadow-sm">
          JD
        </div>
      </div>
    </header>
  );
};
