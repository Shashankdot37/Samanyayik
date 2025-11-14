import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import FaqPage from "./pages/FAQ";
import News from "./pages/News";
import OurServices from "./pages/OurServices";
import AboutUs from "./pages/AboutUs";
import Appointment from "./pages/Appointment";
import NoticesPage from "./pages/NoticesPage";
import ContactUs from "./pages/ContactUs";
import Research from "./pages/Research";

function App() {
  return (
    <div className="min-h-screen bg-[#f4ecdf] text-[#0b3b2e]">
      <main id="main" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/faqs" element={<FaqPage />} />
          <Route path="/news" element={<News />} />
          <Route path="/services" element={<OurServices/>} />
          <Route path="/aboutus" element={<AboutUs/>} />
          <Route path="/appointment" element={<Appointment/>} />
          <Route path="/notices" element={<NoticesPage/>} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route path="/research" element={<Research/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

