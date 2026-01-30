import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BookOpen, ClipboardCheck, AlertCircle, Info, Phone } from "lucide-react";

const Guidelines = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-black mb-4">Health Guidelines</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Essential health guidelines and best practices for migrant workers
            </p>
          </div>

          <div className="space-y-6">
            <Card className="border-2 border-black">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <BookOpen className="h-8 w-8 text-black flex-shrink-0" />
                  <div>
                    <CardTitle className="text-xl mb-2">General Health and Hygiene</CardTitle>
                    <CardDescription className="text-base">
                      <ul className="space-y-2 mt-3">
                        <li>• Maintain personal hygiene - regular hand washing and bathing</li>
                        <li>• Use clean drinking water and eat hygienic food</li>
                        <li>• Ensure proper ventilation in living quarters</li>
                        <li>• Keep living spaces clean and free from mosquitoes</li>
                        <li>• Wear clean clothes and use separate towels</li>
                      </ul>
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-2 border-black">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <ClipboardCheck className="h-8 w-8 text-black flex-shrink-0" />
                  <div>
                    <CardTitle className="text-xl mb-2">Regular Health Checkups</CardTitle>
                    <CardDescription className="text-base">
                      <ul className="space-y-2 mt-3">
                        <li>• Annual comprehensive health screening is mandatory</li>
                        <li>• Get vaccinated as per the immunization schedule</li>
                        <li>• Monitor blood pressure and blood sugar regularly</li>
                        <li>• Report any health issues to medical officer immediately</li>
                        <li>• Keep vaccination records and health documents updated</li>
                      </ul>
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-2 border-black">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <AlertCircle className="h-8 w-8 text-black flex-shrink-0" />
                  <div>
                    <CardTitle className="text-xl mb-2">Workplace Safety Guidelines</CardTitle>
                    <CardDescription className="text-base">
                      <ul className="space-y-2 mt-3">
                        <li>• Always use personal protective equipment (PPE) at work</li>
                        <li>• Follow safety protocols for machinery and equipment</li>
                        <li>• Report workplace hazards to supervisors</li>
                        <li>• Take regular breaks to avoid fatigue and heat stress</li>
                        <li>• Know emergency procedures and first aid location</li>
                      </ul>
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-2 border-black">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <Info className="h-8 w-8 text-black flex-shrink-0" />
                  <div>
                    <CardTitle className="text-xl mb-2">COVID-19 and Infectious Disease Prevention</CardTitle>
                    <CardDescription className="text-base">
                      <ul className="space-y-2 mt-3">
                        <li>• Wear masks in crowded places and when feeling unwell</li>
                        <li>• Maintain physical distancing when possible</li>
                        <li>• Cover mouth while coughing or sneezing</li>
                        <li>• Stay home if experiencing fever or respiratory symptoms</li>
                        <li>• Complete COVID-19 vaccination including boosters</li>
                      </ul>
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>

          <div className="mt-12 bg-white p-8 rounded-lg border-2 border-black">
            <h2 className="text-2xl font-bold text-black mb-4">Emergency Contact Numbers</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 border-2 border-gray-200 rounded">
                <h3 className="font-semibold text-black">Health Helpline</h3>
                <p className="text-2xl font-bold text-black">104</p>
              </div>
              <div className="p-4 border-2 border-gray-200 rounded">
                <h3 className="font-semibold text-black">Ambulance Service</h3>
                <p className="text-2xl font-bold text-black">108</p>
              </div>
              <div className="p-4 border-2 border-gray-200 rounded">
                <h3 className="font-semibold text-black">Labour Welfare</h3>
                <p className="text-2xl font-bold text-black">1800-425-1234</p>
              </div>
              <div className="p-4 border-2 border-gray-200 rounded">
                <h3 className="font-semibold text-black">Mental Health Support</h3>
                <p className="text-2xl font-bold text-black">1800-599-0019</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Guidelines;
