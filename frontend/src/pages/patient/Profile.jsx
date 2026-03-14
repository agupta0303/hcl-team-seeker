import React, { useState, useEffect } from "react";
import api from "../../../services/api/axios";

export default function Profile() {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const { data } = await api.get('/patient/profile');
                setProfile(data);
            } catch (error) {
                console.error("Failed to fetch patient profile", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, []);

    const firstName = profile?.fullName?.split(' ')[0] || "Patient";
    const lastName = profile?.fullName?.split(' ')[1] || "Name";

    return (
        <div className="flex min-h-screen bg-gray-100">

            {/* Sidebar */}
            <div className="w-64 bg-blue-900 text-white p-6">
                <h2 className="text-lg font-semibold mb-6">Patient Portal</h2>

                <ul className="space-y-4">
                    <li className="hover:text-gray-300 cursor-pointer">Dashboard</li>
                    <li className="hover:text-gray-300 cursor-pointer">Profile</li>
                    <li className="hover:text-gray-300 cursor-pointer">Wellness Goals</li>
                    <li className="hover:text-gray-300 cursor-pointer">Medical History</li>
                    <li className="hover:text-gray-300 cursor-pointer">Preventive Measures</li>
                    <li className="hover:text-gray-300 cursor-pointer">Appointments</li>
                    <li className="hover:text-gray-300 cursor-pointer">Messages</li>
                </ul>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-8">

                {/* Page Title */}
                <h1 className="text-2xl font-semibold mb-6">
                    Healthcare Wellness Portal
                </h1>

                {loading ? (
                    <div className="p-8 text-center text-gray-500">Loading profile data...</div>
                ) : (
                    <>
                        {/* Profile Header */}
                        <div className="flex justify-between items-center mb-6">
                            <div>
                                <h2 className="text-3xl font-bold">Patient Profile</h2>
                                <p className="text-gray-500">
                                    Manage your personal information and preferences
                                </p>
                            </div>

                            <button className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800">
                                Edit Profile
                            </button>
                        </div>

                        {/* Personal Information */}
                        <div className="bg-white rounded-lg shadow p-6 mb-8">

                            <h3 className="text-lg font-semibold mb-4">
                                Personal Information
                            </h3>

                            <p className="text-gray-500 mb-6">
                                Your basic profile details
                            </p>

                            <div className="grid grid-cols-2 gap-6">

                                <div>
                                    <label className="text-sm font-medium">First Name</label>
                                    <input
                                        className="w-full mt-1 p-2 border rounded bg-gray-100"
                                        value={firstName}
                                        disabled
                                    />
                                </div>

                                <div>
                                    <label className="text-sm font-medium">Last Name</label>
                                    <input
                                        className="w-full mt-1 p-2 border rounded bg-gray-100"
                                        value={lastName}
                                        disabled
                                    />
                                </div>

                                <div className="col-span-2">
                                    <label className="text-sm font-medium">Email</label>
                                    <input
                                        className="w-full mt-1 p-2 border rounded bg-gray-100"
                                        value={profile?.email || ""}
                                        disabled
                                    />
                                </div>

                                <div>
                                    <label className="text-sm font-medium">Phone</label>
                                    <input
                                        className="w-full mt-1 p-2 border rounded bg-gray-100"
                                        value={profile?.phone || ""}
                                        disabled
                                    />
                                </div>

                                <div>
                                    <label className="text-sm font-medium">Date of Birth</label>
                                    <input
                                        className="w-full mt-1 p-2 border rounded bg-gray-100"
                                        value={profile?.dateOfBirth || ""}
                                        disabled
                                    />
                                </div>

                                <div>
                                    <label className="text-sm font-medium">Gender</label>
                                    <select className="w-full mt-1 p-2 border rounded bg-gray-100" disabled value={profile?.gender || "Male"}>
                                        <option>Male</option>
                                        <option>Female</option>
                                    </select>
                                </div>

                            </div>
                        </div>

                        {/* Health Details */}
                        <div className="bg-white rounded-lg shadow p-6 mb-8">

                            <h3 className="text-lg font-semibold mb-4">
                                Health Details
                            </h3>

                            <p className="text-gray-500 mb-6">
                                Medical history and current conditions
                            </p>

                            <div className="grid grid-cols-2 gap-6">

                                <div>
                                    <label className="text-sm font-medium">Blood Type</label>
                                    <select className="w-full mt-1 p-2 border rounded bg-gray-100" disabled value={profile?.bloodType || "O+"}>
                                        <option>O+</option>
                                        <option>A+</option>
                                        <option>B+</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="text-sm font-medium">Height (cm)</label>
                                    <input
                                        className="w-full mt-1 p-2 border rounded bg-gray-100"
                                        value="175"
                                        disabled
                                    />
                                </div>

                                <div>
                                    <label className="text-sm font-medium">Weight (kg)</label>
                                    <input
                                        className="w-full mt-1 p-2 border rounded bg-gray-100"
                                        value="78"
                                        disabled
                                    />
                                </div>

                                <div className="col-span-2">
                                    <label className="text-sm font-medium">
                                        Chronic Conditions
                                    </label>
                                    <input
                                        className="w-full mt-1 p-2 border rounded bg-gray-100"
                                        value="Hypertension, Pre-diabetes"
                                        disabled
                                    />
                                </div>

                                <div className="col-span-2">
                                    <label className="text-sm font-medium">
                                        Current Medications
                                    </label>
                                    <input
                                        className="w-full mt-1 p-2 border rounded bg-gray-100"
                                        value="Lisinopril 10mg, Metformin 500mg"
                                        disabled
                                    />
                                </div>

                                <div className="col-span-2">
                                    <label className="text-sm font-medium">
                                        Allergies
                                    </label>
                                    <input
                                        className="w-full mt-1 p-2 border rounded bg-gray-100"
                                        value="Penicillin"
                                        disabled
                                    />
                                </div>

                            </div>
                        </div>

                        {/* Widget Preferences */}
                        <div className="bg-white rounded-lg shadow p-6">

                            <h3 className="text-lg font-semibold mb-2">
                                Widget Preferences
                            </h3>

                            <p className="text-gray-500 mb-6">
                                Select which health metrics you want to track on your dashboard
                            </p>

                            <div className="grid grid-cols-2 gap-4">

                                <label className="flex items-center space-x-2 opacity-70">
                                    <input type="checkbox" defaultChecked disabled />
                                    <span>Steps</span>
                                </label>

                                <label className="flex items-center space-x-2 opacity-70">
                                    <input type="checkbox" defaultChecked disabled />
                                    <span>Sleep</span>
                                </label>

                                <label className="flex items-center space-x-2 opacity-70">
                                    <input type="checkbox" defaultChecked disabled />
                                    <span>Water Intake</span>
                                </label>

                                <label className="flex items-center space-x-2 opacity-70">
                                    <input type="checkbox" defaultChecked disabled />
                                    <span>Distance</span>
                                </label>

                                <label className="flex items-center space-x-2 opacity-70">
                                    <input type="checkbox" defaultChecked disabled />
                                    <span>Heart Rate</span>
                                </label>

                                <label className="flex items-center space-x-2 opacity-70">
                                    <input type="checkbox" defaultChecked disabled />
                                    <span>Calories</span>
                                </label>

                                <label className="flex items-center space-x-2 opacity-70">
                                    <input type="checkbox" defaultChecked disabled />
                                    <span>Period Tracker</span>
                                </label>

                            </div>

                        </div>
                    </>
                )}
            </div>

        </div>
    );
}