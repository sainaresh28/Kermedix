import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Video, Phone, MessageSquare, Calendar } from "lucide-react";

const Telemedicine = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-black mb-4">Telemedicine Services</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Connect with healthcare professionals remotely through video, phone, or chat consultations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-2 border-black">
              <CardHeader>
                <Video className="h-12 w-12 mb-4 text-black" />
                <CardTitle>Video Consultation</CardTitle>
                <CardDescription>
                  Face-to-face consultation with doctors through secure video calls from anywhere
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-black">
              <CardHeader>
                <Phone className="h-12 w-12 mb-4 text-black" />
                <CardTitle>Phone Consultation</CardTitle>
                <CardDescription>
                  Quick medical advice and follow-ups through telephone consultations
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-black">
              <CardHeader>
                <MessageSquare className="h-12 w-12 mb-4 text-black" />
                <CardTitle>Chat Support</CardTitle>
                <CardDescription>
                  Text-based medical consultations and health queries resolution
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-black">
              <CardHeader>
                <Calendar className="h-12 w-12 mb-4 text-black" />
                <CardTitle>Easy Scheduling</CardTitle>
                <CardDescription>
                  Book appointments at your convenience with flexible time slots
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="bg-white p-8 rounded-lg border-2 border-black mb-8">
            <h2 className="text-2xl font-bold text-black mb-6">How It Works</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">1</span>
                <div>
                  <h3 className="font-semibold text-black">Book an Appointment</h3>
                  <p className="text-gray-700">Choose your preferred doctor and time slot through the portal</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</span>
                <div>
                  <h3 className="font-semibold text-black">Get Confirmation</h3>
                  <p className="text-gray-700">Receive appointment details and consultation link via SMS/email</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</span>
                <div>
                  <h3 className="font-semibold text-black">Join Consultation</h3>
                  <p className="text-gray-700">Connect with your doctor at scheduled time through video/phone/chat</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">4</span>
                <div>
                  <h3 className="font-semibold text-black">Receive Prescription</h3>
                  <p className="text-gray-700">Get digital prescription and follow-up instructions automatically</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg border-2 border-black">
            <h2 className="text-2xl font-bold text-black mb-4">Available in Multiple Languages</h2>
            <p className="text-gray-700">
              Consultations available in Hindi, Malayalam, Bengali, Oriya, and other regional languages to ensure clear communication
            </p>
          </div>
        </div>
      </div>
  );
};

export default Telemedicine;
