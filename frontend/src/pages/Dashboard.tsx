import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import DashboardLayout from "@/components/DashboardLayout";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import AnimatedCounter from "@/components/AnimatedCounter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, FileText, TrendingUp, Clock, Eye } from "lucide-react";

// Mock health records data
const mockHealthRecords = [
  {
    id: "REC001",
    date: "2024-01-15",
    doctor: "Dr. Priya Kumar",
    diagnosis: "Routine Health Checkup",
    prescription: "Vitamin D supplements, regular exercise",
    status: "completed"
  },
  {
    id: "REC002", 
    date: "2024-01-08",
    doctor: "Dr. Rajesh Nair",
    diagnosis: "Respiratory Infection",
    prescription: "Antibiotics (Amoxicillin 500mg), rest for 3 days",
    status: "follow-up"
  },
  {
    id: "REC003",
    date: "2023-12-22",
    doctor: "Dr. Meera Joseph",
    diagnosis: "Hypertension Monitoring",
    prescription: "Continue BP medication (Amlodipine 5mg), low sodium diet",
    status: "ongoing"
  },
  {
    id: "REC004",
    date: "2023-12-10",
    doctor: "Dr. Suresh Kumar",
    diagnosis: "Work-related Injury",
    prescription: "Physiotherapy sessions, pain relief (Ibuprofen 400mg)",
    status: "completed"
  },
  {
    id: "REC005",
    date: "2023-11-28",
    doctor: "Dr. Priya Kumar",
    diagnosis: "Annual Vaccination",
    prescription: "Hepatitis B vaccination completed, next dose due in 6 months",
    status: "scheduled"
  }
];

const Dashboard = () => {
  const navigate = useNavigate();
  const visibleElements = useScrollAnimation();

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-black text-white';
      case 'ongoing': return 'bg-gray-700 text-white';
      case 'follow-up': return 'bg-gray-500 text-white';
      case 'scheduled': return 'bg-gray-300 text-black';
      default: return 'bg-gray-100 text-black';
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div 
          className={`flex justify-between items-center fade-in-up ${visibleElements.has('dashboard-header') ? 'visible' : ''}`}
          data-animate="dashboard-header"
        >
          <div>
            <h2 className="text-3xl font-bold text-black">Health Records Overview</h2>
            <p className="text-gray-600 mt-1">Manage and track your medical history</p>
          </div>
          <Button asChild size="lg" className="hover-lift">
            <Link to="/dashboard/add-record" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Add New Record
            </Link>
          </Button>
        </div>

        {/* Enhanced Stats Cards */}
        <div 
          className={`grid grid-cols-1 md:grid-cols-4 gap-6 fade-in-up ${visibleElements.has('stats-cards') ? 'visible' : ''}`}
          data-animate="stats-cards"
          style={{ transitionDelay: '0.2s' }}
        >
          <Card className="hover-lift border-2 border-black">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-black">Total Records</CardTitle>
              <FileText className="h-4 w-4 text-gray-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-black">
                <AnimatedCounter end={mockHealthRecords.length} />
              </div>
              <p className="text-xs text-gray-600">Health records on file</p>
            </CardContent>
          </Card>
          
          <Card className="hover-lift border-2 border-black">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-black">Last Checkup</CardTitle>
              <Calendar className="h-4 w-4 text-gray-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-black">Jan 15</div>
              <p className="text-xs text-gray-600">2024 - Routine checkup</p>
            </CardContent>
          </Card>
          
          <Card className="hover-lift border-2 border-black">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-black">Health Score</CardTitle>
              <TrendingUp className="h-4 w-4 text-gray-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-black">
                <AnimatedCounter end={92} suffix="%" />
              </div>
              <p className="text-xs text-gray-600">Excellent condition</p>
            </CardContent>
          </Card>

          <Card className="hover-lift border-2 border-black">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-black">Next Appointment</CardTitle>
              <Clock className="h-4 w-4 text-gray-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-black">Feb 15</div>
              <p className="text-xs text-gray-600">Follow-up consultation</p>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced Records Table */}
        <Card 
          className={`hover-lift fade-in-up border-2 border-black ${visibleElements.has('records-table') ? 'visible' : ''}`}
          data-animate="records-table"
          style={{ transitionDelay: '0.4s' }}
        >
          <CardHeader>
            <CardTitle className="text-black">Recent Medical Records</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-hidden">
              <table className="healthcare-table">
                <thead>
                  <tr>
                    <th>Record ID</th>
                    <th>Date</th>
                    <th>Doctor</th>
                    <th>Diagnosis</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {mockHealthRecords.map((record, index) => (
                    <tr 
                      key={record.id}
                      className={`cursor-pointer transition-colors hover:bg-secondary/50 grid-item ${visibleElements.has(`record-${index}`) ? 'reveal' : ''}`}
                      data-animate={`record-${index}`}
                      style={{ transitionDelay: `${0.6 + index * 0.1}s` }}
                      onClick={() => navigate(`/dashboard/record/${record.id}`)}
                    >
                      <td className="font-mono text-sm">{record.id}</td>
                      <td className="font-medium">{record.date}</td>
                      <td>{record.doctor}</td>
                      <td>{record.diagnosis}</td>
                      <td>
                        <Badge 
                          variant="secondary"
                          className={getStatusColor(record.status)}
                        >
                          {record.status}
                        </Badge>
                      </td>
                      <td>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate(`/dashboard/record/${record.id}`);
                          }}
                          className="hover-lift"
                        >
                          <Eye className="h-3 w-3 mr-1" />
                          View
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Health Progress Section */}
        <div 
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 fade-in-up ${visibleElements.has('progress-section') ? 'visible' : ''}`}
          data-animate="progress-section"
          style={{ transitionDelay: '0.8s' }}
        >
          <Card className="hover-lift border-2 border-black">
            <CardHeader>
              <CardTitle className="text-black">Health Metrics Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2 text-black">
                    <span className="font-medium">Blood Pressure</span>
                    <span className="text-gray-600">Normal</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-black h-2 rounded-full progress-fill" style={{ width: '85%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-2 text-black">
                    <span className="font-medium">Vaccination Status</span>
                    <span className="text-gray-600">Up to date</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-black h-2 rounded-full progress-fill" style={{ width: '100%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-2 text-black">
                    <span className="font-medium">Health Checkups</span>
                    <span className="text-gray-600">Regular</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-black h-2 rounded-full progress-fill" style={{ width: '92%' }}></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-lift border-2 border-black">
            <CardHeader>
              <CardTitle className="text-black">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <Button 
                  variant="outline" 
                  className="h-20 flex-col gap-2 hover-lift"
                  onClick={() => navigate('/dashboard/add-record')}
                >
                  <FileText className="h-6 w-6" />
                  Add Record
                </Button>
                
                <Button 
                  variant="outline" 
                  className="h-20 flex-col gap-2 hover-lift"
                  onClick={() => navigate('/dashboard/profile')}
                >
                  <Calendar className="h-6 w-6" />
                  Schedule Appointment
                </Button>
                
                <Button 
                  variant="outline" 
                  className="h-20 flex-col gap-2 hover-lift"
                >
                  <TrendingUp className="h-6 w-6" />
                  Health Report
                </Button>
                
                <Button 
                  variant="outline" 
                  className="h-20 flex-col gap-2 hover-lift"
                >
                  <Clock className="h-6 w-6" />
                  Medication Reminders
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;