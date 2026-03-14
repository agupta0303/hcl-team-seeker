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
            <Route path="profile" element={<Profile />} />
            <Route path="wellness-goals" element={<WellnessGoals />} />
            <Route path="preventive-measures" element={<PreventiveMeasures />} />
            
            {/* Catch-all for undefined patient routes */}
            <Route path="*" element={<Navigate to="/patient/dashboard" replace />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
