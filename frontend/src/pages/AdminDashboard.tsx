import { useTranslation } from 'react-i18next';
import { mockAnalytics, mockHealthRecords, mockUsers } from '@/data/mockData';
import DashboardLayout from '@/components/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { Download, Users, FileText, Activity, AlertTriangle, TrendingUp } from 'lucide-react';

const COLORS = ['#000000', '#404040', '#707070', '#a0a0a0', '#d0d0d0'];

const AdminDashboard = () => {
  const { t } = useTranslation();
  
  const adminSidebarItems = [
    { name: 'Dashboard', path: '/dashboard/admin', icon: Activity },
    { name: 'Health Records', path: '/dashboard/records', icon: FileText },
    { name: 'Profile', path: '/dashboard/profile', icon: Users },
    { name: 'Add Record', path: '/dashboard/add-record', icon: FileText },
    { name: 'Analytics', path: '/dashboard/analytics', icon: TrendingUp },
  ];
  
  const recentAlerts = [
    { id: 1, type: 'High Blood Pressure', count: 5, severity: 'medium' },
    { id: 2, type: 'Respiratory Infections', count: 12, severity: 'high' },
    { id: 3, type: 'Work Injuries', count: 3, severity: 'low' },
  ];

  return (
    <DashboardLayout userRole="Administrator" sidebarItems={adminSidebarItems}>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-foreground">System Analytics</h2>
            <p className="text-muted-foreground">KerMedix Health Management Overview</p>
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
              <Download className="h-4 w-4" />
              Export PDF
            </Button>
            <Button variant="outline" className="gap-2">
              <Download className="h-4 w-4" />
              Export Excel
            </Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-6 flex items-center gap-4">
              <Users className="h-8 w-8 text-primary" />
              <div>
                <div className="text-2xl font-bold">{mockAnalytics.totalWorkers.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">Registered Workers</p>
                <div className="flex items-center gap-1 text-xs text-green-600">
                  <TrendingUp className="h-3 w-3" />
                  +12% this month
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 flex items-center gap-4">
              <FileText className="h-8 w-8 text-primary" />
              <div>
                <div className="text-2xl font-bold">{mockAnalytics.totalRecords.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">Health Records</p>
                <div className="flex items-center gap-1 text-xs text-green-600">
                  <TrendingUp className="h-3 w-3" />
                  +8% this month
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 flex items-center gap-4">
              <Activity className="h-8 w-8 text-primary" />
              <div>
                <div className="text-2xl font-bold">{mockAnalytics.totalDoctors}</div>
                <p className="text-xs text-muted-foreground">Healthcare Providers</p>
                <div className="flex items-center gap-1 text-xs text-blue-600">
                  <Activity className="h-3 w-3" />
                  Active this week
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 flex items-center gap-4">
              <AlertTriangle className="h-8 w-8 text-destructive" />
              <div>
                <div className="text-2xl font-bold">{recentAlerts.length}</div>
                <p className="text-xs text-muted-foreground">Active Alerts</p>
                <div className="flex items-center gap-1 text-xs text-destructive">
                  <AlertTriangle className="h-3 w-3" />
                  Needs attention
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Analytics Tabs */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="health">Health Trends</TabsTrigger>
            <TabsTrigger value="users">User Management</TabsTrigger>
            <TabsTrigger value="alerts">Health Alerts</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Monthly Records Chart */}
              <Card>
                <CardHeader>
                  <CardTitle>Monthly Health Records</CardTitle>
                  <CardDescription>Number of new health records created each month</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={mockAnalytics.monthlyRecords}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="count" stroke="#000000" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Age Group Distribution */}
              <Card>
                <CardHeader>
                  <CardTitle>Age Group Distribution</CardTitle>
                  <CardDescription>Worker population by age groups</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={mockAnalytics.ageGroups}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({group, percent}) => `${group}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="count"
                      >
                        {mockAnalytics.ageGroups.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="health" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Disease Statistics */}
              <Card>
                <CardHeader>
                  <CardTitle>Common Health Issues</CardTitle>
                  <CardDescription>Most reported health conditions</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={mockAnalytics.diseaseStats}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                      <XAxis dataKey="disease" angle={-45} textAnchor="end" height={80} />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="count" fill="#000000" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Vaccination Coverage */}
              <Card>
                <CardHeader>
                  <CardTitle>Vaccination Coverage</CardTitle>
                  <CardDescription>Percentage of workers vaccinated</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={mockAnalytics.vaccinationCoverage}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                      <XAxis dataKey="vaccine" />
                      <YAxis domain={[0, 100]} />
                      <Tooltip formatter={(value) => [`${value}%`, 'Coverage']} />
                      <Bar dataKey="coverage" fill="#404040" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="users" className="space-y-4">
            <h3 className="text-lg font-semibold">User Management</h3>
            <div className="bg-card border border-border rounded-sm overflow-hidden">
              <table className="healthcare-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Role</th>
                    <th>ID/Specialization</th>
                    <th>Contact</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {mockUsers.map((user) => (
                    <tr key={user.id}>
                      <td className="font-medium">{user.name}</td>
                      <td className="capitalize">{user.role}</td>
                      <td>
                        {user.workerId ? (
                          <span className="font-mono text-sm">{user.workerId}</span>
                        ) : (
                          <span className="text-sm">{user.specialization}</span>
                        )}
                      </td>
                      <td>{user.contact}</td>
                      <td>
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                          Active
                        </span>
                      </td>
                      <td>
                        <div className="flex gap-2">
                          <Button size="sm" variant="ghost">Edit</Button>
                          <Button size="sm" variant="ghost" className="text-destructive">
                            Suspend
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabsContent>
          
          <TabsContent value="alerts" className="space-y-4">
            <h3 className="text-lg font-semibold">Health System Alerts</h3>
            <div className="space-y-4">
              {recentAlerts.map((alert) => (
                <Card key={alert.id}>
                  <CardContent className="p-4 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <AlertTriangle className={`h-6 w-6 ${
                        alert.severity === 'high' ? 'text-destructive' :
                        alert.severity === 'medium' ? 'text-yellow-600' : 'text-blue-600'
                      }`} />
                      <div>
                        <p className="font-medium">{alert.type}</p>
                        <p className="text-sm text-muted-foreground">
                          {alert.count} cases reported this week
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        View Details
                      </Button>
                      <Button size="sm">
                        Send Notice
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;