const express = require('express');
const router = express.Router();
const { protect } = require('../middlewares/authMiddleware');

// Mock data to replace hardcoded arrays in components
const stats = [
    { title: "Total Patients", value: "1,245" },
    { title: "Appointments Today", value: "38" },
    { title: "High Risk Patients", value: "52" },
    { title: "Messages Pending", value: "17" },
];

const alerts = [
    { name: "John Smith", condition: "High Blood Pressure", risk: "High Risk" },
    { name: "Maria Garcia", condition: "Diabetes", risk: "Medium Risk" },
    { name: "David Lee", condition: "Cardiovascular Risk", risk: "High Risk" },
];

const doctors = [
    { id: 1, name: "Dr. Jane Doe", email: "jane.doe@example.com", specialty: "Cardiology", license: "MD123456", org: "City Hospital", patients: 150, joined: "6/15/2015" },
    { id: 2, name: "Dr. John Smith", email: "john.smith@example.com", specialty: "Endocrinology", license: "MD789012", org: "County Clinic", patients: 120, joined: "3/20/2018" },
    { id: 3, name: "Dr. Emily Johnson", email: "emily.johnson@example.com", specialty: "Internal Medicine", license: "MD345678", org: "Community Health Center", patients: 90, joined: "8/10/2020" },
];

const recentPatients = [
    { id: 1, name: "John Smith", age: 45, lastVisit: "3/10/2026", riskLevel: "MEDIUM", conditions: "Hypertension, Pre-diabetes" },
    { id: 2, name: "Sarah Johnson", age: 52, lastVisit: "3/12/2026", riskLevel: "HIGH", conditions: "Type 2 Diabetes, Hypertension, High Cholesterol" },
    { id: 3, name: "Michael Brown", age: 38, lastVisit: "3/8/2026", riskLevel: "LOW", conditions: "None" },
    { id: 4, name: "Emily Davis", age: 29, lastVisit: "3/11/2026", riskLevel: "LOW", conditions: "None" },
    { id: 5, name: "Robert Wilson", age: 61, lastVisit: "3/9/2026", riskLevel: "HIGH", conditions: "Cardiovascular Disease, Hypertension" },
];

const diseases = [
    {
        name: "Cardiovascular Disease",
        risk: "HIGH RISK",
        description: "A class of diseases that involve the heart or blood vessels, including coronary artery disease, heart attack, and stroke.",
        riskFactors: ["High blood pressure", "High cholesterol", "Smoking", "Diabetes", "Obesity", "Family history"],
        warningSigns: ["Chest pain or discomfort", "Shortness of breath", "Pain, numbness, weakness or coldness in your legs or arms", "Pain in the neck, jaw, throat, upper abdomen or back"],
        prevention: ["Eat a healthy diet", "Maintain a healthy weight", "Exercise regularly", "Don't smoke", "Limit alcohol"],
        screening: ["Blood pressure screening", "Cholesterol testing", "Blood sugar tests"],
    },
    {
        name: "Diabetes",
        risk: "MEDIUM RISK",
        description: "A chronic condition that affects how your body turns food into energy.",
        riskFactors: ["Being overweight", "Age 45 or older", "Family history", "Physical inactivity", "High blood pressure"],
        warningSigns: ["Increased thirst", "Frequent urination", "Extreme hunger", "Unexplained weight loss", "Fatigue", "Blurred vision"],
        prevention: ["Lose extra weight", "Be more physically active", "Eat healthy plant foods", "Eat healthy fats", "Make healthier food choices"],
        screening: ["A1C test", "Fasting blood sugar test", "Glucose tolerance test"],
    },
    {
        name: "Hypertension (High Blood Pressure)",
        risk: "LOW RISK",
        description: "A condition in which the force of the blood against the artery walls is too high.",
        riskFactors: ["Excess salt intake", "Stress", "Obesity", "Lack of exercise", "Family history"],
        warningSigns: ["Often has no symptoms (the 'silent killer')", "Severe headaches", "Nosebleeds", "Fatigue or confusion", "Vision problems"],
        prevention: ["Eat a healthy diet with less salt", "Exercise regularly", "Maintain a healthy weight", "Limit alcohol", "Manage stress"],
        screening: ["Regular blood pressure checks at doctor's visits", "Home blood pressure monitoring"],
    },
];

let goals = [
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

// Admin routes
router.get('/admin/dashboard', protect, (req, res) => {
    res.json({ stats, alerts });
});

router.get('/admin/profile', protect, (req, res) => {
    res.json({
        firstName: req.user.name.split(' ')[0] || "Admin",
        lastName: req.user.name.split(' ')[1] || "User",
        email: req.user.email || "admin@example.com",
        role: req.user.role || "Administrator"
    });
});

// Doctor Management routes
router.get('/doctors', protect, (req, res) => {
    res.json(doctors);
});

// Provider routes
router.get('/provider/dashboard', protect, (req, res) => {
    // Return sample dashboard stats for the provider as well, and the recent patients
    res.json({
        activePatients: 5,
        highRiskPatients: 2,
        upcomingAppointments: 8,
        recentPatients
    });
});

// Patient routes
router.get('/patient/diseases', protect, (req, res) => {
    res.json(diseases);
});

router.get('/patient/profile', protect, (req, res) => {
    res.json({
        fullName: req.user.name || "Patient Name",
        dateOfBirth: "05/12/1984", // Mock
        gender: "Male",
        phone: "(555) 123-4567",
        email: req.user.email,
        bloodType: "O+",
        primaryPhysician: "Dr. Sarah Miller",
        insuranceProvider: "BlueCross Health"
    });
});

router.get('/patient/goals', protect, (req, res) => {
    res.json(goals);
});

router.post('/patient/goals', protect, (req, res) => {
    const { title, description, target, unit, deadlineDays } = req.body;
    
    const newGoal = {
        id: goals.length > 0 ? Math.max(...goals.map(g => g.id)) + 1 : 1,
        title: title || 'New Goal',
        description: description || '',
        progress: 0,
        target: Number(target) || 100,
        unit: unit || 'units',
        deadlineDays: Number(deadlineDays) || 30,
    };
    
    goals.push(newGoal);
    res.status(201).json(newGoal);
});

module.exports = router;
