import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Stethoscope, Heart, Activity, Eye, Shield, FileText } from "lucide-react";

const Screening = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">

          <h1 className="text-5xl font-bold text-black mb-6">Health Screening Services</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Comprehensive health screening programs for early detection and prevention of diseases
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="border-2 border-black hover:shadow-2xl transition-all duration-300 group">
            <CardHeader>
              <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Stethoscope className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl">General Health Checkup</CardTitle>
              <CardDescription className="text-base text-gray-600">
                Complete physical examination including vital signs, BMI, and general health assessment
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-2 border-black hover:shadow-2xl transition-all duration-300 group">
            <CardHeader>
              <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl">Cardiovascular Screening</CardTitle>
              <CardDescription className="text-base text-gray-600">
                Blood pressure monitoring, ECG, and cardiac risk assessment for heart health
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-2 border-black hover:shadow-2xl transition-all duration-300 group">
            <CardHeader>
              <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Activity className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl">Diabetes Screening</CardTitle>
              <CardDescription className="text-base text-gray-600">
                Blood sugar testing, HbA1c monitoring, and diabetes risk evaluation
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-2 border-black hover:shadow-2xl transition-all duration-300 group">
            <CardHeader>
              <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl">Vision & Hearing Tests</CardTitle>
              <CardDescription className="text-base text-gray-600">
                Eye examination and hearing tests to ensure sensory health
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        <div className="bg-gradient-to-br from-black to-gray-900 p-10 rounded-2xl border-2 border-black shadow-2xl text-white">
          <div className="flex items-center gap-3 mb-8">
            <Shield className="h-8 w-8" />
            <h2 className="text-3xl font-bold">Screening Programs</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all">
              <div className="flex items-start gap-3">
                <FileText className="h-6 w-6 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Annual Health Checkup</h3>
                  <p className="text-gray-200 leading-relaxed">Comprehensive yearly screening covering all vital health parameters</p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all">
              <div className="flex items-start gap-3">
                <Shield className="h-6 w-6 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Occupational Health Screening</h3>
                  <p className="text-gray-200 leading-relaxed">Job-specific health assessments for construction and industrial workers</p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all">
              <div className="flex items-start gap-3">
                <Activity className="h-6 w-6 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Infectious Disease Screening</h3>
                  <p className="text-gray-200 leading-relaxed">Testing for TB, Hepatitis, HIV, and other communicable diseases</p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all">
              <div className="flex items-start gap-3">
                <Heart className="h-6 w-6 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Mental Health Assessment</h3>
                  <p className="text-gray-200 leading-relaxed">Psychological evaluation and stress management counseling</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screening;
