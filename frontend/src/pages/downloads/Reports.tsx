import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Download, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Reports = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <BarChart className="h-16 w-16 mx-auto mb-4 text-black" />
            <h1 className="text-4xl font-bold text-black mb-4">Health Reports & Statistics</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Access public health reports, statistics, and research documents
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-6">Annual Health Reports</h2>
            <div className="space-y-4">
              {[
                { title: "Annual Health Report 2024", desc: "Comprehensive health statistics for migrant workers", date: "Jan 2024", size: "2.4 MB" },
                { title: "Annual Health Report 2023", desc: "Previous year health data and trends", date: "Jan 2023", size: "2.1 MB" },
                { title: "Vaccination Coverage Report 2024", desc: "Immunization statistics and coverage analysis", date: "Dec 2023", size: "1.8 MB" },
              ].map((report, idx) => (
                <Card key={idx} className="border-2 border-black">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-1">{report.title}</CardTitle>
                        <CardDescription>{report.desc}</CardDescription>
                        <span className="text-sm text-gray-500 mt-1 block">{report.date} • {report.size}</span>
                      </div>
                      <Button variant="outline" className="border-2 border-black ml-4">
                        <Download className="mr-2 h-4 w-4" /> Download
                      </Button>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-6">Disease Surveillance Reports</h2>
            <div className="space-y-4">
              {[
                { title: "Communicable Disease Trends Q1 2024", desc: "Quarterly analysis of infectious diseases", date: "Mar 2024", size: "890 KB" },
                { title: "TB Control Program Report 2023", desc: "Tuberculosis prevention and treatment outcomes", date: "Dec 2023", size: "1.2 MB" },
                { title: "COVID-19 Impact Assessment", desc: "Analysis of pandemic impact on migrant health", date: "Nov 2023", size: "1.5 MB" },
              ].map((report, idx) => (
                <Card key={idx} className="border-2 border-black">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-1">{report.title}</CardTitle>
                        <CardDescription>{report.desc}</CardDescription>
                        <span className="text-sm text-gray-500 mt-1 block">{report.date} • {report.size}</span>
                      </div>
                      <Button variant="outline" className="border-2 border-black ml-4">
                        <Download className="mr-2 h-4 w-4" /> Download
                      </Button>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-black mb-6">Research & Policy Documents</h2>
            <div className="space-y-4">
              {[
                { title: "Occupational Health Guidelines", desc: "Safety standards for migrant workers", date: "Feb 2024", size: "650 KB" },
                { title: "Mental Health Support Framework", desc: "Policy document on psychological support services", date: "Jan 2024", size: "780 KB" },
                { title: "Telemedicine Implementation Study", desc: "Research on digital health adoption", date: "Dec 2023", size: "1.1 MB" },
              ].map((report, idx) => (
                <Card key={idx} className="border-2 border-black">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-1">{report.title}</CardTitle>
                        <CardDescription>{report.desc}</CardDescription>
                        <span className="text-sm text-gray-500 mt-1 block">{report.date} • {report.size}</span>
                      </div>
                      <Button variant="outline" className="border-2 border-black ml-4">
                        <Download className="mr-2 h-4 w-4" /> Download
                      </Button>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
  );
};

export default Reports;
