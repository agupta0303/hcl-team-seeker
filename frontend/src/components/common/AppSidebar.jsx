import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, 
  User, 
  Target, 
  FileText, 
  Shield, 
  Calendar, 
  MessageSquare,
  LogOut
} from 'lucide-react';

const navItems = [
  { icon: Home, label: 'Dashboard', path: '/patient/dashboard' },
  { icon: User, label: 'Profile', path: '/patient/profile' },
  { icon: Target, label: 'Wellness Goals', path: '/patient/wellness-goals' },
  { icon: FileText, label: 'Medical History', path: '/patient/medical-history' },
  { icon: Shield, label: 'Preventive Measures', path: '/patient/preventive-measures' },
  { icon: Calendar, label: 'Appointments', path: '/patient/appointments' },
  { icon: MessageSquare, label: 'Messages', path: '/patient/messages' },
];

export const AppSidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 text-white transform transition-transform duration-300 ease-in-out md:translate-x-0 md:relative flex flex-col shadow-xl ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex h-16 items-center px-6 font-bold text-xl border-b border-slate-800 shrink-0">
          Patient Portal
        </div>
        
        <nav className="flex-1 overflow-y-auto py-6">
          <ul className="space-y-1.5 px-3">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) => 
                      `flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-all ${
                        isActive 
                          ? 'bg-blue-600 text-white shadow-sm' 
                          : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                      }`
                    }
                    onClick={() => {
                      if (window.innerWidth < 768) {
                        onClose();
                      }
                    }}
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="p-4 border-t border-slate-800 shrink-0 mb-2 mt-auto">
          <NavLink 
            to="/login"
            className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-red-400 transition-colors w-full"
          >
            <LogOut className="h-4 w-4" />
            Sign Out
          </NavLink>
        </div>
      </aside>
    </>
  );
};
