import React from 'react';
import { Search, UserPlus, Trash2 } from 'lucide-react';

const ManageDoctors = () => {
    const doctors = [
        { id: 1, name: "Dr. Jane Doe", email: "jane.doe@example.com", specialty: "Cardiology", license: "MD123456", org: "City Hospital", patients: 150, joined: "6/15/2015" },
        { id: 2, name: "Dr. John Smith", email: "john.smith@example.com", specialty: "Endocrinology", license: "MD789012", org: "County Clinic", patients: 120, joined: "3/20/2018" },
        { id: 3, name: "Dr. Emily Johnson", email: "emily.johnson@example.com", specialty: "Internal Medicine", license: "MD345678", org: "Community Health Center", patients: 90, joined: "8/10/2020" },
    ];

    return (
        <div className="space-y-6 pb-10">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5">
                <div>
                    <h1 className="text-3xl font-semibold text-slate-900 tracking-tight">Manage Doctors</h1>
                    <p className="mt-1 text-slate-500">Add or remove healthcare providers</p>
                </div>
                <button className="inline-flex items-center justify-center gap-2 bg-[#1e4b7a] hover:bg-[#163a61] text-white px-4 py-2.5 rounded-md font-medium transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1e4b7a] focus:ring-offset-2">
                    <UserPlus className="h-4 w-4" />
                    Add Doctor
                </button>
            </div>

            {/* Main List Container */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden pt-6">
                <div className="px-6 mb-6">
                    <h3 className="text-lg font-semibold text-slate-800">Doctors List</h3>
                    <p className="text-sm text-slate-500 mb-6">View and manage all healthcare providers</p>

                    {/* Search Bar */}
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                            <Search className="h-5 w-5" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search by name, specialty, or email..."
                            className="pl-10 pr-4 py-2.5 w-full bg-slate-50 border border-slate-100 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors"
                        />
                    </div>
                </div>

                {/* Doctors Table */}
                <div className="overflow-x-auto border-t border-slate-100">
                    <table className="w-full text-left border-collapse min-w-max">
                        <thead>
                            <tr className="border-b border-slate-200 text-sm font-semibold text-slate-800">
                                <th className="p-4 pl-6">Name</th>
                                <th className="p-4">Email</th>
                                <th className="p-4">Specialty</th>
                                <th className="p-4">License</th>
                                <th className="p-4">Organization</th>
                                <th className="p-4">Patients</th>
                                <th className="p-4">Joined</th>
                                <th className="p-4 pr-6 text-right cursor-pointer">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm">
                            {doctors.map((doc) => (
                                <tr key={doc.id} className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors last:border-0">
                                    <td className="p-4 pl-6 font-medium text-slate-900">{doc.name}</td>
                                    <td className="p-4 text-slate-600">{doc.email}</td>
                                    <td className="p-4 text-slate-600">{doc.specialty}</td>
                                    <td className="p-4 text-slate-600">{doc.license}</td>
                                    <td className="p-4 text-slate-600">{doc.org}</td>
                                    <td className="p-4 text-slate-600">{doc.patients}</td>
                                    <td className="p-4 text-slate-600">{doc.joined}</td>
                                    <td className="p-4 pr-8 text-right">
                                        <button className="text-red-500 hover:text-red-700 transition-colors p-1.5 hover:bg-red-50 inline-flex rounded items-center">
                                            <Trash2 className="h-4 w-4" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageDoctors;