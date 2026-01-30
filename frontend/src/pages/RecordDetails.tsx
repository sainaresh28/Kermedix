import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { mockHealthRecords } from '@/data/mockData';
import DashboardLayout from '@/components/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Download, FileText, Calendar, User, Stethoscope } from 'lucide-react';

const RecordDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  const record = mockHealthRecords.find(r => r.id === id);

  if (!record) {
    return (
      <DashboardLayout>
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-foreground">Record Not Found</h2>
          <Button onClick={() => navigate(-1)} className="mt-4">
            Go Back
          </Button>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="outline" onClick={() => navigate(-1)}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <div>
              <h2 className="text-2xl font-bold text-foreground">Medical Record Details</h2>
              <p className="text-muted-foreground">Record ID: {record.id}</p>
            </div>
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
              <Download className="h-4 w-4" />
              Download PDF
            </Button>
            <Button variant="outline" className="gap-2">
              <FileText className="h-4 w-4" />
              Print Record
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Record Information */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Stethoscope className="h-5 w-5" />
                  Diagnosis & Treatment
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Primary Diagnosis</label>
                  <p className="text-lg text-foreground font-medium">{record.diagnosis}</p>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Prescription</label>
                  <div className="bg-secondary p-4 rounded-sm mt-2">
                    <p className="text-foreground leading-relaxed">{record.prescription}</p>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-muted-foreground">Additional Notes</label>
                  <p className="text-foreground mt-1">
                    Patient advised to rest for 3-5 days. Follow-up recommended in 1 week if symptoms persist.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <CardTitle>Vital Signs & Measurements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-secondary rounded-sm">
                    <p className="text-2xl font-bold text-foreground">120/80</p>
                    <p className="text-sm text-muted-foreground">Blood Pressure</p>
                  </div>
                  <div className="text-center p-4 bg-secondary rounded-sm">
                    <p className="text-2xl font-bold text-foreground">98.6°F</p>
                    <p className="text-sm text-muted-foreground">Temperature</p>
                  </div>
                  <div className="text-center p-4 bg-secondary rounded-sm">
                    <p className="text-2xl font-bold text-foreground">72</p>
                    <p className="text-sm text-muted-foreground">Heart Rate</p>
                  </div>
                  <div className="text-center p-4 bg-secondary rounded-sm">
                    <p className="text-2xl font-bold text-foreground">98%</p>
                    <p className="text-sm text-muted-foreground">O2 Saturation</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <CardTitle>Lab Results & Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-secondary rounded-sm">
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium text-foreground">Blood Test Report</p>
                        <p className="text-sm text-muted-foreground">Complete Blood Count</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-secondary rounded-sm">
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium text-foreground">X-Ray Results</p>
                        <p className="text-sm text-muted-foreground">Chest X-Ray</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar Information */}
          <div className="space-y-6">
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Visit Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Date</label>
                  <p className="text-foreground font-medium">{record.date}</p>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Time</label>
                  <p className="text-foreground font-medium">10:30 AM</p>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Visit Type</label>
                  <Badge variant="secondary">Regular Checkup</Badge>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Duration</label>
                  <p className="text-foreground font-medium">45 minutes</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Healthcare Provider
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Doctor</label>
                  <p className="text-foreground font-medium">{record.doctor}</p>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Specialization</label>
                  <p className="text-foreground">General Medicine</p>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Hospital</label>
                  <p className="text-foreground">Kochi General Hospital</p>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-muted-foreground">License No.</label>
                  <p className="text-foreground font-mono text-sm">KL-MED-2023-1234</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <CardTitle>Patient Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Worker ID</label>
                  <p className="text-foreground font-mono">{record.workerId}</p>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Age</label>
                  <p className="text-foreground">{record.age} years</p>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Gender</label>
                  <p className="text-foreground">{record.gender}</p>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Contact</label>
                  <p className="text-foreground">+91 9876543210</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default RecordDetails;