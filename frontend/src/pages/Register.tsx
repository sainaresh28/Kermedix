import { useState, useEffect } from "react";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
//import { useAuth } from "../context/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2, CheckCircle2, XCircle } from "lucide-react";
//import { hospitalAPI } from "@/pages/services/api";

import leftVideo from "@/assets/ytc3d9r6x67Ic6K0Ba.mp4";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    age: "",
    gender: "",
    contact: "",
    address: "",

    state: "Kerala",
    district: "",
    localAddress: "",

    role: "migrant",
    
    // Doctor-specific fields (NEW)
    designation: "",
    specialization: "",
    hospital: "", // Hospital ObjectId
    qualification: "",
    experience: "",
    consultationFee: "",
    availability: {
      days: [],
      timeSlots: [],
    },
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [hospitals, setHospitals] = useState([]);
  const [loadingHospitals, setLoadingHospitals] = useState(false);
  const [animate, setAnimate] = useState(false);

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  //const { register } = useAuth();

  const isDoctor = formData.role === "doctor";

  // Animation effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  // Fetch hospitals when doctor selects a district
  /*
  
  useEffect(() => {
    if (isDoctor && formData.district) {
      fetchHospitalsByDistrict(formData.district);
    }
  }, [isDoctor, formData.district]);

  const fetchHospitalsByDistrict = async (district) => {
    setLoadingHospitals(true);
    try {
      const response = await hospitalAPI.getAllHospitals({ district, page: 1, limit: 100 });
      setHospitals(response.hospitals || []);
    } catch (err) {
      console.error("Failed to fetch hospitals:", err);
      toast.error("Failed to load hospitals");
      setHospitals([]);
    } finally {
      setLoadingHospitals(false);
    }
  };

  */

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Validation
    if (!formData.district || !formData.localAddress) {
      toast.error("Current address missing", {
        description: "Please select your district and enter your current local address in Kerala.",
        icon: <XCircle className="h-5 w-5" />,
      });
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!", {
        description: "Please make sure both passwords are identical.",
        icon: <XCircle className="h-5 w-5" />,
      });
      setError("Passwords do not match!");
      return;
    }

    if (formData.password.length < 6) {
      toast.error("Password too short", {
        description: "Password must be at least 6 characters long.",
        icon: <XCircle className="h-5 w-5" />,
      });
      setError("Password must be at least 6 characters long");
      return;
    }

    // Doctor-specific validation
    if (isDoctor && (!formData.designation || !formData.specialization || !formData.hospital)) {
      toast.error("Missing information", {
        description: "Please fill in all doctor-specific fields (designation, specialization, hospital).",
        icon: <XCircle className="h-5 w-5" />,
      });
      setError("Please fill in all doctor-specific fields");
      return;
    }

    setLoading(true);

    try {
      //const result = await register(formData);

      if (result.success) {
        toast.success("Registration successful! 🎉", {
          description: "Welcome aboard! Redirecting to your dashboard...",
          icon: <CheckCircle2 className="h-5 w-5" />,
          duration: 3000,
        });

        setTimeout(() => {
          if (formData.role === "admin") {
            navigate("/dashboard/admin");
          } else if (formData.role === "doctor") {
            navigate("/dashboard/doctor");
          } else {
            navigate("/dashboard/migrant");
          }
        }, 1500);
      } else {
        toast.error("Registration failed", {
          description: result.error || "Please try again.",
          icon: <XCircle className="h-5 w-5" />,
        });
        setError(result.error || "Registration failed. Please try again.");
      }
    } catch (err) {
      toast.error("Something went wrong", {
        description: "An unexpected error occurred. Please try again.",
        icon: <XCircle className="h-5 w-5" />,
      });
      setError("An unexpected error occurred. Please try again.");
      console.error("Registration error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDaysChange = (day) => {
    setFormData((prev) => ({
      ...prev,
      availability: {
        ...prev.availability,
        days: prev.availability.days.includes(day)
          ? prev.availability.days.filter((d) => d !== day)
          : [...prev.availability.days, day],
      },
    }));
  };

  const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const specializations = [
    "General Medicine",
    "Cardiology",
    "Pediatrics",
    "Dermatology",
    "Gynecology",
    "Orthopedics",
    "ENT",
    "Ophthalmology",
    "Dentistry",
    "Psychiatry",
    "Neurology",
    "Nephrology",
    "Urology",
    "General Surgery",
    "Emergency Medicine",
  ];

  return (
    <div className="min-h-screen bg-transparent flex items-center justify-center pt-28 pb-8 px-4 sm:px-6">

      <div className="w-full max-w-7xl md:grid md:grid-cols-2 bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden border-2 border-yellow-300">
        
        {/* Video Section */}
        <div
          className={`flex items-center justify-center 
          transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
          ${animate 
            ? "h-0 opacity-0 -translate-y-full md:h-auto md:opacity-100 md:translate-y-0 md:translate-x-full" 
            : "h-68 sm:h-64 md:h-auto opacity-100 translate-y-0 md:translate-x-0"
          }
          overflow-hidden`}
        >
          <video
            src={leftVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-contain p-2 rounded-2xl"
          />
        </div>

        {/* Form Section */}
        <div
          className={`flex items-start justify-center px-4 sm:px-6 md:px-10 py-6 sm:py-8 md:py-6 bg-gradient-to-br from-yellow-50 to-amber-50
          transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] overflow-y-auto
          ${animate 
            ? "opacity-100 md:-translate-x-full" 
            : "opacity-0 md:opacity-100 md:translate-x-0"
          }
          ${animate ? "max-h-[calc(100vh-2rem)] sm:max-h-[calc(100vh-4rem)] md:max-h-[90vh]" : "max-h-0 md:max-h-[90vh]"}`}
        >
          <div className="w-full max-w-md">
            {/* Header */}
            <div className="text-center mb-4 sm:mb-6">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-amber-400 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-2 sm:mb-3">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="text-xs sm:text-sm font-bold text-black uppercase tracking-wide">Registration Form</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-black">Create your account</h2>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                Access secure digital health records
              </p>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-3 sm:mb-4 p-2.5 sm:p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-700 text-xs sm:text-sm font-medium">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              {/* Role */}
              <div>
                <Label htmlFor="role" className="text-black font-medium text-xs sm:text-sm">
                  Register as
                </Label>
                <Select
                  value={formData.role}
                  onValueChange={(value) => handleSelectChange("role", value)}
                  disabled={loading}
                >
                  <SelectTrigger className="mt-1 sm:mt-1.5 h-9 sm:h-10">
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem 
                      value="migrant" 
                      className="font-medium cursor-pointer focus:bg-blue-600 focus:text-white hover:bg-blue-600 hover:text-white"
                    >
                      Migrant / Public
                    </SelectItem>
                    <SelectItem 
                      value="doctor" 
                      className="font-medium cursor-pointer focus:bg-blue-600 focus:text-white hover:bg-blue-600 hover:text-white"
                    >
                      Doctor
                    </SelectItem>
                    <SelectItem 
                      value="admin" 
                      className="font-medium cursor-pointer focus:bg-blue-600 focus:text-white hover:bg-blue-600 hover:text-white"
                    >
                      Admin
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Doctor-only fields */}
              {isDoctor && (
                <div className="border-2 border-yellow-400 rounded-lg p-3 sm:p-4 space-y-3 bg-gradient-to-br from-yellow-100 to-yellow-50">
                  <h3 className="text-sm sm:text-base font-semibold text-black">
                    Doctor Professional Information
                  </h3>

                  {/* Designation + Specialization */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <Label htmlFor="designation" className="text-black font-medium text-xs sm:text-sm">
                        Designation *
                      </Label>
                      <Input
                        id="designation"
                        name="designation"
                        type="text"
                        value={formData.designation}
                        onChange={handleInputChange}
                        className="mt-1 sm:mt-1.5 h-9 sm:h-10 text-sm"
                        placeholder="e.g., Senior Consultant"
                        required={isDoctor}
                        disabled={loading}
                      />
                    </div>

                    <div>
                      <Label htmlFor="specialization" className="text-black font-medium text-xs sm:text-sm">
                        Specialization *
                      </Label>
                      <Select
                        value={formData.specialization}
                        onValueChange={(value) => handleSelectChange("specialization", value)}
                        disabled={loading}
                      >
                        <SelectTrigger className="mt-1 sm:mt-1.5 h-9 sm:h-10">
                          <SelectValue placeholder="Select specialization" />
                        </SelectTrigger>
                        <SelectContent className="max-h-60">
                          {specializations.map((spec) => (
                            <SelectItem 
                              key={spec} 
                              value={spec} 
                              className="cursor-pointer focus:bg-blue-600 focus:text-white hover:bg-blue-600 hover:text-white"
                            >
                              {spec}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Qualification + Experience */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <Label htmlFor="qualification" className="text-black font-medium text-xs sm:text-sm">
                        Qualification
                      </Label>
                      <Input
                        id="qualification"
                        name="qualification"
                        type="text"
                        value={formData.qualification}
                        onChange={handleInputChange}
                        className="mt-1 sm:mt-1.5 h-9 sm:h-10 text-sm"
                        placeholder="e.g., MBBS, MD"
                        disabled={loading}
                      />
                    </div>

                    <div>
                      <Label htmlFor="experience" className="text-black font-medium text-xs sm:text-sm">
                        Years of Experience
                      </Label>
                      <Input
                        id="experience"
                        name="experience"
                        type="number"
                        value={formData.experience}
                        onChange={handleInputChange}
                        className="mt-1 sm:mt-1.5 h-9 sm:h-10 text-sm"
                        placeholder="e.g., 5"
                        min="0"
                        disabled={loading}
                      />
                    </div>
                  </div>

                  {/* Hospital Selection */}
                  <div>
                    <Label htmlFor="hospital" className="text-black font-medium text-xs sm:text-sm">
                      Hospital *
                    </Label>
                    <p className="text-[10px] sm:text-xs text-gray-600 mt-1 mb-1 sm:mb-1.5">
                      First select your district above, then choose your hospital
                    </p>
                    <Select
                      value={formData.hospital}
                      onValueChange={(value) => handleSelectChange("hospital", value)}
                      disabled={loading || loadingHospitals || !formData.district}
                    >
                      <SelectTrigger className="mt-1 sm:mt-1.5 h-9 sm:h-10">
                        <SelectValue 
                          placeholder={
                            !formData.district 
                              ? "Select district first from the bottom" 
                              : loadingHospitals 
                              ? "Loading hospitals..." 
                              : hospitals.length === 0 
                              ? "No hospitals found" 
                              : "Select hospital"
                          } 
                        />
                      </SelectTrigger>
                      <SelectContent className="max-h-60">
                        {hospitals.length > 0 ? (
                          hospitals.map((hospital) => (
                            <SelectItem 
                              key={hospital._id} 
                              value={hospital._id} 
                              className="cursor-pointer focus:bg-blue-600 focus:text-white hover:bg-blue-600 hover:text-white"
                            >
                              {hospital.name} - {hospital.localAddress}
                            </SelectItem>
                          ))
                        ) : (
                          <SelectItem value="no-hospitals" disabled>
                            No hospitals available
                          </SelectItem>
                        )}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Consultation Fee */}
                  <div>
                    <Label htmlFor="consultationFee" className="text-black font-medium text-xs sm:text-sm">
                      Consultation Fee (₹)
                    </Label>
                    <Input
                      id="consultationFee"
                      name="consultationFee"
                      type="number"
                      value={formData.consultationFee}
                      onChange={handleInputChange}
                      className="mt-1 sm:mt-1.5 h-9 sm:h-10 text-sm"
                      placeholder="0 for free consultation"
                      min="0"
                      disabled={loading}
                    />
                  </div>

                  {/* Available Days */}
                  <div>
                    <Label className="text-black font-medium text-xs sm:text-sm mb-2 block">
                      Available Days
                    </Label>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {weekDays.map((day) => (
                        <button
                          key={day}
                          type="button"
                          onClick={() => handleDaysChange(day)}
                          className={`px-2 sm:px-3 py-1 sm:py-1.5 rounded-md text-[10px] sm:text-xs font-medium transition-colors ${
                            formData.availability.days.includes(day)
                              ? "bg-yellow-400 text-black border-2 border-yellow-500"
                              : "bg-white text-black border-2 border-yellow-300 hover:bg-yellow-50"
                          }`}
                          disabled={loading}
                        >
                          {day.substring(0, 3)}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <Label htmlFor="name" className="text-black font-medium text-xs sm:text-sm">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="mt-1 sm:mt-1.5 h-9 sm:h-10 text-sm"
                    placeholder="Enter full name"
                    required
                    disabled={loading}
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-black font-medium text-xs sm:text-sm">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-1 sm:mt-1.5 h-9 sm:h-10 text-sm"
                    placeholder="Enter email address"
                    required
                    disabled={loading}
                  />
                </div>
              </div>

              {/* Age + Gender */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <Label htmlFor="age" className="text-black font-medium text-xs sm:text-sm">
                    Age *
                  </Label>
                  <Input
                    id="age"
                    name="age"
                    type="number"
                    value={formData.age}
                    onChange={handleInputChange}
                    className="mt-1 sm:mt-1.5 h-9 sm:h-10 text-sm"
                    placeholder="Enter your age"
                    required
                    disabled={loading}
                  />
                </div>

                <div>
                  <Label htmlFor="gender" className="text-black font-medium text-xs sm:text-sm">
                    Gender *
                  </Label>
                  <Select
                    value={formData.gender}
                    onValueChange={(value) => handleSelectChange("gender", value)}
                    disabled={loading}
                  >
                    <SelectTrigger className="mt-1 sm:mt-1.5 h-9 sm:h-10">
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem 
                        value="male" 
                        className="cursor-pointer focus:bg-blue-600 focus:text-white hover:bg-blue-600 hover:text-white"
                      >
                        Male
                      </SelectItem>
                      <SelectItem 
                        value="female" 
                        className="cursor-pointer focus:bg-blue-600 focus:text-white hover:bg-blue-600 hover:text-white"
                      >
                        Female
                      </SelectItem>
                      <SelectItem 
                        value="other" 
                        className="cursor-pointer focus:bg-blue-600 focus:text-white hover:bg-blue-600 hover:text-white"
                      >
                        Other
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Contact */}
              <div>
                <Label htmlFor="contact" className="text-black font-medium text-xs sm:text-sm">
                  Phone Number *
                </Label>
                <Input
                  id="contact"
                  name="contact"
                  type="tel"
                  value={formData.contact}
                  onChange={handleInputChange}
                  className="mt-1 sm:mt-1.5 h-9 sm:h-10 text-sm"
                  placeholder="Phone number"
                  required
                  disabled={loading}
                />
              </div>

              {/* Address */}
              <div>
                <Label htmlFor="address" className="text-black font-medium text-xs sm:text-sm">
                  Address (Your Permanent Address) *
                </Label>
                <Input
                  id="address"
                  name="address"
                  type="text"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="mt-1 sm:mt-1.5 h-9 sm:h-10 text-sm"
                  placeholder="Enter full address"
                  required
                  disabled={loading}
                />
              </div>

              {/* Current Address in Kerala */}
              <div className="border-2 border-yellow-300 rounded-lg p-3 sm:p-4 space-y-3 bg-gradient-to-br from-yellow-50 to-amber-50">
                <h3 className="text-sm sm:text-base font-semibold text-black">
                  Current Address in Kerala
                </h3>

                {/* State */}
                <div>
                  <Label className="text-black font-medium text-xs sm:text-sm">State *</Label>
                  <Input
                    value="Kerala"
                    disabled
                    className="mt-1 sm:mt-1.5 h-9 sm:h-10 bg-yellow-100 border-yellow-200 text-sm"
                  />
                </div>

                {/* District */}
                <div>
                  <Label className="text-black font-medium text-xs sm:text-sm">District *</Label>
                  <Select
                    value={formData.district}
                    onValueChange={(value) => {
                      handleSelectChange("district", value);
                      // Reset hospital selection when district changes
                      setFormData(prev => ({ ...prev, hospital: "" }));
                    }}
                    disabled={loading}
                  >
                    <SelectTrigger className="mt-1 sm:mt-1.5 h-9 sm:h-10">
                      <SelectValue placeholder="Select district" />
                    </SelectTrigger>
                    <SelectContent>
                      {[
                        "Thiruvananthapuram",
                        "Kollam",
                        "Pathanamthitta",
                        "Alappuzha",
                        "Kottayam",
                        "Idukki",
                        "Ernakulam",
                        "Thrissur",
                        "Palakkad",
                        "Malappuram",
                        "Kozhikode",
                        "Wayanad",
                        "Kannur",
                        "Kasaragod",
                      ].map((d) => (
                        <SelectItem 
                          key={d} 
                          value={d} 
                          className="cursor-pointer focus:bg-blue-600 focus:text-white hover:bg-blue-600 hover:text-white"
                        >
                          {d}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Local Address */}
                <div>
                  <Label htmlFor="localAddress" className="text-black font-medium text-xs sm:text-sm">
                    Local Address (Current Stay) *
                  </Label>
                  <Input
                    id="localAddress"
                    name="localAddress"
                    type="text"
                    value={formData.localAddress}
                    onChange={handleInputChange}
                    className="mt-1 sm:mt-1.5 h-9 sm:h-10 text-sm"
                    placeholder="House name, street, ward, landmark, camp, etc."
                    required
                    disabled={loading}
                  />
                </div>
              </div>

              {/* Password + Confirm Password */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <Label htmlFor="password" className="text-black font-medium text-xs sm:text-sm">
                    Password *
                  </Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="mt-1 sm:mt-1.5 h-9 sm:h-10 text-sm"
                    placeholder="Create password"
                    required
                    disabled={loading}
                  />
                </div>

                <div>
                  <Label htmlFor="confirmPassword" className="text-black font-medium text-xs sm:text-sm">
                    Confirm Password *
                  </Label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="mt-1 sm:mt-1.5 h-9 sm:h-10 text-sm"
                    placeholder="Confirm password"
                    required
                    disabled={loading}
                  />
                </div>
              </div>

              {/* Submit + Other Options */}
              <div className="flex flex-col gap-2.5 sm:gap-3 pt-2">
                <Button
                  type="submit"
                  className="w-full bg-[#0b35ed] text-white hover:bg-black h-10 sm:h-11 text-sm sm:text-base border-2 border-[#0b35ed] hover:border-black transition-all"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Creating Account...
                    </>
                  ) : (
                    "Create Account"
                  )}
                </Button>

                <div className="flex items-center my-1 sm:my-2">
                  <div className="flex-grow border-t border-yellow-300"></div>
                  <span className="font-medium mx-2 sm:mx-3 text-xs sm:text-sm text-gray-600 whitespace-nowrap">
                    REGISTER 
                  </span>
                  <div className="flex-grow border-t border-yellow-300"></div>
                </div>

                <Button
                  asChild
                  variant="outline"
                  className="w-full h-10 sm:h-11 text-sm sm:text-base flex items-center justify-center gap-2 sm:gap-3
                  border-2 border-yellow-400 text-black bg-white 
                  shadow-[0_4px_0_#fbbf24] sm:shadow-[0_5px_0_#fbbf24]
                  active:translate-y-[3px]
                  active:shadow-[0_1px_0_#fbbf24] sm:active:shadow-[0_2px_0_#fbbf24]"
                  disabled={loading}
                >
                  <Link to="/">Back to Home</Link>
                </Button>

                <p className="text-center text-xs sm:text-sm text-gray-500 mt-1 sm:mt-2">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="font-medium text-black hover:underline"
                  >
                    Sign in
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
