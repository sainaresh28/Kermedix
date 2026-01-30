import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Syringe, Shield, Calendar, Bell } from "lucide-react";

const Vaccination = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-black mb-4">Vaccination Services</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive immunization programs to protect migrant workers from preventable diseases
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-2 border-black">
              <CardHeader>
                <Syringe className="h-12 w-12 mb-4 text-black" />
                <CardTitle>Essential Vaccinations</CardTitle>
                <CardDescription>
                  Complete coverage of WHO-recommended vaccines including COVID-19, Hepatitis B, Tetanus, and more
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-black">
              <CardHeader>
                <Shield className="h-12 w-12 mb-4 text-black" />
                <CardTitle>Protection Record</CardTitle>
                <CardDescription>
                  Digital vaccination certificate and complete immunization history tracking
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-black">
              <CardHeader>
                <Calendar className="h-12 w-12 mb-4 text-black" />
                <CardTitle>Scheduled Camps</CardTitle>
                <CardDescription>
                  Regular vaccination camps organized at worker accommodation sites
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-black">
              <CardHeader>
                <Bell className="h-12 w-12 mb-4 text-black" />
                <CardTitle>Dose Reminders</CardTitle>
                <CardDescription>
                  Automatic reminders for booster doses and follow-up vaccinations
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="bg-white p-8 rounded-lg border-2 border-black mb-8">
            <h2 className="text-2xl font-bold text-black mb-6">Available Vaccines</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 border-2 border-gray-200 rounded">
                <h3 className="font-semibold text-black mb-2">COVID-19 Vaccination</h3>
                <p className="text-sm text-gray-600">Primary doses and booster shots</p>
              </div>
              <div className="p-4 border-2 border-gray-200 rounded">
                <h3 className="font-semibold text-black mb-2">Hepatitis B</h3>
                <p className="text-sm text-gray-600">3-dose series for liver protection</p>
              </div>
              <div className="p-4 border-2 border-gray-200 rounded">
                <h3 className="font-semibold text-black mb-2">Tetanus</h3>
                <p className="text-sm text-gray-600">Booster every 10 years</p>
              </div>
              <div className="p-4 border-2 border-gray-200 rounded">
                <h3 className="font-semibold text-black mb-2">Influenza</h3>
                <p className="text-sm text-gray-600">Annual flu vaccination</p>
              </div>
              <div className="p-4 border-2 border-gray-200 rounded">
                <h3 className="font-semibold text-black mb-2">Typhoid</h3>
                <p className="text-sm text-gray-600">Protection against typhoid fever</p>
              </div>
              <div className="p-4 border-2 border-gray-200 rounded">
                <h3 className="font-semibold text-black mb-2">Measles-Mumps-Rubella</h3>
                <p className="text-sm text-gray-600">MMR vaccine for adults</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg border-2 border-black">
            <h2 className="text-2xl font-bold text-black mb-4">Free Vaccination Program</h2>
            <p className="text-gray-700 mb-4">
              All essential vaccinations are provided free of cost to registered migrant workers under the government health scheme.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="font-bold text-black mr-2">•</span>
                <span className="text-gray-700">No charges for government-approved vaccines</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-black mr-2">•</span>
                <span className="text-gray-700">Digital vaccination certificate issued immediately</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-black mr-2">•</span>
                <span className="text-gray-700">Camp locations near worker accommodations</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
  );
};

export default Vaccination;
