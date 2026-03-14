import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../services/api/axios';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Hydrate from localStorage
        const storedUser = localStorage.getItem('user');
        const token = localStorage.getItem('token');
        if (storedUser && token) {
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    const login = async (email, password) => {
        try {
            const { data } = await api.post('/auth/login', { email, password });
            
            setUser({ id: data._id, name: data.name, email: data.email, role: data.role });
            localStorage.setItem('user', JSON.stringify({ id: data._id, name: data.name, email: data.email, role: data.role }));
            localStorage.setItem('token', data.token);

            return data;
        } catch (error) {
            throw error;
        }
    };

    const register = async (name, email, password, role) => {
        try {
            const { data } = await api.post('/auth/register', { name, email, password, role });
            
            setUser({ id: data._id, name: data.name, email: data.email, role: data.role });
            localStorage.setItem('user', JSON.stringify({ id: data._id, name: data.name, email: data.email, role: data.role }));
            localStorage.setItem('token', data.token);

            return data;
        } catch (error) {
            throw error;
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
        localStorage.removeItem('token');
    };

    const value = {
        user,
        login,
        register,
        logout,
        isAuthenticated: !!user,
        loading
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
