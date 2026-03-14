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
    <div className="space-y-6 pb-10">
      <div>
        <h1 className="text-3xl font-semibold text-slate-900 tracking-tight">Admin Dashboard</h1>
        <p className="mt-1 text-slate-500">Overview of the healthcare system</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 pt-2">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between"
          >
            <h3 className="text-slate-500 text-sm font-medium">{stat.title}</h3>
            <p className="text-3xl font-light text-slate-900 mt-2">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Alerts */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center">
          <div>
            <h2 className="text-lg font-semibold text-slate-800">
              High Risk Patient Alerts
            </h2>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-slate-800 font-semibold bg-slate-50/50">
                <th className="p-4 pl-6">Patient</th>
                <th className="p-4">Condition</th>
                <th className="p-4 pr-6">Risk Level</th>
              </tr>
            </thead>

            <tbody>
              {alerts.map((alert, index) => (
                <tr key={index} className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors last:border-0">
                  <td className="p-4 pl-6 font-medium text-slate-900">{alert.name}</td>
                  <td className="p-4 text-slate-700">{alert.condition}</td>
                  <td className="p-4 pr-6">
                    <span className={`px-2.5 py-1 rounded text-xs font-bold leading-none inline-block ${alert.risk === 'High Risk' ? 'bg-red-500 text-white' : 'bg-yellow-500 text-white'}`}>
                      {alert.risk.toUpperCase()}
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