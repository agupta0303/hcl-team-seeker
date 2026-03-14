require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/user/User');
const connectDB = require('./config/db');

const seedUsers = async () => {
    try {
        await connectDB();

        // Clear existing collections
        await User.deleteMany();

        const demoUsers = [
            {
                name: 'System Admin',
                email: 'admin@healthcare.com',
                password: 'admin123',
                role: 'Admin'
            },
            {
                name: 'Dr. Smith',
                email: 'dr.smith@healthcare.com',
                password: 'doctor123',
                role: 'Doctor'
            },
            {
                name: 'Demo Patient',
                email: 'patient@healthcare.com',
                password: 'patient123',
                role: 'Patient'
            }
        ];

        let createdUsers = [];
        for (const userData of demoUsers) {
            const user = new User(userData);
            const savedUser = await user.save();
            createdUsers.push(savedUser);
        }

        console.log('Demo Data (Users) seeded successfully!');
        process.exit();
    } catch (error) {
        console.error('Error seeding data:', error);
        process.exit(1);
    }
};

seedUsers();