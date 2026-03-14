import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PublicLanding from './pages/PublicLanding';
import Login from './pages/Login';
import Register from './pages/Register';
import PatientLayout from './pages/patient/PatientLayout';
import Dashboard from './pages/patient/Dashboard';
import Profile from './pages/patient/Profile';
import WellnessGoals from './pages/patient/WellnessGoals';
import PreventiveMeasures from './pages/patient/PreventiveMeasures';
import { AuthProvider } from './context/AuthContext';
import WellnessGoals from './pages/patient/WellnessGoals';
import ProviderLayout from './pages/doctor/ProviderLayout';
import ProviderDashboard from './pages/doctor/ProviderDashboard';
import AdminLayout from './pages/admin/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminProfile from './pages/admin/AdminProfile';
import ManageDoctors from './pages/admin/ManageDoctors';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<PublicLanding />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Patient Routes */}
          <Route path="/patient" element={<PatientLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
<<<<<<< HEAD
            <Route path="wellness-goals" element={<WellnessGoals />} />
=======
            <Route path="profile" element={<Profile />} />
            <Route path="wellness-goals" element={<WellnessGoals />} />
            <Route path="preventive-measures" element={<PreventiveMeasures />} />
            
>>>>>>> 493331fbab929bf44385670dbfb85a564a6a0963
            {/* Catch-all for undefined patient routes */}
            <Route path="*" element={<Navigate to="/patient/dashboard" replace />} />
          </Route>

          {/* Provider Routes */}
          <Route path="/provider" element={<ProviderLayout />}>
            <Route path="dashboard" element={<ProviderDashboard />} />
            <Route path="*" element={<Navigate to="/provider/dashboard" replace />} />
          </Route>

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="profile" element={<AdminProfile />} />
            <Route path="manage-doctors" element={<ManageDoctors />} />
            <Route path="*" element={<Navigate to="/admin/dashboard" replace />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
