import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const HeroSection: React.FC = () => {
  return (
    <section className="w-full h-screen">
      <div className="flex sm:flex-col lg:flex-row md:flex-row h-full">
        {/* Left panel */}
        <div
          className="flex-1 flex items-start justify-start p-6 md:p-8 lg:p-16 h-full"
          style={{ backgroundColor: "#043222", borderTopRightRadius: 58 }}
        >
          <div className="w-sm">
            <Link
            to="/"
            className="flex items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6"
            aria-label="Go to home"
            style={{ marginTop: 20, marginLeft: 20 }}
          >
            <img
              src={logo}
              alt="Samanyayik logo"
              className="w-sm h-sm sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-sm"
            />
            <div
              className="font-bold text-[#F6E9D9]"
              style={{
                fontFamily: "'EB Garamond', serif",
                fontSize: "clamp(1.2rem, 3vw, 2rem)", // smaller, responsive
              }}
            >
              Samanyayik
            </div>
          </Link>
          </div>
          
        </div>

        {/* Right panel */}
        <div
          className="flex-1 bg-[#F6E9D9] h-full"
          style={{ borderTopLeftRadius: 58 }}
        >
          {/* Right side content */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
