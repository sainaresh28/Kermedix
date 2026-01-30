import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '@/components/DashboardLayout';
import QRCodeGenerator from '@/components/QRCodeGenerator';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { 
  User, Mail, Phone, MapPin, Calendar, Shield, 
  Edit3, Save, Camera, QrCode, Download, 
  CheckCircle, AlertCircle, Clock, ArrowLeft
} from 'lucide-react';

const Profile = () => {
  const { t } = useTranslation();
  const visibleElements = useScrollAnimation();
  const [isEditing, setIsEditing] = useState(false);
  const [showQR, setShowQR] = useState(false);

  // Mock user data
  const [userData, setUserData] = useState({
    name: 'Ramesh Kumar',
    workerId: 'WRK001',
    email: 'ramesh.kumar@email.com',
    phone: '+91 9876543210',
    age: '32',
    gender: 'Male',
    bloodGroup: 'B+',
    address: 'Kochi, Kerala, India',
    emergencyContact: '+91 9876543211',
    emergencyName: 'Priya Kumar',
    occupation: 'Construction Worker',
    employer: 'Kerala Construction Ltd.',
    joinDate: '2023-01-15',
    healthId: 'KL-WRK001'
  });

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to backend
  };

  const profileCompleteness = 85;
  
  const healthStats = [
    { label: 'Health Score', value: '92%', status: 'excellent', icon: CheckCircle },
    { label: 'Last Checkup', value: '2 weeks ago', status: 'recent', icon: Calendar },
    { label: 'Vaccinations', value: 'Up to date', status: 'current', icon: Shield },
    { label: 'Next Appointment', value: 'Feb 15', status: 'scheduled', icon: Clock }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent': return 'text-green-600';
      case 'recent': return 'text-blue-600';  
      case 'current': return 'text-green-600';
      case 'scheduled': return 'text-purple-600';
      default: return 'text-gray-600';
    }
  };

  const qrData = JSON.stringify({
    workerId: userData.workerId,
    name: userData.name,
    healthId: userData.healthId,
    issuedBy: 'KerMedix Health System'
  });

  const navigate = useNavigate();

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="relative bg-black text-white py-16 mb-8 rounded-lg">
          <Button
            onClick={() => navigate(-1)}
            variant="outline"
            className="absolute top-4 left-4 border-2 border-white text-white hover:bg-white hover:text-black"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Profile Management</h1>
            <nav className="text-sm text-gray-300">
              <span>Dashboard</span> <span className="mx-2">›</span> 
              <span>Profile</span>
            </nav>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Sidebar - Profile Actions */}
          <div className="lg:col-span-1">
            <Card className="bg-black text-white border-2 border-black hover-lift">
              <CardHeader>
                <CardTitle className="text-white">Profile Actions</CardTitle>
                <p className="text-gray-300">Manage your personal information</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center mb-6">
                  <div className="relative inline-block">
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                      <User className="h-12 w-12 text-black" />
                    </div>
                    <button className="absolute -bottom-2 -right-2 bg-white text-black rounded-full p-2 hover:bg-gray-200 border-2 border-black">
                      <Camera className="h-4 w-4" />
                    </button>
                  </div>
                  <h3 className="font-semibold text-white">{userData.name}</h3>
                  <p className="text-gray-300 text-sm">ID: {userData.workerId}</p>
                </div>

                <div className="space-y-3">
                  <Button 
                    onClick={() => setIsEditing(!isEditing)}
                    className="w-full bg-white text-black hover:bg-gray-200"
                  >
                    {isEditing ? (
                      <>
                        <Save className="h-4 w-4 mr-2" />
                        Save Changes
                      </>
                    ) : (
                      <>
                        <Edit3 className="h-4 w-4 mr-2" />
                        Edit Profile
                      </>
                    )}
                  </Button>
                  
                  <Button 
                    onClick={() => setShowQR(!showQR)}
                    variant="outline"
                    className="w-full border-2 border-white text-white hover:bg-white hover:text-black"
                  >
                    <QrCode className="h-4 w-4 mr-2" />
                    {showQR ? 'Hide QR Code' : 'Show Health ID'}
                  </Button>
                  
                  <Button 
                    variant="outline"
                    className="w-full border-2 border-white text-white hover:bg-white hover:text-black"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download Profile
                  </Button>
                </div>

                {/* Profile Completeness */}
                <div className="mt-6 p-4 bg-white rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-black font-medium">Profile Complete</span>
                    <span className="text-sm font-bold text-black">{profileCompleteness}%</span>
                  </div>
                  <div className="w-full bg-gray-300 rounded-full h-2">
                    <div 
                      className="bg-black h-2 rounded-full progress-fill" 
                      style={{ width: `${profileCompleteness}%` }}
                    ></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Health Stats */}
            <div className="grid grid-cols-1 gap-4 mt-6">
              {healthStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card key={stat.label} className="hover-lift border-2 border-black">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <Icon className="h-5 w-5 text-black" />
                        <div>
                          <p className="font-medium text-black text-sm">{stat.label}</p>
                          <p className="text-xs text-gray-600">{stat.value}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Right Content Area */}
          <div className="lg:col-span-2 space-y-8">
            {/* QR Code Section */}
            {showQR && (
              <Card className="hover-lift border-2 border-black">
                <CardHeader>
                  <CardTitle className="text-black">Digital Health ID</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <QRCodeGenerator data={qrData} size={200} />
                  <p className="mt-4 text-black font-medium">
                    Health ID: {userData.healthId}
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    Show this QR code to healthcare providers for quick access to your records
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Personal Information */}
            <Card className="hover-lift border-2 border-black">
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-black">
                  Personal Information
                  {!isEditing && (
                    <Button variant="outline" size="sm" onClick={() => setIsEditing(true)} className="border-2 border-black">
                      <Edit3 className="h-4 w-4 mr-2" />
                      Edit
                    </Button>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium text-gray-600">Full Name</label>
                    {isEditing ? (
                      <Input
                        value={userData.name}
                        onChange={(e) => setUserData({...userData, name: e.target.value})}
                        className="mt-1 border-2 border-black"
                      />
                    ) : (
                      <p className="text-black font-medium mt-1">{userData.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-600">Worker ID</label>
                    <p className="text-black font-mono mt-1">{userData.workerId}</p>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-600">Email</label>
                    {isEditing ? (
                      <Input
                        type="email"
                        value={userData.email}
                        onChange={(e) => setUserData({...userData, email: e.target.value})}
                        className="mt-1 border-2 border-black"
                      />
                    ) : (
                      <p className="text-black mt-1">{userData.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-600">Phone Number</label>
                    {isEditing ? (
                      <Input
                        value={userData.phone}
                        onChange={(e) => setUserData({...userData, phone: e.target.value})}
                        className="mt-1 border-2 border-black"
                      />
                    ) : (
                      <p className="text-black mt-1">{userData.phone}</p>
                    )}
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-600">Age</label>
                    {isEditing ? (
                      <Input
                        value={userData.age}
                        onChange={(e) => setUserData({...userData, age: e.target.value})}
                        className="mt-1 border-2 border-black"
                      />
                    ) : (
                      <p className="text-black mt-1">{userData.age} years</p>
                    )}
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-600">Gender</label>
                    {isEditing ? (
                      <select 
                        value={userData.gender}
                        onChange={(e) => setUserData({...userData, gender: e.target.value})}
                        className="w-full p-2 mt-1 border-2 border-black rounded-md bg-white text-black"
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    ) : (
                      <p className="text-black mt-1">{userData.gender}</p>
                    )}
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-600">Blood Group</label>
                    {isEditing ? (
                      <Input
                        value={userData.bloodGroup}
                        onChange={(e) => setUserData({...userData, bloodGroup: e.target.value})}
                        className="mt-1 border-2 border-black"
                      />
                    ) : (
                      <p className="text-black mt-1">
                        <Badge variant="secondary" className="bg-black text-white">{userData.bloodGroup}</Badge>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-600">Health ID</label>
                    <p className="text-black font-mono mt-1">{userData.healthId}</p>
                  </div>
                </div>

                <div className="mt-6">
                  <label className="text-sm font-medium text-gray-600">Address</label>
                  {isEditing ? (
                    <Textarea
                      value={userData.address}
                      onChange={(e) => setUserData({...userData, address: e.target.value})}
                      className="mt-1 border-2 border-black"
                      rows={3}
                    />
                  ) : (
                    <p className="text-black mt-1">{userData.address}</p>
                  )}
                </div>

                {isEditing && (
                  <div className="flex gap-3 mt-6">
                    <Button onClick={handleSave} className="bg-black text-white hover:bg-gray-900">
                      <Save className="h-4 w-4 mr-2" />
                      Save Changes
                    </Button>
                    <Button variant="outline" onClick={() => setIsEditing(false)} className="border-2 border-black">
                      Cancel
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="hover-lift border-2 border-black">
              <CardHeader>
                <CardTitle className="text-black">Emergency Contact</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium text-gray-600">Contact Name</label>
                    {isEditing ? (
                      <Input
                        value={userData.emergencyName}
                        onChange={(e) => setUserData({...userData, emergencyName: e.target.value})}
                        className="mt-1 border-2 border-black"
                      />
                    ) : (
                      <p className="text-black font-medium mt-1">{userData.emergencyName}</p>
                    )}
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-600">Phone Number</label>
                    {isEditing ? (
                      <Input
                        value={userData.emergencyContact}
                        onChange={(e) => setUserData({...userData, emergencyContact: e.target.value})}
                        className="mt-1 border-2 border-black"
                      />
                    ) : (
                      <p className="text-black mt-1">{userData.emergencyContact}</p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Work Information */}
            <Card className="hover-lift border-2 border-black">
              <CardHeader>
                <CardTitle className="text-black">Work Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium text-gray-600">Occupation</label>
                    <p className="text-black font-medium mt-1">{userData.occupation}</p>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-600">Employer</label>
                    <p className="text-black mt-1">{userData.employer}</p>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-600">Join Date</label>
                    <p className="text-black mt-1">{userData.joinDate}</p>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-600">Work Experience</label>
                    <p className="text-black mt-1">1+ years</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Profile;