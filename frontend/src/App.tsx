import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import WorkerDashboard from "./pages/WorkerDashboard";
import DoctorDashboard from "./pages/DoctorDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import AddRecord from "./pages/AddRecord";
import RecordDetails from "./pages/RecordDetails";
import HealthRecords from "./pages/HealthRecords";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Contact from "./pages/Contact";
import News from "./pages/News";
import Gallery from "./pages/Gallery";
import FAQ from "./pages/FAQ";
import Help from "./pages/Help";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import HealthRecordsService from "./pages/services/HealthRecordsService";
import Screening from "./pages/services/Screening";
import Telemedicine from "./pages/services/Telemedicine";
import Vaccination from "./pages/services/Vaccination";
import Policies from "./pages/Policies";
import Guidelines from "./pages/Guidelines";
import Resources from "./pages/Resources";
import Forms from "./pages/Forms";
import Manual from "./pages/downloads/Manual";
import DownloadForms from "./pages/downloads/DownloadForms";
import Reports from "./pages/downloads/Reports";
import Certificates from "./pages/downloads/Certificates";
import './i18n';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/login" element={<Layout><Login /></Layout>} />
          <Route path="/register" element={<Layout><Register /></Layout>} />
          <Route path="/forgot-password" element={<Layout><ForgotPassword /></Layout>} />
          <Route path="/about" element={<Layout><About /></Layout>} />
          <Route path="/news" element={<Layout><News /></Layout>} />
          <Route path="/gallery" element={<Layout><Gallery /></Layout>} />
          <Route path="/contact" element={<Layout><Contact /></Layout>} />
          <Route path="/faq" element={<Layout><FAQ /></Layout>} />
          <Route path="/help" element={<Layout><Help /></Layout>} />
          <Route path="/dashboard/worker" element={<WorkerDashboard />} />
          <Route path="/dashboard/doctor" element={<DoctorDashboard />} />
          <Route path="/dashboard/admin" element={<AdminDashboard />} />
          <Route path="/dashboard/add-record" element={<AddRecord />} />
          <Route path="/dashboard/record/:id" element={<RecordDetails />} />
          <Route path="/dashboard/records" element={<HealthRecords />} />
          <Route path="/dashboard/profile" element={<Profile />} />
          <Route path="/dashboard/analytics" element={<Analytics />} />
          
          {/* Services Routes */}
          <Route path="/services/health-records" element={<Layout><HealthRecordsService /></Layout>} />
          <Route path="/services/screening" element={<Layout><Screening /></Layout>} />
          <Route path="/services/telemedicine" element={<Layout><Telemedicine /></Layout>} />
          <Route path="/services/vaccination" element={<Layout><Vaccination /></Layout>} />
          
          {/* Miscellaneous Routes */}
          <Route path="/policies" element={<Layout><Policies /></Layout>} />
          <Route path="/guidelines" element={<Layout><Guidelines /></Layout>} />
          <Route path="/resources" element={<Layout><Resources /></Layout>} />
          <Route path="/forms" element={<Layout><Forms /></Layout>} />
          
          {/* Downloads Routes */}
          <Route path="/downloads/manual" element={<Layout><Manual /></Layout>} />
          <Route path="/downloads/forms" element={<Layout><DownloadForms /></Layout>} />
          <Route path="/downloads/reports" element={<Layout><Reports /></Layout>} />
          <Route path="/downloads/certificates" element={<Layout><Certificates /></Layout>} />
          
        
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
