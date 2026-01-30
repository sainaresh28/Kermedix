import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, FileText, User, Plus, Settings, LogOut, Activity, BarChart } from "lucide-react";

interface DashboardLayoutProps {
  children: React.ReactNode;
  userRole?: string;
  sidebarItems?: Array<{ name: string; path: string; icon: any }>;
}

const DashboardLayout = ({ children, userRole = "Health Worker", sidebarItems = [] }: DashboardLayoutProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-72 bg-white shadow-lg border-r-2 border-black">
        <div className="p-6 border-b-2 border-black">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">K</span>
            </div>
            <div>
              <h2 className="text-lg font-bold text-black">KerMedix Portal</h2>
              <p className="text-sm text-gray-600">Digital Health System</p>
            </div>
          </div>
        </div>
        
        <nav className="mt-6 px-4">
          {sidebarItems.length > 0 && sidebarItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-3 px-4 py-3 mb-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-black text-white shadow-md"
                    : "text-gray-700 hover:text-black hover:bg-gray-100"
                }`}
              >
                <Icon className="h-5 w-5" />
                <span>{item.name}</span>
              </Link>
            );
          })}
          
          <div className="border-t-2 border-black mt-6 pt-6">
            <button
              onClick={handleLogout}
              className="flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium text-gray-700 hover:text-black hover:bg-gray-100 w-full transition-all duration-200"
            >
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </button>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <div className="bg-white border-b-2 border-black px-8 py-6 shadow-sm">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-black">
                Welcome back, {userRole}
              </h1>
              <p className="text-sm text-gray-600 mt-1">
                {new Date().toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>
            <div className="flex items-center space-x-4">

              <Button variant="outline" onClick={handleLogout} className="border-2 border-black hover:bg-black hover:text-white">
                Logout
              </Button>
            </div>
          </div>
        </div>

        {/* Page Content */}
        <div className="flex-1 p-8 overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;