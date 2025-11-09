import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import FaqPage from "./pages/FAQ";
import News from "./pages/News";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <div className="min-h-screen bg-[#f4ecdf] text-[#0b3b2e]">
      <main id="main" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/faqs" element={<FaqPage />} />
          <Route path="/news" element={<News />} />
          <Route path="/services" element={<Services/>} />
          <Route path="/aboutus" element={<AboutUs/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

