import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DashboardLayout from "@/components/DashboardLayout";
import AnimatedCounter from "@/components/AnimatedCounter";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { TrendingUp, Users, Activity, FileText, Calendar, CheckCircle, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Analytics = () => {
  const visibleElements = useScrollAnimation();
  const navigate = useNavigate();

  const mainStats = [
    { label: 'Total Records', value: 1247, icon: FileText, trend: '+12%' },
    { label: 'Active Patients', value: 856, icon: Users, trend: '+8%' },
    { label: 'This Month', value: 124, icon: Calendar, trend: '+15%' },
    { label: 'Completed', value: 1103, icon: CheckCircle, trend: '+5%' }
  ];

  const monthlyData = [
    { month: 'Jan', records: 98 },
    { month: 'Feb', records: 112 },
    { month: 'Mar', records: 105 },
    { month: 'Apr', records: 118 },
    { month: 'May', records: 124 },
    { month: 'Jun', records: 131 }
  ];

  const categoryData = [
    { category: 'Health Checkups', count: 456, percentage: 37 },
    { category: 'Vaccinations', count: 312, percentage: 25 },
    { category: 'Treatments', count: 289, percentage: 23 },
    { category: 'Follow-ups', count: 190, percentage: 15 }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div 
          className={`fade-in-up ${visibleElements.has('analytics-header') ? 'visible' : ''}`}
          data-animate="analytics-header"
        >
          <div className="flex items-center gap-4 mb-4">
            <Button
              onClick={() => navigate(-1)}
              variant="outline"
              className="border-2 border-black"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-black">Analytics Dashboard</h2>
              <p className="text-gray-600 mt-1">Track health records and performance metrics</p>
            </div>
          </div>
        </div>

        {/* Main Stats Grid */}
        <div 
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 fade-in-up ${visibleElements.has('stats-grid') ? 'visible' : ''}`}
          data-animate="stats-grid"
          style={{ transitionDelay: '0.2s' }}
        >
          {mainStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.label} className="hover-lift border-2 border-black">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-black">{stat.label}</CardTitle>
                  <Icon className="h-4 w-4 text-gray-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-black">
                    <AnimatedCounter end={stat.value} />
                  </div>
                  <p className="text-xs text-gray-600 flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    {stat.trend} from last month
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Monthly Records Chart */}
          <Card 
            className={`hover-lift border-2 border-black fade-in-up ${visibleElements.has('monthly-chart') ? 'visible' : ''}`}
            data-animate="monthly-chart"
            style={{ transitionDelay: '0.4s' }}
          >
            <CardHeader>
              <CardTitle className="text-black">Monthly Records</CardTitle>
              <p className="text-sm text-gray-600">Health record submissions per month</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {monthlyData.map((data, index) => {
                  const maxValue = Math.max(...monthlyData.map(d => d.records));
                  const percentage = (data.records / maxValue) * 100;
                  return (
                    <div key={data.month}>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="font-medium text-black">{data.month}</span>
                        <span className="text-gray-600">{data.records} records</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className="bg-black h-3 rounded-full progress-fill" 
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Category Distribution */}
          <Card 
            className={`hover-lift border-2 border-black fade-in-up ${visibleElements.has('category-chart') ? 'visible' : ''}`}
            data-animate="category-chart"
            style={{ transitionDelay: '0.6s' }}
          >
            <CardHeader>
              <CardTitle className="text-black">Record Categories</CardTitle>
              <p className="text-sm text-gray-600">Distribution by record type</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {categoryData.map((data, index) => (
                  <div key={data.category}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium text-black">{data.category}</span>
                      <span className="text-gray-600">{data.count} ({data.percentage}%)</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-black h-3 rounded-full progress-fill" 
                        style={{ width: `${data.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Insights */}
        <div 
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 fade-in-up ${visibleElements.has('insights') ? 'visible' : ''}`}
          data-animate="insights"
          style={{ transitionDelay: '0.8s' }}
        >
          <Card className="hover-lift border-2 border-black">
            <CardHeader>
              <CardTitle className="text-lg text-black">Average Processing Time</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-black">2.4 hrs</p>
              <p className="text-sm text-gray-600 mt-2">Per health record</p>
            </CardContent>
          </Card>

          <Card className="hover-lift border-2 border-black">
            <CardHeader>
              <CardTitle className="text-lg text-black">Patient Satisfaction</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-black">
                <AnimatedCounter end={94} suffix="%" />
              </p>
              <p className="text-sm text-gray-600 mt-2">Positive feedback rate</p>
            </CardContent>
          </Card>

          <Card className="hover-lift border-2 border-black">
            <CardHeader>
              <CardTitle className="text-lg text-black">System Uptime</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-black">99.9%</p>
              <p className="text-sm text-gray-600 mt-2">Last 30 days</p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card 
          className={`hover-lift border-2 border-black fade-in-up ${visibleElements.has('activity') ? 'visible' : ''}`}
          data-animate="activity"
          style={{ transitionDelay: '1s' }}
        >
          <CardHeader>
            <CardTitle className="flex items-center text-black">
              <Activity className="h-5 w-5 mr-2" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-4 pb-4 border-b border-gray-200">
                <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                <div className="flex-1">
                  <p className="text-black font-medium">New health record added</p>
                  <p className="text-sm text-gray-600">Patient: Ramesh Kumar - 2 hours ago</p>
                </div>
              </div>
              <div className="flex items-start gap-4 pb-4 border-b border-gray-200">
                <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                <div className="flex-1">
                  <p className="text-black font-medium">Vaccination record updated</p>
                  <p className="text-sm text-gray-600">Patient: Priya Singh - 5 hours ago</p>
                </div>
              </div>
              <div className="flex items-start gap-4 pb-4 border-b border-gray-200">
                <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                <div className="flex-1">
                  <p className="text-black font-medium">Follow-up scheduled</p>
                  <p className="text-sm text-gray-600">Patient: Anil Kumar - 8 hours ago</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                <div className="flex-1">
                  <p className="text-black font-medium">Monthly report generated</p>
                  <p className="text-sm text-gray-600">System - 1 day ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Analytics;
