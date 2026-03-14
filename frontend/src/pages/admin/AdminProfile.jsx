import React from "react";

export default function AdminProfile() {
    return (
        <div className="space-y-6 pb-10">
            <div>
                <h1 className="text-3xl font-semibold text-slate-900 tracking-tight">Admin Profile</h1>
                <p className="mt-1 text-slate-500">Manage your administrator account details</p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 lg:p-8 max-w-2xl mt-4">
                <div className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
                        <input
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                            value="Admin"
                            readOnly
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
                        <input
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                            value="User"
                            readOnly
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                        <input
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                            value="admin@healthportal.com"
                            readOnly
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Role</label>
                        <input
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                            value="Healthcare Administrator"
                            readOnly
                        />
                    </div>

                    <div className="pt-4 mt-6 border-t border-slate-100">
                        <button className="bg-[#1e4b7a] text-white px-5 py-2.5 rounded-lg font-medium hover:bg-[#163a61] transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-[#1e4b7a]">
                            Edit Profile
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}