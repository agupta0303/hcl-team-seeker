import React from 'react';

export default function WellnessGoals() {
  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-8">
      <h1 className="text-2xl font-bold text-slate-800 mb-6">
        Wellness Goals
      </h1>
      
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 text-center text-slate-500">
        <p>Set and track your personal wellness goals here.</p>
        <p className="text-sm mt-2">This feature is currently under development.</p>
      </div>
    </div>
  );
}
