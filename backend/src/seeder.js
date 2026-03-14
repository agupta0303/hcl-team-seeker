require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/user/User');
const connectDB = require('./config/db');

const seedUsers = async () => {
    try {
        await connectDB();

        // Clear existing users to prevent duplicates if run multiple times
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

        // Insert documents one by one to trigger the `pre('save')` hooks for bcrypt hashing
        for (const userData of demoUsers) {
            const user = new User(userData);
            await user.save();
        }

        console.log('Demo users seeded successfully!');
        process.exit();
    } catch (error) {
        console.error('Error seeding users:', error);
        process.exit(1);
    }
};

seedUsers();
