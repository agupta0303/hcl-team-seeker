import React, { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';
import api from '../../services/api/axios';

const WellnessGoals = () => {
  const [goals, setGoals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [newGoal, setNewGoal] = useState({ title: '', description: '', target: '', unit: '', deadlineDays: '' });

  useEffect(() => {
    const fetchGoals = async () => {
      try {
        const { data } = await api.get('/patient/goals');
        setGoals(data || []);
      } catch (error) {
        console.error("Failed to fetch goals", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGoals();
  }, []);

  const handleAddGoal = async (e) => {
    e.preventDefault();
    try {
      await api.post('/patient/goals', newGoal);
      setShowModal(false);
      setNewGoal({ title: '', description: '', target: '', unit: '', deadlineDays: '' });
      
      // Refresh goals
      const { data } = await api.get('/patient/goals');
      setGoals(data || []);
    } catch (error) {
      console.error("Failed to add goal", error);
    }
  };

  return (
    <div className="space-y-6 pb-10 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-200 pb-5">
        <div>
          <h1 className="text-3xl font-semibold text-slate-900 tracking-tight">Wellness Goals</h1>
          <p className="mt-1 text-slate-500">Track your progress towards better health</p>
        </div>
        <button 
          onClick={() => setShowModal(true)}
          className="inline-flex items-center justify-center gap-2 bg-[#1e4b7a] hover:bg-[#163a61] text-white px-4 py-2.5 rounded-md font-medium transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1e4b7a] focus:ring-offset-2"
        >
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

      {/* Add Goal Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4 text-slate-900">Add New Wellness Goal</h2>
            <form onSubmit={handleAddGoal} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Title</label>
                <input required type="text" className="w-full p-2 border border-slate-200 rounded-md" value={newGoal.title} onChange={e => setNewGoal({...newGoal, title: e.target.value})} placeholder="e.g. Daily Steps" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Description</label>
                <input required type="text" className="w-full p-2 border border-slate-200 rounded-md" value={newGoal.description} onChange={e => setNewGoal({...newGoal, description: e.target.value})} placeholder="e.g. Walk 10,000 steps" />
              </div>
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-slate-700 mb-1">Target Amount</label>
                  <input required type="number" className="w-full p-2 border border-slate-200 rounded-md" value={newGoal.target} onChange={e => setNewGoal({...newGoal, target: e.target.value})} placeholder="10000" />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-slate-700 mb-1">Unit</label>
                  <input required type="text" className="w-full p-2 border border-slate-200 rounded-md" value={newGoal.unit} onChange={e => setNewGoal({...newGoal, unit: e.target.value})} placeholder="steps" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Deadline (Days)</label>
                <input required type="number" className="w-full p-2 border border-slate-200 rounded-md" value={newGoal.deadlineDays} onChange={e => setNewGoal({...newGoal, deadlineDays: e.target.value})} placeholder="30" />
              </div>
              <div className="flex justify-end gap-3 pt-4">
                <button type="button" onClick={() => setShowModal(false)} className="px-4 py-2 text-slate-600 hover:text-slate-900 font-medium">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-[#1e4b7a] hover:bg-[#163a61] text-white rounded-md font-medium transition-colors">Create Goal</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default WellnessGoals;