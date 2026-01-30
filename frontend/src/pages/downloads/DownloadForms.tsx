import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const DownloadForms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <FileText className="h-16 w-16 mx-auto mb-4 text-black" />
            <h1 className="text-4xl font-bold text-black mb-4">Downloadable Health Forms</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Download, print, and fill required health forms
            </p>
          </div>

          <div className="space-y-4">
            {[
              { title: "New Registration Form", desc: "For first-time registration in the system", size: "245 KB" },
              { title: "Health Card Application", desc: "Apply for digital health ID card", size: "180 KB" },
              { title: "Insurance Enrollment Form", desc: "Enroll in government health insurance scheme", size: "320 KB" },
              { title: "Medical Reimbursement Claim", desc: "Claim form for medical expense reimbursement", size: "210 KB" },
              { title: "Vaccination Record Form", desc: "Document your vaccination history", size: "150 KB" },
              { title: "Emergency Contact Update", desc: "Update emergency contact information", size: "120 KB" },
              { title: "Medical Certificate Request", desc: "Request medical fitness certificate", size: "175 KB" },
              { title: "Telemedicine Consent Form", desc: "Consent for online consultation services", size: "195 KB" },
            ].map((form, idx) => (
              <Card key={idx} className="border-2 border-black">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-1">{form.title}</CardTitle>
                      <CardDescription>{form.desc}</CardDescription>
                      <span className="text-sm text-gray-500 mt-1 block">Size: {form.size}</span>
                    </div>
                    <Button variant="outline" className="border-2 border-black ml-4">
                      <Download className="mr-2 h-4 w-4" /> Download
                    </Button>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="mt-12 bg-white p-8 rounded-lg border-2 border-black">
            <h2 className="text-2xl font-bold text-black mb-4">Form Submission</h2>
            <p className="text-gray-700 mb-4">
              After filling the forms, you can submit them through:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="font-bold text-black mr-2">•</span>
                <span className="text-gray-700">Upload directly through the portal (scan or photo)</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-black mr-2">•</span>
                <span className="text-gray-700">Submit at nearest government health center</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-black mr-2">•</span>
                <span className="text-gray-700">Email to: forms@KerMedixhealth.gov.in</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
  );
};

export default DownloadForms;
