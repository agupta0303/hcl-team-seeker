import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, 
  Users, 
  Calendar, 
  AlertCircle, 
  MessageSquare, 
  FileText, 
  User,
  LogOut,
  UserPlus
} from 'lucide-react';

const navItems = [
  { icon: Home, label: 'Dashboard', path: '/admin/dashboard' },
  { icon: UserPlus, label: 'Manage Doctors', path: '/admin/manage-doctors' },
  { icon: Users, label: 'Patients', path: '/admin/patients' },
  { icon: Calendar, label: 'Appointments', path: '/admin/appointments' },
  { icon: AlertCircle, label: 'Health Alerts', path: '/admin/alerts' },
  { icon: MessageSquare, label: 'Messages', path: '/admin/messages' },
  { icon: FileText, label: 'Reports', path: '/admin/reports' },
  { icon: User, label: 'Profile', path: '/admin/profile' },
];

export const AdminSidebar = ({ isOpen, onClose }) => {
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
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#1e4b7a] text-white transform transition-transform duration-300 ease-in-out md:translate-x-0 md:relative flex flex-col shadow-xl ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex h-16 items-center px-6 font-semibold text-lg border-b border-[#163a61] shrink-0">
          Admin Portal
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
                          ? 'bg-[#163a61] text-white shadow-sm' 
                          : 'text-blue-100 hover:bg-[#163a61]/50 hover:text-white'
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

        <div className="p-4 border-t border-[#163a61] shrink-0 mb-2 mt-auto">
          <NavLink 
            to="/login"
            className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium text-blue-100 hover:bg-[#163a61]/50 hover:text-red-300 transition-colors w-full"
          >
            <LogOut className="h-4 w-4" />
            Sign Out
          </NavLink>
        </div>
      </aside>
    </>
  );
};
