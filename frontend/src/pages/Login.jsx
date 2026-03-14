import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Label } from '../components/ui/Label';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // In a real app, you would validate credentials here.
    // For now, we simulate a successful login and redirect to a dashboard.
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-md">
        
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">
            Healthcare Wellness Portal
          </h1>
          <p className="text-gray-600">Sign in to your account</p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-1">Login</h2>
            <p className="text-sm text-gray-500">Enter your credentials to access the portal</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="your@example.com" 
                required 
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input 
                id="password" 
                type="password" 
                placeholder="********" 
                required 
              />
            </div>

            <Button type="submit" variant="primary" className="w-full font-bold">
              Sign In
            </Button>
          </form>

          {/* Demo Credentials Box */}
          <div className="mt-6 bg-blue-50/50 border border-blue-100 rounded-lg p-4 text-sm text-gray-600">
            <p className="font-bold mb-2 text-gray-800">Demo Credentials:</p>
            <div className="space-y-2">
              <p>Admin: admin@healthcare.com / admin123</p>
              <p>Doctor: dr.smith@healthcare.com / doctor123</p>
              <p>Patient: patient@healthcare.com / patient123</p>
            </div>
          </div>
          
          <div className="mt-8 text-center text-sm">
            <span className="text-gray-500">New patient? </span>
            <Link to="/register" className="text-primary font-medium hover:underline">
              Register here
            </Link>
          </div>
        </div>

        {/* Back Navigation */}
        <div className="mt-8 text-center text-sm">
          <Link to="/" className="text-gray-500 hover:text-primary transition-colors">
            &larr; Back to Home
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Login;
