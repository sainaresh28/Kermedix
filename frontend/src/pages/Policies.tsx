import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { FileText, Shield, Users, Heart, BookOpen, CheckCircle } from "lucide-react";

const Policies = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">

          <h1 className="text-5xl font-bold text-black mb-6">Health Policies</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Government health policies and regulations for migrant worker welfare
          </p>
        </div>

        <div className="space-y-6">
          <Card className="border-2 border-black hover:shadow-2xl transition-all duration-300 group">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-black rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <FileText className="h-7 w-7 text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl mb-3">Interstate Migrant Workers Health Policy 2024</CardTitle>
                  <CardDescription className="text-base leading-relaxed text-gray-600">
                    Comprehensive health coverage policy ensuring access to healthcare services for interstate migrant workers across India. Includes provisions for emergency care, routine checkups, and occupational health services.
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>

          <Card className="border-2 border-black hover:shadow-2xl transition-all duration-300 group">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-black rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Shield className="h-7 w-7 text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl mb-3">Health Insurance and Benefits Scheme</CardTitle>
                  <CardDescription className="text-base leading-relaxed text-gray-600">
                    Details about Ayushman Bharat coverage, state health insurance schemes, and special benefits available for registered migrant workers and their families.
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>

          <Card className="border-2 border-black hover:shadow-2xl transition-all duration-300 group">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-black rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Users className="h-7 w-7 text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl mb-3">Occupational Health and Safety Standards</CardTitle>
                  <CardDescription className="text-base leading-relaxed text-gray-600">
                    Mandatory health and safety guidelines for employers of migrant workers in construction, manufacturing, and other industries. Includes workplace safety requirements and employer obligations.
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>

          <Card className="border-2 border-black hover:shadow-2xl transition-all duration-300 group">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-black rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Heart className="h-7 w-7 text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl mb-3">Mental Health and Wellbeing Policy</CardTitle>
                  <CardDescription className="text-base leading-relaxed text-gray-600">
                    Framework for providing mental health support, counseling services, and stress management programs for migrant workers facing social and economic challenges.
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>

        <div className="mt-16 bg-gradient-to-br from-black to-gray-900 p-10 rounded-2xl border-2 border-black shadow-2xl text-white">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="h-8 w-8" />
            <h2 className="text-3xl font-bold">Policy Implementation</h2>
          </div>
          <p className="text-gray-200 mb-8 text-lg leading-relaxed">
            These policies are implemented in collaboration with the Ministry of Health and Family Welfare, State Health Departments, and Labour Welfare Boards to ensure comprehensive healthcare access for all migrant workers in Kerala.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20">
              <CheckCircle className="h-6 w-6 mb-3" />
              <p className="text-gray-100 leading-relaxed">Regular monitoring and evaluation of policy effectiveness</p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20">
              <CheckCircle className="h-6 w-6 mb-3" />
              <p className="text-gray-100 leading-relaxed">Grievance redressal mechanism for policy-related issues</p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20">
              <CheckCircle className="h-6 w-6 mb-3" />
              <p className="text-gray-100 leading-relaxed">Periodic updates based on emerging health challenges</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Policies;
