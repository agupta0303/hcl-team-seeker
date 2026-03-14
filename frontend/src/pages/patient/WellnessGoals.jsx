import React from 'react';
import { Plus } from 'lucide-react';

const WellnessGoals = () => {
  const goals = [
    {
      id: 1,
      title: 'Daily Steps Goal',
      description: 'Walk 10,000 steps every day',
      progress: 8234,
      target: 10000,
      unit: 'steps',
      deadlineDays: 31,
    },
    {
      id: 2,
      title: 'Sleep Improvement',
      description: 'Get 8 hours of sleep every night',
      progress: 6.5,
      target: 8,
      unit: 'hours',
      deadlineDays: 61,
    },
    {
      id: 3,
      title: 'Hydration Goal',
      description: 'Drink 8 glasses of water daily',
      progress: 6,
      target: 8,
      unit: 'glasses',
      deadlineDays: 18,
    }
  ];

  return (
    <div className="space-y-6 pb-10 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-200 pb-5">
        <div>
          <h1 className="text-3xl font-semibold text-slate-900 tracking-tight">Wellness Goals</h1>
          <p className="mt-1 text-slate-500">Track your progress towards better health</p>
        </div>
        <button className="inline-flex items-center justify-center gap-2 bg-[#1e4b7a] hover:bg-[#163a61] text-white px-4 py-2.5 rounded-md font-medium transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1e4b7a] focus:ring-offset-2">
          <Plus className="h-5 w-5" />
          Add Goal
        </button>
      </div>

      {/* Goals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
        {goals.map((goal) => {
          const percentage = Math.min((goal.progress / goal.target) * 100, 100);
          
          return (
            <div key={goal.id} className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col shadow-sm">
              <div className="mb-6">
                <h3 className="text-lg font-medium text-slate-900 mb-1">{goal.title}</h3>
                <p className="text-slate-500 text-sm">{goal.description}</p>
              </div>

              <div className="space-y-3 mb-6 flex-1">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Progress</span>
                  <span className="font-medium text-slate-900">
                    {goal.progress} / {goal.target} {goal.unit}
                  </span>
                </div>
                
                {/* Progress Bar */}
                <div className="h-3.5 w-full bg-slate-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#1e4b7a] rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                
                <div className="flex justify-between text-xs text-slate-500">
                  <span>{percentage.toFixed(1)}% complete</span>
                  <span>Deadline</span>
                  <span className="font-medium text-slate-900">{goal.deadlineDays} days left</span>
                </div>
              </div>

              <button className="w-full py-2.5 px-4 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:text-slate-900 transition-colors">
                Log Activity
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WellnessGoals;
