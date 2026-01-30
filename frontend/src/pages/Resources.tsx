import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Video, FileText, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Resources = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-black mb-4">Health Resources</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Educational materials and resources to help you stay healthy
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-black mb-6">Video Resources</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-2 border-black">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <Video className="h-8 w-8 text-black flex-shrink-0" />
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2">Personal Hygiene Basics</CardTitle>
                      <CardDescription>Learn essential hygiene practices in your language</CardDescription>
                      <Button variant="outline" className="mt-4 border-2 border-black">
                        Watch Video <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="border-2 border-black">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <Video className="h-8 w-8 text-black flex-shrink-0" />
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2">Workplace Safety Tips</CardTitle>
                      <CardDescription>How to stay safe at construction sites</CardDescription>
                      <Button variant="outline" className="mt-4 border-2 border-black">
                        Watch Video <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="border-2 border-black">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <Video className="h-8 w-8 text-black flex-shrink-0" />
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2">Vaccination Importance</CardTitle>
                      <CardDescription>Why getting vaccinated is crucial</CardDescription>
                      <Button variant="outline" className="mt-4 border-2 border-black">
                        Watch Video <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="border-2 border-black">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <Video className="h-8 w-8 text-black flex-shrink-0" />
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2">Mental Health Awareness</CardTitle>
                      <CardDescription>Managing stress and seeking help</CardDescription>
                      <Button variant="outline" className="mt-4 border-2 border-black">
                        Watch Video <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-black mb-6">Health Information Brochures</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-2 border-black">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <FileText className="h-8 w-8 text-black flex-shrink-0" />
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2">Common Health Issues Guide</CardTitle>
                      <CardDescription>Available in Hindi, Malayalam, Bengali, Oriya</CardDescription>
                      <Button variant="outline" className="mt-4 border-2 border-black">
                        <Download className="mr-2 h-4 w-4" /> Download PDF
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
                      <CardTitle className="text-lg mb-2">Nutrition and Diet Guide</CardTitle>
                      <CardDescription>Healthy eating on a budget</CardDescription>
                      <Button variant="outline" className="mt-4 border-2 border-black">
                        <Download className="mr-2 h-4 w-4" /> Download PDF
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
                      <CardTitle className="text-lg mb-2">First Aid Manual</CardTitle>
                      <CardDescription>Basic first aid for common emergencies</CardDescription>
                      <Button variant="outline" className="mt-4 border-2 border-black">
                        <Download className="mr-2 h-4 w-4" /> Download PDF
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
                      <CardTitle className="text-lg mb-2">Rights and Benefits</CardTitle>
                      <CardDescription>Know your health rights as a migrant worker</CardDescription>
                      <Button variant="outline" className="mt-4 border-2 border-black">
                        <Download className="mr-2 h-4 w-4" /> Download PDF
                      </Button>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg border-2 border-black">
            <h2 className="text-2xl font-bold text-black mb-4">Useful Health Links</h2>
            <ul className="space-y-3">
              <li>
                <a href="https://www.nhp.gov.in" target="_blank" rel="noopener noreferrer" className="text-black hover:underline font-medium flex items-center">
                  National Health Portal <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </li>
              <li>
                <a href="https://www.mohfw.gov.in" target="_blank" rel="noopener noreferrer" className="text-black hover:underline font-medium flex items-center">
                  Ministry of Health & Family Welfare <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </li>
              <li>
                <a href="https://pmjay.gov.in" target="_blank" rel="noopener noreferrer" className="text-black hover:underline font-medium flex items-center">
                  Ayushman Bharat - PMJAY <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
  );
};

export default Resources;
