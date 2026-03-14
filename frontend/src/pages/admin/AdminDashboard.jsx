import React from "react";

const stats = [
    { title: "Total Patients", value: "1,245" },
    { title: "Appointments Today", value: "38" },
    { title: "High Risk Patients", value: "52" },
    { title: "Messages Pending", value: "17" },
];

const alerts = [
    {
        name: "John Smith",
        condition: "High Blood Pressure",
        risk: "High Risk",
    },
    {
        name: "Maria Garcia",
        condition: "Diabetes",
        risk: "Medium Risk",
    },
    {
        name: "David Lee",
        condition: "Cardiovascular Risk",
        risk: "High Risk",
    },
];

export default function AdminDashboard() {
    return (
        <div className="flex h-screen bg-gray-100">

            {/* Sidebar */}
            <div className="w-64 bg-blue-900 text-white p-6">
                <h2 className="text-lg font-semibold mb-6">Admin Portal</h2>

                <ul className="space-y-4 text-sm">
                    <li className="font-semibold">Dashboard</li>
                    <li>Patients</li>
                    <li>Appointments</li>
                    <li>Health Alerts</li>
                    <li>Messages</li>
                    <li>Reports</li>
                    <li>Profile</li>
                </ul>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-8 overflow-y-auto">

                <h1 className="text-2xl font-semibold mb-6">
                    Healthcare Admin Dashboard
                </h1>

                {/* Stats */}
                <div className="grid grid-cols-4 gap-6 mb-8">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-xl shadow"
                        >
                            <h3 className="text-gray-500 text-sm">{stat.title}</h3>
                            <p className="text-2xl font-bold mt-2">{stat.value}</p>
                        </div>
                    ))}
                </div>

                {/* Alerts */}
                <div className="bg-white rounded-xl shadow p-6">
                    <h2 className="text-lg font-semibold mb-4">
                        High Risk Patient Alerts
                    </h2>

                    <table className="w-full text-sm">
                        <thead>
                            <tr className="text-left border-b">
                                <th className="py-2">Patient</th>
                                <th>Condition</th>
                                <th>Risk Level</th>
                            </tr>
                        </thead>

                        <tbody>
                            {alerts.map((alert, index) => (
                                <tr key={index} className="border-b">
                                    <td className="py-3">{alert.name}</td>
                                    <td>{alert.condition}</td>
                                    <td>
                                        <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs">
                                            {alert.risk}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
}
