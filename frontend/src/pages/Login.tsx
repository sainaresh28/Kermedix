import { useState } from "react";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import doctorImg from "@/assets/medical-5459631_1280.png";
import mobileImg from "@/assets/medical-5459661_1280.png";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const role = searchParams.get("role") || "worker";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (role === "doctor") navigate("/dashboard/doctor");
    else if (role === "admin") navigate("/dashboard/admin");
    else navigate("/dashboard/worker");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-[#F9EFE3] flex items-start pt-28">

      <div className="max-w-[95rem] mx-auto w-full px-6">


        {/* GRID WRAPPER */}
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-12">

          {/* LEFT BOTTOM IMAGE */}
          
          <div className="hidden lg:flex justify-start items-end h-full p-50 pb-54">

            <img
              src={doctorImg}
              alt="doctor illustration"
              className="w-84"
            />
          </div>

          {/* LOGIN CARD (CENTER) */}
          <div className="flex justify-center">
            <div className="bg-white border border-neutral-200 rounded-2xl shadow-sm 
                            min-h-[420px] w-full max-w-lg p-6 flex flex-col justify-center">

              <div className="text-center mb-8">
                <h1 className="text-2xl font-semibold text-neutral-900">
                  {role === "doctor"
                    ? "Doctor Login"
                    : role === "admin"
                    ? "Admin Login"
                    : "Migrant Login"}
                </h1>
                <p className="text-sm text-neutral-500 mt-1">
                  Sign in to continue to KerMedix 
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">

                <div>
                  <Label className="text-sm text-[#000414]">Email</Label>
                  <Input
                    name="username"
                    type="email"
                    value={formData.username}
                    onChange={handleInputChange}
                    placeholder="you@example.com"
                    className="mt-1 h-11"
                    required
                  />
                </div>

                <div>
                  <Label className="text-sm text-neutral-700">Password</Label>
                  <Input
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="••••••••"
                    className="mt-1 h-11"
                    required
                  />
                </div>

                <div className="flex justify-end">
                  <Link
                    to="/forgot-password"
                    className="text-sm text-neutral-500 hover:text-black"
                  >
                    Forgot password?
                  </Link>
                </div>
                <Button
                  className="h-11 w-full bg-[#002fff] text-white transition-none
                    shadow-[0_5px_0_#ffffff]
                    active:translate-y-[3px]
                    active:shadow-[0_2px_0_#001fd6]
                    hover:bg-[#002fff]
                  "
                >
                  Sign In
                </Button>


                <div className="relative my-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-neutral-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="bg-white px-3 text-neutral-500">
                      Or continue with
                    </span> 
                  </div>
                </div>

                {/* Google Sign In */}
                <Button
                  type="button"
                  variant="outline"
                   className=" w-full h-11 flex items-center justify-center gap-3 border-neutral-300 text-[#010008] transition-none
                    shadow-[0_5px_0_#d4d4d4]
                    active:translate-y-[3px]
                    active:shadow-[0_2px_0_#d4d4d4]
                    hover:bg-transparent
                  "
                  onClick={() => {
                    console.log("Google Sign In clicked");
                    
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 48 48">
                    <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.6 32.4 29.2 35 24 35c-6.1 0-11-4.9-11-11s4.9-11 11-11c2.8 0 5.4 1.1 7.3 2.9l5.7-5.7C33.6 6.4 29 4.5 24 4.5 13.8 4.5 5.5 12.8 5.5 23S13.8 41.5 24 41.5 42.5 33.2 42.5 23c0-1.1-.1-2.2-.4-3.5z"/>
                    <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.6 16.1 19 13 24 13c2.8 0 5.4 1.1 7.3 2.9l5.7-5.7C33.6 6.4 29 4.5 24 4.5c-7.2 0-13.5 4.1-16.7 10.2z"/>
                    <path fill="#4CAF50" d="M24 41.5c5.1 0 9.8-1.9 13.3-5.2l-6.1-5.2C29.4 32.6 26.8 33.5 24 33.5c-5.1 0-9.5-3.3-11-7.9l-6.5 5C9.8 36.9 16.5 41.5 24 41.5z"/>
                    <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-1.1 3-3.2 5.4-5.9 7l6.1 5.2c3.6-3.3 5.7-8.1 5.7-13.7 0-1.1-.1-2.2-.4-3.5z"/>
                  </svg>
                  <span className="text-[#010008] font-medium">
                    Sign in with Google
                  </span>
                </Button>


                <p className="text-center text-sm text-neutral-500">
                  Don’t have an account?{" "}
                  <Link to="/register" className="text-black font-medium hover:underline">
                    Sign up
                  </Link>
                </p>

                <div className="text-center">
                  <Link to="/" className="text-sm text-neutral-600 hover:text-black">
                    ← Back to Home
                  </Link>
                </div>

              </form>
            </div>
          </div>

          {/* RIGHT TOP IMAGE */}
          <div className="hidden lg:flex justify-center items-start h-full">
            <img
              src={mobileImg}
              alt="health app illustration"
              className="w-84"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;
