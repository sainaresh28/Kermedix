import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { mockHealthRecords } from '@/data/mockData';
import DashboardLayout from '@/components/DashboardLayout';
import HealthRecordsTable from '@/components/HealthRecordsTable';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Search, Filter, Download, Plus, FileText, Calendar, Activity, CheckCircle, ArrowLeft } from 'lucide-react';

const HealthRecords = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const visibleElements = useScrollAnimation();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  const filteredRecords = mockHealthRecords.filter(record => {
    const matchesSearch = record.diagnosis.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         record.doctor.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (filterType === 'all') return matchesSearch;
    
    // Simple filtering based on diagnosis keywords
    const diagnosisLower = record.diagnosis.toLowerCase();
    switch (filterType) {
      case 'checkup':
        return matchesSearch && diagnosisLower.includes('checkup');
      case 'vaccination':
        return matchesSearch && diagnosisLower.includes('vaccination');
      case 'treatment':
        return matchesSearch && (diagnosisLower.includes('infection') || diagnosisLower.includes('injury') || diagnosisLower.includes('monitoring'));
      default:
        return matchesSearch;
    }
  });

  const keyFeatures = [
    "Centralized digital recordkeeping for all health interactions",
    "Real-time updates by trained healthcare staff", 
    "Role-based access with privacy controls",
    "Chronic case logs, vaccinations, and visit history",
    "Integration options with ERP or HRMS platforms",
    "Reporting and analytics for institutional insights"
  ];

  const stats = [
    { label: 'Total Records', value: mockHealthRecords.length, icon: FileText },
    { label: 'This Month', value: 8, icon: Calendar },
    { label: 'Active Cases', value: 3, icon: Activity },
    { label: 'Completed', value: 15, icon: CheckCircle }
  ];

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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Digital Health Records</h1>
            <nav className="text-sm text-gray-300">
              <span>Dashboard</span> <span className="mx-2">›</span> 
              <span>Health Records</span>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Sidebar - Quick Actions */}
          <div className="lg:col-span-1">
            <Card className="bg-black text-white border-2 border-black hover-lift">
              <CardHeader>
                <CardTitle className="text-white">Quick Actions</CardTitle>
                <p className="text-gray-300">Manage your health records</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <Input
                    placeholder="Search records..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="bg-white border-2 border-white text-black placeholder:text-gray-500"
                  />
                  
                  <select 
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value)}
                    className="w-full p-3 rounded-md bg-white border-2 border-white text-black"
                  >
                    <option value="all">All Records</option>
                    <option value="checkup">Checkups</option>
                    <option value="vaccination">Vaccinations</option>
                    <option value="treatment">Treatments</option>
                  </select>
                  
                  <Button 
                    onClick={() => navigate('/dashboard/add-record')}
                    className="w-full bg-white text-black hover:bg-gray-200"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add New Record
                  </Button>
                  
                  <Button 
                    variant="outline"
                    className="w-full border-2 border-white text-white hover:bg-white hover:text-black"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Export Records
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card key={stat.label} className="hover-lift border-2 border-black">
                    <CardContent className="p-4 text-center">
                      <Icon className="h-6 w-6 mx-auto mb-2 text-black" />
                      <p className="text-2xl font-bold text-black">{stat.value}</p>
                      <p className="text-xs text-gray-600">{stat.label}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Right Content Area */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Digital Health Records */}
            <Card className="hover-lift border-2 border-black">
              <CardHeader>
                <CardTitle className="text-2xl text-black">Digital Health Records</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed mb-6">
                  KerMedix Health's Digital Health Records service helps institutions maintain organized, secure, 
                  and accessible medical data for migrant workers. The system captures health screenings, clinic visits, 
                  chronic condition logs, vaccination records, and counselling history in a centralized format. 
                  Records are structured by individual profiles and updated in real time by authorized medical personnel.
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-black mb-4">Key differentiators:</h4>
                  <div className="space-y-3">
                    {keyFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-black mt-0.5 flex-shrink-0" />
                        <p className="text-gray-600">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Records Table */}
            <Card className="hover-lift border-2 border-black">
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-black">
                  <span>Your Health Records</span>
                  <Badge variant="secondary" className="bg-black text-white">{filteredRecords.length} records</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <HealthRecordsTable 
                  records={filteredRecords} 
                  showActions={true}
                  onRecordClick={(record) => navigate(`/dashboard/record/${record.id}`)}
                />
              </CardContent>
            </Card>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="hover-lift border-2 border-black">
                <CardHeader>
                  <CardTitle className="text-lg text-black">Centralized Profiles</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Each individual's medical data is organized under a single profile, 
                    including visits, screenings, and treatment notes.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-lift border-2 border-black">
                <CardHeader>
                  <CardTitle className="text-lg text-black">Real-time Updates</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Healthcare providers can update records instantly during consultations, 
                    ensuring accuracy and timeliness.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-lift border-2 border-black">
                <CardHeader>
                  <CardTitle className="text-lg text-black">Secure Access</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Role-based permissions ensure that only authorized personnel 
                    can access sensitive medical information.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-lift border-2 border-black">
                <CardHeader>
                  <CardTitle className="text-lg text-black">Analytics & Reporting</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Generate comprehensive reports and analytics for better 
                    healthcare decision-making and trend analysis.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default HealthRecords;