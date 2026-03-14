import React from 'react';

const getStatusColor = (status) => {
  switch (status) {
    case 'excellent':
    case 'good':
      return 'text-emerald-500 bg-emerald-50 border-emerald-200';
    case 'warning':
      return 'text-amber-500 bg-amber-50 border-amber-200';
    case 'critical':
      return 'text-red-500 bg-red-50 border-red-200';
    default:
      return 'text-blue-500 bg-blue-50 border-blue-200';
  }
};

const getProgressBarColor = (status) => {
  switch (status) {
    case 'excellent':
    case 'good':
      return 'bg-emerald-500';
    case 'warning':
      return 'bg-amber-500';
    case 'critical':
      return 'bg-red-500';
    default:
      return 'bg-blue-500';
  }
};

export const HealthWidget = ({ metric }) => {
  const Icon = metric.icon;
  const statusClasses = getStatusColor(metric.status);
  const progressClasses = getProgressBarColor(metric.status);

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full transform hover:-translate-y-1">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <div className={`p-2.5 rounded-lg border flex items-center justify-center ${statusClasses}`}>
            <Icon className="h-5 w-5" />
          </div>
          <h3 className="font-semibold text-slate-700">{metric.title}</h3>
        </div>
      </div>
      
      <div className="mt-2 mb-6">
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold tracking-tight text-slate-900">{metric.value}</span>
          <span className="text-sm font-medium text-slate-500">{metric.unit}</span>
        </div>
        <div className="mt-1 flex items-center gap-2 text-sm">
          <span className={`font-medium ${metric.trendUp ? 'text-emerald-600' : 'text-slate-600'}`}>
            {metric.trend}
          </span>
        </div>
      </div>

      <div className="mt-auto space-y-2">
        <div className="flex justify-between text-xs font-medium text-slate-500">
          <span>Progress</span>
          <span>Target: {metric.target} {metric.unit}</span>
        </div>
        <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
          <div 
            className={`h-full rounded-full transition-all duration-1000 ease-out ${progressClasses}`}
            style={{ width: `${metric.progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};
