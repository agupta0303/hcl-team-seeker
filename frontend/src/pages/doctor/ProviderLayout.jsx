import React, { useState } from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { ProviderSidebar } from '../../components/common/ProviderSidebar';
import { TopNavbar } from '../../components/common/TopNavbar';

const ProviderLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const location = useLocation();

    if (location.pathname === '/provider' || location.pathname === '/provider/') {
        return <Navigate to="/provider/dashboard" replace />;
    }

    return (
        <div className="flex h-screen w-full overflow-hidden bg-[#fafafa] text-slate-900 font-sans">
            <ProviderSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

            <div className="flex flex-1 flex-col overflow-hidden relative">
                <TopNavbar onMenuClick={() => setSidebarOpen(true)} title="Healthcare Provider Portal" />

                <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 scroll-smooth">
                    <div className="mx-auto max-w-7xl animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default ProviderLayout;