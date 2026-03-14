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
    },
    {
        name: "Diabetes",
        risk: "MEDIUM RISK",
        description: "A chronic condition that affects how your body turns food into energy.",
        riskFactors: ["Being overweight", "Age 45 or older", "Family history", "Physical inactivity", "High blood pressure"],
    },
    {
        name: "Hypertension (High Blood Pressure)",
        risk: "LOW RISK",
        description: "A condition in which the force of the blood against the artery walls is too high.",
        riskFactors: ["Excess salt intake", "Stress", "Obesity", "Lack of exercise", "Family history"],
    },
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

module.exports = router;
