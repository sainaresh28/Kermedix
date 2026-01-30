import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Forms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-black mb-4">Health Forms & Applications</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Download and fill essential health-related forms and applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-black">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <FileText className="h-8 w-8 text-black flex-shrink-0" />
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2">Worker Registration Form</CardTitle>
                    <CardDescription>Register yourself in the health system</CardDescription>
                    <Button variant="outline" className="mt-4 border-2 border-black">
                      <Download className="mr-2 h-4 w-4" /> Download Form
                    </Button>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-2 border-black">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <FileText className="h-8 w-8 text-black flex-shrink-0" />
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2">Health Insurance Application</CardTitle>
                    <CardDescription>Apply for government health insurance</CardDescription>
                    <Button variant="outline" className="mt-4 border-2 border-black">
                      <Download className="mr-2 h-4 w-4" /> Download Form
                    </Button>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-2 border-black">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <FileText className="h-8 w-8 text-black flex-shrink-0" />
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2">Medical Reimbursement Claim</CardTitle>
                    <CardDescription>Claim medical expenses reimbursement</CardDescription>
                    <Button variant="outline" className="mt-4 border-2 border-black">
                      <Download className="mr-2 h-4 w-4" /> Download Form
                    </Button>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-2 border-black">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <FileText className="h-8 w-8 text-black flex-shrink-0" />
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2">Health Checkup Request</CardTitle>
                    <CardDescription>Request for comprehensive health screening</CardDescription>
                    <Button variant="outline" className="mt-4 border-2 border-black">
                      <Download className="mr-2 h-4 w-4" /> Download Form
                    </Button>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-2 border-black">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <FileText className="h-8 w-8 text-black flex-shrink-0" />
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2">Vaccination Certificate Request</CardTitle>
                    <CardDescription>Get your vaccination certificate</CardDescription>
                    <Button variant="outline" className="mt-4 border-2 border-black">
                      <Download className="mr-2 h-4 w-4" /> Download Form
                    </Button>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-2 border-black">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <FileText className="h-8 w-8 text-black flex-shrink-0" />
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2">Medical Leave Application</CardTitle>
                    <CardDescription>Apply for medical leave from work</CardDescription>
                    <Button variant="outline" className="mt-4 border-2 border-black">
                      <Download className="mr-2 h-4 w-4" /> Download Form
                    </Button>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-2 border-black">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <FileText className="h-8 w-8 text-black flex-shrink-0" />
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2">Grievance/Complaint Form</CardTitle>
                    <CardDescription>Report health service issues</CardDescription>
                    <Button variant="outline" className="mt-4 border-2 border-black">
                      <Download className="mr-2 h-4 w-4" /> Download Form
                    </Button>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-2 border-black">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <FileText className="h-8 w-8 text-black flex-shrink-0" />
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2">Emergency Contact Form</CardTitle>
                    <CardDescription>Update emergency contact information</CardDescription>
                    <Button variant="outline" className="mt-4 border-2 border-black">
                      <Download className="mr-2 h-4 w-4" /> Download Form
                    </Button>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>

          <div className="mt-12 bg-white p-8 rounded-lg border-2 border-black">
            <h2 className="text-2xl font-bold text-black mb-4">Submission Guidelines</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="font-bold text-black mr-2">1.</span>
                <span className="text-gray-700">Download the required form and fill it completely</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-black mr-2">2.</span>
                <span className="text-gray-700">Attach all necessary documents as mentioned in the form</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-black mr-2">3.</span>
                <span className="text-gray-700">Submit at nearest health center or upload through the portal</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-black mr-2">4.</span>
                <span className="text-gray-700">Keep a copy of submitted forms for your records</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
  );
};

export default Forms;
