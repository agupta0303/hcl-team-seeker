import React, { useState, useEffect } from "react";
import api from "../../../services/api/axios";

export default function AdminProfile() {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const { data } = await api.get('/admin/profile');
                setProfile(data);
            } catch (error) {
                console.error("Failed to fetch admin profile", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, []);

    if (loading) {
        return <div className="p-8 text-center text-gray-500">Loading profile...</div>;
    }

    return (
        <div className="flex h-screen bg-gray-100">

            {/* Sidebar */}
            <div className="w-64 bg-blue-900 text-white p-6">
                <h2 className="text-lg font-semibold mb-6">Admin Portal</h2>

                <ul className="space-y-4 text-sm">
                    <li>Dashboard</li>
                    <li>Patients</li>
                    <li>Appointments</li>
                    <li>Health Alerts</li>
                    <li>Messages</li>
                    <li>Reports</li>
                    <li className="font-semibold">Profile</li>
                </ul>
            </div>

            {/* Content */}
            <div className="flex-1 p-8">

                <h1 className="text-2xl font-semibold mb-6">
                    Admin Profile
                </h1>

                <div className="bg-white rounded-xl shadow p-6 max-w-xl">

                    <div className="mb-4">
                        <label className="text-sm text-gray-600">First Name</label>
                        <input
                            className="w-full border rounded-md p-2 mt-1 bg-gray-50"
                            value={profile?.firstName || ""}
                            readOnly
                        />
                    </div>

                    <div className="mb-4">
                        <label className="text-sm text-gray-600">Last Name</label>
                        <input
                            className="w-full border rounded-md p-2 mt-1 bg-gray-50"
                            value={profile?.lastName || ""}
                            readOnly
                        />
                    </div>

                    <div className="mb-4">
                        <label className="text-sm text-gray-600">Email</label>
                        <input
                            className="w-full border rounded-md p-2 mt-1 bg-gray-50"
                            value={profile?.email || ""}
                            readOnly
                        />
                    </div>

                    <div className="mb-4">
                        <label className="text-sm text-gray-600">Role</label>
                        <input
                            className="w-full border rounded-md p-2 mt-1 bg-gray-50"
                            value={profile?.role || ""}
                            readOnly
                        />
                    </div>

                    <button className="bg-blue-900 text-white px-5 py-2 rounded-lg mt-4 hover:bg-blue-800 transition-colors">
                        Edit Profile
                    </button>

                </div>

            </div>
        </div>
    );
}