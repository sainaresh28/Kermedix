import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import DashboardLayout from "@/components/DashboardLayout";
import { ArrowLeft } from "lucide-react";

const AddRecord = () => {
  const [formData, setFormData] = useState({
    patientName: "",
    age: "",
    workerId: "",
    diagnosis: "",
    prescription: "",
    doctorName: ""
  });
  
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("New health record:", formData);
    
    // Mock submission - in real app, send to backend
    alert("Health record added successfully!");
    navigate("/dashboard");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <DashboardLayout>
      <div className="max-w-2xl mx-auto py-8">
        <div className="mb-6 flex items-center gap-4">
          <Button
            onClick={() => navigate(-1)}
            variant="outline"
            className="border-2 border-black"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-black">Add New Health Record</h2>
            <p className="text-gray-600 mt-2">
              Enter patient information and medical details
            </p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg border-2 border-black shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="patientName" className="text-black font-medium">
                  Patient Name *
                </Label>
                <Input
                  id="patientName"
                  name="patientName"
                  type="text"
                  value={formData.patientName}
                  onChange={handleInputChange}
                  className="mt-2 w-full px-4 py-3 rounded-lg border-2 border-black bg-white text-black"
                  placeholder="Enter patient's full name"
                  required
                />
              </div>

              <div>
                <Label htmlFor="age" className="text-black font-medium">
                  Age *
                </Label>
                <Input
                  id="age"
                  name="age"
                  type="number"
                  value={formData.age}
                  onChange={handleInputChange}
                  className="mt-2 w-full px-4 py-3 rounded-lg border-2 border-black bg-white text-black"
                  placeholder="Patient's age"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="workerId" className="text-black font-medium">
                  Worker ID *
                </Label>
                <Input
                  id="workerId"
                  name="workerId"
                  type="text"
                  value={formData.workerId}
                  onChange={handleInputChange}
                  className="mt-2 w-full px-4 py-3 rounded-lg border-2 border-black bg-white text-black"
                  placeholder="Unique worker identification"
                  required
                />
              </div>

              <div>
                <Label htmlFor="doctorName" className="text-black font-medium">
                  Doctor Name *
                </Label>
                <Input
                  id="doctorName"
                  name="doctorName"
                  type="text"
                  value={formData.doctorName}
                  onChange={handleInputChange}
                  className="mt-2 w-full px-4 py-3 rounded-lg border-2 border-black bg-white text-black"
                  placeholder="Attending physician"
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="diagnosis" className="text-black font-medium">
                Diagnosis *
              </Label>
              <Input
                id="diagnosis"
                name="diagnosis"
                type="text"
                value={formData.diagnosis}
                onChange={handleInputChange}
                className="mt-2 w-full px-4 py-3 rounded-lg border-2 border-black bg-white text-black"
                placeholder="Medical diagnosis or condition"
                required
              />
            </div>

            <div>
              <Label htmlFor="prescription" className="text-black font-medium">
                Prescription/Notes *
              </Label>
              <Textarea
                id="prescription"
                name="prescription"
                value={formData.prescription}
                onChange={handleInputChange}
                className="mt-2 min-h-24 w-full px-4 py-3 rounded-lg border-2 border-black bg-white text-black"
                placeholder="Prescribed medications, treatment plan, and additional notes"
                required
              />
            </div>

            <div className="flex gap-4 pt-4">
              <Button type="submit" className="flex-1 bg-black text-white hover:bg-gray-900">
                Submit Record
              </Button>
              
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => navigate("/dashboard")}
                className="flex-1 border-2 border-black text-black hover:bg-gray-100"
              >
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AddRecord;