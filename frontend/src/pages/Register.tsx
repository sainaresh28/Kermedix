import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

import leftVideo from "@/assets/ytc3d9r6x67Ic6K0Ba.mp4";

const Register = () => {
  const navigate = useNavigate();

  
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 700);

    return () => clearTimeout(timer);
  }, []);
  

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    contact: "",
    role: "migrant",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-transparent flex items-start justify-center pt-32 md:pt-36">
      <div
        className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2
        bg-transparent rounded-3xl shadow-xl overflow-hidden
        border border-[#e5e5ea]"
      >

        <div
          className={`hidden md:flex items-center justify-center bg-white
          transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
          ${animate ? "md:translate-x-full" : ""}`}
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

        <div
          className={`flex items-start justify-center px-10 py-8 md:py-5
          transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
          ${animate ? "md:-translate-x-full" : ""}`}
        >
          <div className="w-full max-w-md flex flex-col justify-center">

            <h2 className="text-3xl font-semibold text-black text-center">
              Create your account
            </h2>
            <p className="text-sm text-gray-500 text-center mt-1 mb-6">
              Access secure digital health records
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">

              <div>
                <Label>Register as</Label>
                <Select
                  value={formData.role}
                  onValueChange={(v) => handleSelectChange("role", v)}
                >
                  <SelectTrigger className="mt-2">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem
                      value="migrant"
                      className="cursor-pointer focus:bg-blue-600 focus:text-white hover:bg-blue-600 hover:text-white"
                    >
                      Migrant / Public
                    </SelectItem>

                    <SelectItem
                      value="doctor"
                      className="cursor-pointer focus:bg-blue-600 focus:text-white hover:bg-blue-600 hover:text-white"
                    >
                      Doctor
                    </SelectItem>

                    <SelectItem
                      value="admin"
                      className="cursor-pointer focus:bg-blue-600 focus:text-white hover:bg-blue-600 hover:text-white"
                    >
                      Admin
                    </SelectItem>
                  </SelectContent>

                </Select>
              </div>

              <Input
                name="name"
                placeholder="Full name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />

              <Input
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleInputChange}
                required
              />

              <Input
                name="contact"
                placeholder="Phone number"
                value={formData.contact}
                onChange={handleInputChange}
                required
              />

              <div className="grid grid-cols-2 gap-3">
                <Input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
                <Input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <Button className="w-full bg-[#0b35ed] text-white hover:bg-gray-900">
                Create Account
              </Button>

  
              <div className="flex items-center my-4">
                <div className="flex-grow border-t border-neutral-300"></div>

                <span className="mx-3 text-sm text-neutral-500 whitespace-nowrap">
                  Or sign up with
                </span>

                <div className="flex-grow border-t border-neutral-300"></div>
              </div>

              <Button
                type="button"
                variant="outline"
                className="w-full h-11 flex items-center justify-center gap-3
                border-neutral-300 text-[#010008]
                shadow-[0_5px_0_#d4d4d4]
                active:translate-y-[3px]
                active:shadow-[0_2px_0_#d4d4d4]"
              >
                Sign up with Google
              </Button>

              <Button
                asChild
                variant="outline"
                className="w-full h-11 flex items-center justify-center gap-3
                border-neutral-300 text-[#010008]
                shadow-[0_5px_0_#d4d4d4]
                active:translate-y-[3px]
                active:shadow-[0_2px_0_#d4d4d4]"
              >
                <Link to="/">Back to Home</Link>
              </Button>

              <p className="text-center text-sm text-gray-500 mt-3">
                Already have an account?{" "}
                <Link to="/login" className="text-black font-medium hover:underline">
                  Sign in
                </Link>
              </p>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
