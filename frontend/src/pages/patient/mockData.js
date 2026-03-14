import { Activity, Moon, Droplet, Heart, Thermometer, Weight } from 'lucide-react';

export const healthMetrics = [
  {
    id: 'steps',
    title: 'Daily Steps',
    icon: Activity,
    value: '8,432',
    target: '10,000',
    unit: 'steps',
    progress: 84,
    status: 'good',
    trend: '+12% from yesterday',
    trendUp: true
  },
  {
    id: 'sleep',
    title: 'Sleep Duration',
    icon: Moon,
    value: '7.5',
    target: '8.0',
    unit: 'hrs',
    progress: 94,
    status: 'excellent',
    trend: '+30m from yesterday',
    trendUp: true
  },
  {
    id: 'glucose',
    title: 'Blood Glucose',
    icon: Droplet,
    value: '95',
    target: '100',
    unit: 'mg/dL',
    progress: 95,
    status: 'good',
    trend: '-5mg/dL from last check',
    trendUp: false
  },
  {
    id: 'heart_rate',
    title: 'Resting Heart Rate',
    icon: Heart,
    value: '72',
    target: '60-100',
    unit: 'bpm',
    progress: 72,
    status: 'good',
    trend: 'Consistent',
    trendUp: true
  },
  {
    id: 'temperature',
    title: 'Body Temperature',
    icon: Thermometer,
    value: '98.6',
    target: '98.6',
    unit: '°F',
    progress: 100,
    status: 'excellent',
    trend: 'Normal',
    trendUp: true
  },
  {
    id: 'weight',
    title: 'Body Weight',
    icon: Weight,
    value: '165',
    target: '160',
    unit: 'lbs',
    progress: 96,
    status: 'warning',
    trend: '-1lb from last week',
    trendUp: false
  }
];

export const upcomingAppointments = [
  {
    id: 1,
    doctorName: 'Dr. Sarah Jenkins',
    specialty: 'Cardiologist',
    date: 'Oct 24, 2024',
    time: '10:00 AM',
    type: 'In-person checkup'
  },
  {
    id: 2,
    doctorName: 'Dr. Michael Chen',
    specialty: 'Primary Care',
    date: 'Nov 02, 2024',
    time: '02:30 PM',
    type: 'Telehealth'
  }
];
