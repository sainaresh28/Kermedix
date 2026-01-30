import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { User, FileText, QrCode, Phone } from 'lucide-react';

const Help = () => {
  return (
    <div className="min-h-[80vh] bg-background py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Help & User Guide
          </h1>
          <p className="text-xl text-muted-foreground">
            Learn how to use the KerMedix Health portal
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Getting Started
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p>1. Register with your Worker ID</p>
              <p>2. Verify your email address</p>
              <p>3. Complete your profile information</p>
              <p>4. Start accessing your health records</p>
              <Button variant="outline" className="w-full mt-4">
                Watch Tutorial Video
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Managing Records
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p>• View all your medical history</p>
              <p>• Download prescription PDFs</p>
              <p>• Track vaccination schedule</p>
              <p>• Share records with new doctors</p>
              <Button variant="outline" className="w-full mt-4">
                View Sample Record
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <QrCode className="h-5 w-5" />
                Digital Health ID
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p>• Generate QR code for quick access</p>
              <p>• Show to healthcare providers</p>
              <p>• Works offline for emergencies</p>
              <p>• Contains essential health info</p>
              <Button variant="outline" className="w-full mt-4">
                Generate My QR Code
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Need More Help?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p><strong>Helpline:</strong> 1800-XXX-XXXX</p>
              <p><strong>Email:</strong> help@KerMedixhealth.gov.in</p>
              <p><strong>Hours:</strong> 9 AM - 6 PM, Mon-Fri</p>
              <p><strong>Languages:</strong> Malayalam, Hindi, English</p>
              <Button variant="outline" className="w-full mt-4">
                Contact Support
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Help;