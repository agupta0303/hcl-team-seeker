require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/user/User');
const connectDB = require('./config/db');

const seedUsers = async () => {
    try {
        await connectDB();

<<<<<<< HEAD
        // Clear existing collections
=======
        // Clear existing users to prevent duplicates if run multiple times
>>>>>>> 493331fbab929bf44385670dbfb85a564a6a0963
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

<<<<<<< HEAD
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
=======
        // Insert documents one by one to trigger the `pre('save')` hooks for bcrypt hashing
        for (const userData of demoUsers) {
            const user = new User(userData);
            await user.save();
        }

        console.log('Demo users seeded successfully!');
        process.exit();
    } catch (error) {
        console.error('Error seeding users:', error);
>>>>>>> 493331fbab929bf44385670dbfb85a564a6a0963
        process.exit(1);
    }
};

<<<<<<< HEAD
seedUsers();
=======
seedUsers();
>>>>>>> 493331fbab929bf44385670dbfb85a564a6a0963
