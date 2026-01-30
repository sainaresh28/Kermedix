// Mock data for the health record management system

export interface HealthRecord {
  id: string;
  patientName: string;
  workerId: string;
  age: number;
  gender: 'male' | 'female' | 'other';
  date: string;
  doctor: string;
  diagnosis: string;
  prescription: string;
  symptoms?: string;
  vital?: {
    bp: string;
    pulse: number;
    temperature: number;
    weight: number;
  };
  followUpDate?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'worker' | 'doctor' | 'admin';
  workerId?: string;
  specialization?: string;
  hospital?: string;
  contact: string;
  dateOfBirth?: string;
  address?: string;
}

export interface Vaccination {
  id: string;
  workerId: string;
  vaccineName: string;
  date: string;
  nextDueDate?: string;
  batchNumber: string;
  administeredBy: string;
}

export interface Analytics {
  totalWorkers: number;
  totalRecords: number;
  totalDoctors: number;
  monthlyRecords: Array<{ month: string; count: number }>;
  diseaseStats: Array<{ disease: string; count: number }>;
  vaccinationCoverage: Array<{ vaccine: string; coverage: number }>;
  ageGroups: Array<{ group: string; count: number }>;
}

// Mock health records
export const mockHealthRecords: HealthRecord[] = [
  {
    id: '1',
    patientName: 'Ramesh Kumar',
    workerId: 'WRK001',
    age: 32,
    gender: 'male',
    date: '2024-01-15',
    doctor: 'Dr. Priya Kumar',
    diagnosis: 'Routine Health Checkup',
    prescription: 'Vitamin D supplements, regular exercise',
    symptoms: 'General fatigue',
    vital: { bp: '120/80', pulse: 75, temperature: 98.6, weight: 68 },
    followUpDate: '2024-04-15'
  },
  {
    id: '2',
    patientName: 'Suresh Mandal',
    workerId: 'WRK002',
    age: 28,
    gender: 'male',
    date: '2024-01-08',
    doctor: 'Dr. Rajesh Nair',
    diagnosis: 'Respiratory Infection',
    prescription: 'Antibiotics (Amoxicillin 500mg), rest for 3 days',
    symptoms: 'Cough, fever, difficulty breathing',
    vital: { bp: '118/75', pulse: 88, temperature: 101.2, weight: 65 },
    followUpDate: '2024-01-18'
  },
  {
    id: '3',
    patientName: 'Deepak Singh',
    workerId: 'WRK003',
    age: 35,
    gender: 'male',
    date: '2023-12-22',
    doctor: 'Dr. Meera Joseph',
    diagnosis: 'Hypertension Monitoring',
    prescription: 'Continue BP medication (Amlodipine 5mg), low sodium diet',
    symptoms: 'Headache, dizziness',
    vital: { bp: '145/95', pulse: 82, temperature: 98.4, weight: 72 },
    followUpDate: '2024-02-22'
  },
  {
    id: '4',
    patientName: 'Md. Shahid Ali',
    workerId: 'WRK004',
    age: 29,
    gender: 'male',
    date: '2023-12-10',
    doctor: 'Dr. Suresh Kumar',
    diagnosis: 'Work-related Injury',
    prescription: 'Physiotherapy sessions, pain relief (Ibuprofen 400mg)',
    symptoms: 'Lower back pain, muscle strain',
    vital: { bp: '125/82', pulse: 76, temperature: 98.8, weight: 70 },
    followUpDate: '2024-01-10'
  },
  {
    id: '5',
    patientName: 'Ravi Chakraborty',
    workerId: 'WRK005',
    age: 26,
    gender: 'male',
    date: '2023-11-28',
    doctor: 'Dr. Priya Kumar',
    diagnosis: 'Annual Vaccination',
    prescription: 'Hepatitis B vaccination completed, next dose due in 6 months',
    symptoms: 'None',
    vital: { bp: '115/70', pulse: 72, temperature: 98.2, weight: 62 },
    followUpDate: '2024-05-28'
  }
];

// Mock users
export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Ramesh Kumar',
    email: 'ramesh@example.com',
    role: 'worker',
    workerId: 'WRK001',
    contact: '+91 9876543210',
    dateOfBirth: '1992-05-15',
    address: 'Kochi, Kerala'
  },
  {
    id: '2',
    name: 'Dr. Priya Kumar',
    email: 'priya.kumar@hospital.com',
    role: 'doctor',
    specialization: 'General Medicine',
    hospital: 'Kochi Medical Center',
    contact: '+91 9876543211',
    address: 'Ernakulam, Kerala'
  },
  {
    id: '3',
    name: 'Admin User',
    email: 'admin@KerMedixhealth.gov.in',
    role: 'admin',
    contact: '+91 9876543212',
    address: 'Thiruvananthapuram, Kerala'
  }
];

// Mock vaccination records
export const mockVaccinations: Vaccination[] = [
  {
    id: '1',
    workerId: 'WRK001',
    vaccineName: 'Hepatitis B',
    date: '2023-11-28',
    nextDueDate: '2024-05-28',
    batchNumber: 'HB2023001',
    administeredBy: 'Dr. Priya Kumar'
  },
  {
    id: '2',
    workerId: 'WRK001',
    vaccineName: 'Tetanus',
    date: '2023-06-15',
    nextDueDate: '2033-06-15',
    batchNumber: 'TET2023015',
    administeredBy: 'Dr. Rajesh Nair'
  },
  {
    id: '3',
    workerId: 'WRK002',
    vaccineName: 'COVID-19 Booster',
    date: '2023-12-01',
    batchNumber: 'COV2023121',
    administeredBy: 'Dr. Meera Joseph'
  }
];

// Mock analytics data
export const mockAnalytics: Analytics = {
  totalWorkers: 1247,
  totalRecords: 3891,
  totalDoctors: 28,
  monthlyRecords: [
    { month: 'Jan', count: 45 },
    { month: 'Feb', count: 52 },
    { month: 'Mar', count: 38 },
    { month: 'Apr', count: 41 },
    { month: 'May', count: 49 },
    { month: 'Jun', count: 55 }
  ],
  diseaseStats: [
    { disease: 'Respiratory Infections', count: 23 },
    { disease: 'Hypertension', count: 18 },
    { disease: 'Work Injuries', count: 15 },
    { disease: 'Skin Conditions', count: 12 },
    { disease: 'Gastrointestinal', count: 8 }
  ],
  vaccinationCoverage: [
    { vaccine: 'Hepatitis B', coverage: 85 },
    { vaccine: 'Tetanus', coverage: 92 },
    { vaccine: 'COVID-19', coverage: 78 },
    { vaccine: 'Influenza', coverage: 64 }
  ],
  ageGroups: [
    { group: '18-25', count: 245 },
    { group: '26-35', count: 512 },
    { group: '36-45', count: 348 },
    { group: '46-55', count: 115 },
    { group: '56+', count: 27 }
  ]
};