import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import FaqPage from "./pages/FAQ";
import News from "./pages/News";


function App() {
  return (
    <div className="min-h-screen bg-[#f4ecdf] text-[#0b3b2e]">
      <main id="main" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/faqs" element={<FaqPage />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

