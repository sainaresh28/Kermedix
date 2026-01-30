import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Shield, Clock, Download } from "lucide-react";

const HealthRecordsService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-black mb-4">Digital Health Records</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Secure, accessible, and comprehensive digital health record management system for migrant workers
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-2 border-black">
              <CardHeader>
                <FileText className="h-12 w-12 mb-4 text-black" />
                <CardTitle>Complete Medical History</CardTitle>
                <CardDescription>
                  Access your complete medical history including diagnoses, treatments, prescriptions, and lab reports
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-black">
              <CardHeader>
                <Shield className="h-12 w-12 mb-4 text-black" />
                <CardTitle>Secure & Private</CardTitle>
                <CardDescription>
                  Your health data is encrypted and protected with industry-standard security measures
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-black">
              <CardHeader>
                <Clock className="h-12 w-12 mb-4 text-black" />
                <CardTitle>24/7 Access</CardTitle>
                <CardDescription>
                  Access your health records anytime, anywhere from any device with internet connectivity
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-black">
              <CardHeader>
                <Download className="h-12 w-12 mb-4 text-black" />
                <CardTitle>Easy Export</CardTitle>
                <CardDescription>
                  Download and share your health records as PDF documents with healthcare providers
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="bg-white p-8 rounded-lg border-2 border-black">
            <h2 className="text-2xl font-bold text-black mb-6">Key Features</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="font-bold text-black mr-2">•</span>
                <span className="text-gray-700">Centralized storage of all medical records and documents</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-black mr-2">•</span>
                <span className="text-gray-700">Real-time updates from healthcare providers</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-black mr-2">•</span>
                <span className="text-gray-700">Vaccination history and immunization tracking</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-black mr-2">•</span>
                <span className="text-gray-700">Prescription management and medication reminders</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-black mr-2">•</span>
                <span className="text-gray-700">Lab results and diagnostic reports</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-black mr-2">•</span>
                <span className="text-gray-700">Emergency contact information and medical alerts</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
  );
};

export default HealthRecordsService;
