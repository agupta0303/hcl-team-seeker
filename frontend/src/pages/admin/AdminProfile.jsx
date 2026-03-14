import React from "react";

export default function AdminProfile() {
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
                            className="w-full border rounded-md p-2 mt-1"
                            value="Admin"
                            readOnly
                        />
                    </div>

                    <div className="mb-4">
                        <label className="text-sm text-gray-600">Last Name</label>
                        <input
                            className="w-full border rounded-md p-2 mt-1"
                            value="User"
                            readOnly
                        />
                    </div>

                    <div className="mb-4">
                        <label className="text-sm text-gray-600">Email</label>
                        <input
                            className="w-full border rounded-md p-2 mt-1"
                            value="admin@healthportal.com"
                            readOnly
                        />
                    </div>

                    <div className="mb-4">
                        <label className="text-sm text-gray-600">Role</label>
                        <input
                            className="w-full border rounded-md p-2 mt-1"
                            value="Healthcare Administrator"
                            readOnly
                        />
                    </div>

                    <button className="bg-blue-900 text-white px-5 py-2 rounded-lg mt-4">
                        Edit Profile
                    </button>

                </div>

            </div>
        </div>
    );
}