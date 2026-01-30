import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Download, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const Manual = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <BookOpen className="h-16 w-16 mx-auto mb-4 text-black" />
            <h1 className="text-4xl font-bold text-black mb-4">User Manuals</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive guides to help you use the health portal effectively
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-black">
              <CardHeader>
                <CardTitle className="text-lg mb-2">Migrant Worker Portal Guide</CardTitle>
                <CardDescription className="mb-4">
                  Complete guide for workers to access health records, book appointments, and manage their health profile
                </CardDescription>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full border-2 border-black">
                    <Download className="mr-2 h-4 w-4" /> English Version (PDF)
                  </Button>
                  <Button variant="outline" className="w-full border-2 border-black">
                    <Download className="mr-2 h-4 w-4" /> हिंदी संस्करण (PDF)
                  </Button>
                  <Button variant="outline" className="w-full border-2 border-black">
                    <Download className="mr-2 h-4 w-4" /> മലയാളം (PDF)
                  </Button>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-2 border-black">
              <CardHeader>
                <CardTitle className="text-lg mb-2">Doctor Portal Manual</CardTitle>
                <CardDescription className="mb-4">
                  Guide for healthcare providers to manage patient records, prescriptions, and appointments
                </CardDescription>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full border-2 border-black">
                    <Download className="mr-2 h-4 w-4" /> Download Manual (PDF)
                  </Button>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-2 border-black">
              <CardHeader>
                <CardTitle className="text-lg mb-2">Admin Dashboard Guide</CardTitle>
                <CardDescription className="mb-4">
                  Comprehensive manual for administrators to manage users, analytics, and system settings
                </CardDescription>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full border-2 border-black">
                    <Download className="mr-2 h-4 w-4" /> Download Manual (PDF)
                  </Button>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-2 border-black">
              <CardHeader>
                <CardTitle className="text-lg mb-2">Mobile App User Guide</CardTitle>
                <CardDescription className="mb-4">
                  Step-by-step instructions for using the KerMedix Health mobile application
                </CardDescription>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full border-2 border-black">
                    <Download className="mr-2 h-4 w-4" /> Android Guide (PDF)
                  </Button>
                  <Button variant="outline" className="w-full border-2 border-black">
                    <Download className="mr-2 h-4 w-4" /> iOS Guide (PDF)
                  </Button>
                </div>
              </CardHeader>
            </Card>
          </div>

          <div className="mt-12 bg-white p-8 rounded-lg border-2 border-black">
            <h2 className="text-2xl font-bold text-black mb-4">Video Tutorials</h2>
            <p className="text-gray-700 mb-4">
              Prefer learning by watching? Check out our video tutorial series covering all features of the portal.
            </p>
            <Button variant="default" className="bg-black hover:bg-gray-800 text-white">
              Watch Video Tutorials
            </Button>
          </div>
        </div>
      </div>
  );
};

export default Manual;
