import { useState } from 'react';
import { Link } from 'react-router-dom';
import { mockHealthRecords, mockVaccinations } from '@/data/mockData';
import DashboardLayout from '@/components/DashboardLayout';
import HealthRecordsTable from '@/components/HealthRecordsTable';
import QRCodeGenerator from '@/components/QRCodeGenerator';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Download, QrCode, Calendar, Phone, FileText, Bell, AlertTriangle, Video, Clock } from 'lucide-react';

const WorkerDashboard = () => {
  const [showQRCode, setShowQRCode] = useState(false);
  
  // Mock worker data
  const workerId = 'WRK001';
  const workerName = 'Ramesh Kumar';
  const workerAge = 32;
  const workerGender = 'Male';
  const workerOccupation = 'Construction Worker';
  const workerLanguage = 'Hindi';
  const workerPhone = '+91 9876543210';
  const workerLocation = 'Kochi, Kerala';
  
  const workerRecords = mockHealthRecords.filter(record => record.workerId === workerId);
  const workerVaccinations = mockVaccinations.filter(vac => vac.workerId === workerId);
  
  const qrData = JSON.stringify({
    workerId: workerId,
    name: workerName,
    healthId: `KL-${workerId}`,
    issuedBy: 'Kerala Health System'
  });

  // Mock appointments
  const upcomingAppointments = [
    { id: 1, doctor: 'Dr. Priya Kumar', date: '2024-02-15', time: '10:30 AM', type: 'Follow-up', status: 'Confirmed' },
    { id: 2, doctor: 'Dr. Rajesh Nair', date: '2024-02-20', time: '02:00 PM', type: 'General Checkup', status: 'Pending' }
  ];

  // Mock notifications
  const notifications = [
    { id: 1, type: 'reminder', message: 'Annual health checkup due next week', date: '2024-02-08' },
    { id: 2, type: 'alert', message: 'COVID-19 vaccination booster available', date: '2024-02-05' },
    { id: 3, type: 'reminder', message: 'Blood pressure medication refill needed', date: '2024-02-03' }
  ];

  return (
    <DashboardLayout userRole="Migrant Worker" sidebarItems={[]}>
      <div className="space-y-6">
        {/* Header Section */}
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-3xl font-bold text-black">My Health Dashboard</h2>
            <p className="text-gray-600 mt-1">Worker ID: <span className="font-mono">{workerId}</span></p>
          </div>
          
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              onClick={() => setShowQRCode(!showQRCode)}
              className="gap-2 border-2 border-black hover:bg-gray-100"
            >
              <QrCode className="h-4 w-4" />
              {showQRCode ? 'Hide QR Code' : 'Show Health ID'}
            </Button>
            <Button className="gap-2 bg-red-600 hover:bg-red-700 text-white">
              <Phone className="h-4 w-4" />
              Emergency SOS
            </Button>
          </div>
        </div>

        {/* QR Code Card */}
        {showQRCode && (
          <Card className="border-2 border-black">
            <CardHeader>
              <CardTitle className="text-black">Digital Health ID - QR Code</CardTitle>
              <CardDescription>
                Show this QR code to healthcare providers for quick access to your records
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <div className="text-center">
                <QRCodeGenerator data={qrData} size={200} />
                <p className="mt-3 text-sm text-gray-600 font-mono">
                  Health ID: KL-{workerId}
                </p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="border-2 border-black">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-black">{workerRecords.length}</div>
                  <p className="text-xs text-gray-600 mt-1">Total Records</p>
                </div>
                <FileText className="h-8 w-8 text-gray-400" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-2 border-black">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-black">{workerVaccinations.length}</div>
                  <p className="text-xs text-gray-600 mt-1">Vaccinations</p>
                </div>
                <FileText className="h-8 w-8 text-gray-400" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-2 border-black">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-black">{upcomingAppointments.length}</div>
                  <p className="text-xs text-gray-600 mt-1">Upcoming Appointments</p>
                </div>
                <Calendar className="h-8 w-8 text-gray-400" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-2 border-black">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-black">{notifications.length}</div>
                  <p className="text-xs text-gray-600 mt-1">Notifications</p>
                </div>
                <Bell className="h-8 w-8 text-gray-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Tabs */}
        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full grid-cols-5 border-2 border-black bg-white">
            <TabsTrigger value="profile" className="data-[state=active]:bg-black data-[state=active]:text-white">Profile</TabsTrigger>
            <TabsTrigger value="records" className="data-[state=active]:bg-black data-[state=active]:text-white">Health Records</TabsTrigger>
            <TabsTrigger value="appointments" className="data-[state=active]:bg-black data-[state=active]:text-white">Appointments</TabsTrigger>
            <TabsTrigger value="vaccinations" className="data-[state=active]:bg-black data-[state=active]:text-white">Vaccinations</TabsTrigger>
            <TabsTrigger value="notifications" className="data-[state=active]:bg-black data-[state=active]:text-white">Notifications</TabsTrigger>
          </TabsList>
          
          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-4">
            <Card className="border-2 border-black">
              <CardHeader>
                <CardTitle className="text-black">Personal Information</CardTitle>
                <CardDescription>Your profile and contact details</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium text-gray-600">Full Name</label>
                    <p className="text-black text-lg font-medium">{workerName}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Worker ID</label>
                    <p className="text-black text-lg font-mono">{workerId}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Age</label>
                    <p className="text-black text-lg">{workerAge} years</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Gender</label>
                    <p className="text-black text-lg">{workerGender}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Occupation</label>
                    <p className="text-black text-lg">{workerOccupation}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Language</label>
                    <p className="text-black text-lg">{workerLanguage}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Contact Number</label>
                    <p className="text-black text-lg">{workerPhone}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Location</label>
                    <p className="text-black text-lg">{workerLocation}</p>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-gray-50 border-2 border-gray-200 rounded-lg">
                  <h4 className="font-semibold text-black mb-2">Insurance & Benefits</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">ESIC Coverage</span>
                      <Badge className="bg-black text-white">Active</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Ayushman Bharat</span>
                      <Badge className="bg-black text-white">Eligible</Badge>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 flex gap-3">
                  <Button className="bg-black text-white hover:bg-gray-900">Update Profile</Button>
                  <Button variant="outline" className="border-2 border-black hover:bg-gray-100">Change Password</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Health Records Tab */}
          <TabsContent value="records" className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold text-black">Medical History</h3>
              <Button className="gap-2 bg-black text-white hover:bg-gray-900">
                <Download className="h-4 w-4" />
                Download All Records
              </Button>
            </div>
            <Card className="border-2 border-black">
              <CardContent className="p-6">
                <HealthRecordsTable records={workerRecords} showActions={true} />
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Appointments Tab */}
          <TabsContent value="appointments" className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold text-black">Appointments & Telemedicine</h3>
              <Button className="gap-2 bg-black text-white hover:bg-gray-900">
                <Calendar className="h-4 w-4" />
                Book New Appointment
              </Button>
            </div>
            
            <div className="grid gap-4">
              {upcomingAppointments.map((apt) => (
                <Card key={apt.id} className="border-2 border-black">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="space-y-2">
                        <div>
                          <h4 className="font-bold text-black text-lg">{apt.doctor}</h4>
                          <p className="text-gray-600">{apt.type}</p>
                        </div>
                        <div className="flex gap-4 text-sm">
                          <div className="flex items-center gap-1 text-gray-600">
                            <Calendar className="h-4 w-4" />
                            {apt.date}
                          </div>
                          <div className="flex items-center gap-1 text-gray-600">
                            <Clock className="h-4 w-4" />
                            {apt.time}
                          </div>
                        </div>
                        <Badge className={apt.status === 'Confirmed' ? 'bg-black text-white' : 'bg-gray-300 text-black'}>
                          {apt.status}
                        </Badge>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" className="border-2 border-black hover:bg-gray-100">
                          Reschedule
                        </Button>
                        <Button className="gap-2 bg-black text-white hover:bg-gray-900">
                          <Video className="h-4 w-4" />
                          Join Teleconsultation
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-2 border-black">
              <CardHeader>
                <CardTitle className="text-black">Past Appointments</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">No past appointments to display</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Vaccinations Tab */}
          <TabsContent value="vaccinations" className="space-y-4">
            <h3 className="text-xl font-bold text-black">Vaccination Timeline</h3>
            <Card className="border-2 border-black">
              <CardContent className="p-6">
                <div className="overflow-hidden">
                  <table className="healthcare-table">
                    <thead>
                      <tr>
                        <th>Vaccine</th>
                        <th>Date Given</th>
                        <th>Next Due</th>
                        <th>Batch Number</th>
                        <th>Administered By</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {workerVaccinations.map((vaccination) => (
                        <tr key={vaccination.id}>
                          <td className="font-medium text-black">{vaccination.vaccineName}</td>
                          <td className="text-gray-700">{vaccination.date}</td>
                          <td className="text-gray-700">{vaccination.nextDueDate || 'Complete'}</td>
                          <td className="font-mono text-sm text-gray-600">{vaccination.batchNumber}</td>
                          <td className="text-gray-700">{vaccination.administeredBy}</td>
                          <td>
                            <Button variant="outline" size="sm" className="border-black hover:bg-gray-100">
                              <Download className="h-3 w-3 mr-1" />
                              Certificate
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Notifications Tab */}
          <TabsContent value="notifications" className="space-y-4">
            <h3 className="text-xl font-bold text-black">Health Notifications & Reminders</h3>
            <div className="space-y-3">
              {notifications.map((notif) => (
                <Alert key={notif.id} className="border-2 border-black">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription className="flex justify-between items-center">
                    <div>
                      <p className="font-medium text-black">{notif.message}</p>
                      <p className="text-sm text-gray-600 mt-1">{notif.date}</p>
                    </div>
                    <Button variant="outline" size="sm" className="border-black hover:bg-gray-100">
                      View Details
                    </Button>
                  </AlertDescription>
                </Alert>
              ))}
            </div>

            <Card className="border-2 border-black">
              <CardHeader>
                <CardTitle className="text-black">Community Health Alerts</CardTitle>
              </CardHeader>
              <CardContent>
                <Alert className="border-2 border-red-500 bg-red-50">
                  <AlertTriangle className="h-4 w-4 text-red-600" />
                  <AlertDescription>
                    <p className="font-medium text-red-900">Dengue Alert - Kochi Region</p>
                    <p className="text-sm text-red-700 mt-1">Increased cases reported. Take preventive measures and use mosquito repellent.</p>
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Quick Actions */}
        <Card className="border-2 border-black">
          <CardHeader>
            <CardTitle className="text-black">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button variant="outline" className="h-20 flex-col gap-2 border-2 border-black hover:bg-gray-100">
                <FileText className="h-6 w-6" />
                Add Self Record
              </Button>
              <Button variant="outline" className="h-20 flex-col gap-2 border-2 border-black hover:bg-gray-100">
                <Calendar className="h-6 w-6" />
                Schedule Checkup
              </Button>
              <Button variant="outline" className="h-20 flex-col gap-2 border-2 border-black hover:bg-gray-100">
                <Bell className="h-6 w-6" />
                Medication Reminders
              </Button>
              <Button variant="outline" className="h-20 flex-col gap-2 border-2 border-black hover:bg-gray-100">
                <Download className="h-6 w-6" />
                Download Reports
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default WorkerDashboard;
