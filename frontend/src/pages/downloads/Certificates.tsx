import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Award, Shield, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const Certificates = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Award className="h-16 w-16 mx-auto mb-4 text-black" />
            <h1 className="text-4xl font-bold text-black mb-4">Health Certificates</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Download your health certificates and medical documents
            </p>
          </div>

          <div className="mb-12 bg-blue-50 border-2 border-blue-300 p-6 rounded-lg">
            <div className="flex items-start gap-4">
              <Shield className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-black mb-2">Login Required</h3>
                <p className="text-gray-700 mb-4">
                  To download your personal health certificates, please log in to your account. Certificates are digitally signed and verifiable.
                </p>
                <Button className="bg-black hover:bg-gray-800 text-white">
                  Login to Access Certificates
                </Button>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-black">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <FileCheck className="h-8 w-8 text-black flex-shrink-0" />
                  <div>
                    <CardTitle className="text-lg mb-2">Vaccination Certificate</CardTitle>
                    <CardDescription className="mb-4">
                      Digital certificate showing all your completed vaccinations with dates and batch numbers
                    </CardDescription>
                    <p className="text-sm text-gray-500">Format: PDF | Digitally Signed</p>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-2 border-black">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <FileCheck className="h-8 w-8 text-black flex-shrink-0" />
                  <div>
                    <CardTitle className="text-lg mb-2">Medical Fitness Certificate</CardTitle>
                    <CardDescription className="mb-4">
                      Certificate of medical fitness for employment, issued after health screening
                    </CardDescription>
                    <p className="text-sm text-gray-500">Format: PDF | Valid for 1 Year</p>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-2 border-black">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <FileCheck className="h-8 w-8 text-black flex-shrink-0" />
                  <div>
                    <CardTitle className="text-lg mb-2">Health Insurance Certificate</CardTitle>
                    <CardDescription className="mb-4">
                      Certificate of enrollment in government health insurance scheme
                    </CardDescription>
                    <p className="text-sm text-gray-500">Format: PDF | Annual Renewal</p>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-2 border-black">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <FileCheck className="h-8 w-8 text-black flex-shrink-0" />
                  <div>
                    <CardTitle className="text-lg mb-2">COVID-19 Recovery Certificate</CardTitle>
                    <CardDescription className="mb-4">
                      Certificate issued after recovery from COVID-19 with test results
                    </CardDescription>
                    <p className="text-sm text-gray-500">Format: PDF | Valid for 6 Months</p>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-2 border-black">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <FileCheck className="h-8 w-8 text-black flex-shrink-0" />
                  <div>
                    <CardTitle className="text-lg mb-2">Health Checkup Certificate</CardTitle>
                    <CardDescription className="mb-4">
                      Comprehensive health checkup report certificate with all test results
                    </CardDescription>
                    <p className="text-sm text-gray-500">Format: PDF | Includes Lab Reports</p>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-2 border-black">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <FileCheck className="h-8 w-8 text-black flex-shrink-0" />
                  <div>
                    <CardTitle className="text-lg mb-2">TB Screening Certificate</CardTitle>
                    <CardDescription className="mb-4">
                      Certificate of tuberculosis screening with negative result
                    </CardDescription>
                    <p className="text-sm text-gray-500">Format: PDF | Valid for 6 Months</p>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>

          <div className="mt-12 bg-white p-8 rounded-lg border-2 border-black">
            <h2 className="text-2xl font-bold text-black mb-4">Certificate Verification</h2>
            <p className="text-gray-700 mb-4">
              All certificates issued through this portal are digitally signed and can be verified using the QR code printed on each certificate.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="font-bold text-black mr-2">•</span>
                <span className="text-gray-700">Each certificate has a unique verification code</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-black mr-2">•</span>
                <span className="text-gray-700">Scan QR code for instant online verification</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-black mr-2">•</span>
                <span className="text-gray-700">Certificates are legally valid for official purposes</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
  );
};

export default Certificates;
