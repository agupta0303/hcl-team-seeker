import React, { useState, useEffect } from 'react';
import { Users, AlertCircle, Calendar } from 'lucide-react';
import api from '../../../services/api/axios';

const ProviderDashboard = () => {
    const [dashboardData, setDashboardData] = useState({
        activePatients: 0,
        highRiskPatients: 0,
        upcomingAppointments: 0,
        recentPatients: []
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                const { data } = await api.get('/provider/dashboard');
                setDashboardData(data);
            } catch (error) {
                console.error("Failed to fetch provider dashboard", error);
            } finally {
                setLoading(false);
            }
        };

        fetchDashboardData();
    }, []);

    const { activePatients, highRiskPatients, upcomingAppointments, recentPatients } = dashboardData;

    const getRiskColor = (level) => {
        switch (level) {
            case 'HIGH': return 'bg-red-500 text-white';
            case 'MEDIUM': return 'bg-yellow-500 text-white';
            case 'LOW': return 'bg-emerald-500 text-white';
            default: return 'bg-slate-500 text-white';
        }
    };

    if (loading) {
        return <div className="p-8 text-center text-slate-500">Loading dashboard...</div>;
    }

    return (
        <div className="space-y-6 pb-10">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-semibold text-slate-900 tracking-tight">Provider Dashboard</h1>
                <p className="mt-1 text-slate-500">Overview of your patient care</p>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between h-40">
                    <div className="flex justify-between items-start">
                        <h3 className="font-semibold text-slate-800">Total Patients</h3>
                        <Users className="h-5 w-5 text-slate-400" />
                    </div>
                    <div>
                        <div className="text-3xl font-light text-slate-900 mb-1">{activePatients}</div>
                        <div className="text-sm text-slate-500">Active in your care</div>
                    </div>
                </div>

                <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between h-40">
                    <div className="flex justify-between items-start">
                        <h3 className="font-semibold text-slate-800">High Risk Patients</h3>
                        <AlertCircle className="h-5 w-5 text-red-500" />
                    </div>
                    <div>
                        <div className="text-3xl font-light text-slate-900 mb-1">{highRiskPatients}</div>
                        <div className="text-sm text-slate-500">Require attention</div>
                    </div>
                </div>

                <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between h-40">
                    <div className="flex justify-between items-start">
                        <h3 className="font-semibold text-slate-800">Upcoming Appointments</h3>
                        <Calendar className="h-5 w-5 text-slate-400" />
                    </div>
                    <div>
                        <div className="text-3xl font-light text-slate-900 mb-1">{upcomingAppointments}</div>
                        <div className="text-sm text-slate-500">Scheduled this month</div>
                    </div>
                </div>
            </div>

            {/* Recent Patients Table */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden mt-8">
                <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                    <div>
                        <h3 className="text-lg font-semibold text-slate-800">Recent Patients</h3>
                        <p className="text-sm text-slate-500">Patients you've seen recently</p>
                    </div>
                    <button className="px-4 py-2 border border-slate-200 text-slate-700 text-sm font-medium rounded-lg hover:bg-slate-50 transition-colors">
                        View All
                    </button>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-slate-200 text-sm font-semibold text-slate-800">
                                <th className="p-4 pl-6">Name</th>
                                <th className="p-4">Age</th>
                                <th className="p-4">Last Visit</th>
                                <th className="p-4">Risk Level</th>
                                <th className="p-4">Conditions</th>
                                <th className="p-4 pr-6 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm">
                            {recentPatients.map((patient) => (
                                <tr key={patient.id} className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors last:border-0">
                                    <td className="p-4 pl-6 text-slate-700">{patient.name}</td>
                                    <td className="p-4 text-slate-700">{patient.age}</td>
                                    <td className="p-4 text-slate-700">{patient.lastVisit}</td>
                                    <td className="p-4">
                                        <span className={`px-2.5 py-1 rounded text-xs font-bold leading-none inline-block ${getRiskColor(patient.riskLevel)}`}>
                                            {patient.riskLevel}
                                        </span>
                                    </td>
                                    <td className="p-4 text-slate-700">{patient.conditions}</td>
                                    <td className="p-4 pr-6 text-right">
                                        <button className="text-sm font-semibold text-slate-900 hover:text-blue-600 transition-colors">
                                            View Profile
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            {recentPatients.length === 0 && (
                                <tr>
                                    <td colSpan="6" className="p-4 text-center text-slate-500">No recent patients found.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ProviderDashboard;