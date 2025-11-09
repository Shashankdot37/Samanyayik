import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import "../index.css"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="bg-emerald-950 text-orange-100 px-6 py-4 rounded-b-[30px] sticky top-0 z-50 shadow-md"
      style={{
        paddingBottom: "0.5rem",
        paddingLeft: "1rem",
        paddingRight: "1rem",
        paddingTop: "0.5rem",
      }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo + Title */}
        <div className="flex items-center gap-3">
          <NavLink
            to="/"
            className="flex items-center hover-pointer gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 rounded-lg transition-transform hover:scale-105"
            aria-label="Go to Samanyayik homepage"
          >
          <img
            src={logo}
            alt="Samanyayik Logo"
            className="w-14 h-14 sm:w-20 sm:h-20 rounded-full"
          />
          <h1
            className="font-[EB_Garamond] text-xl sm:text-2xl md:text-3xl font-bold"
            style={{ fontSize: "clamp(1.2rem, 2vw, 30px)", fontWeight: "bold" }}
          >
            Samanyayik
          </h1>
        </NavLink>
        </div>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex gap-8 lg:gap-10 hover-pointer text-orange-200 font-semibold"
          style={{ fontSize: "0.9rem", fontFamily: "Inter, sans-serif" }}
        >
          {["news", "faqs", "services", "aboutus"].map((path) => (
            <NavLink
              key={path}
              to={`/${path}`}
              className={({ isActive }) =>
                `relative pb-1 transition-all duration-300 ${isActive
                  ? "text-orange-100 after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-orange-100"
                  : "hover:text-orange-100"
                }`
              }
            >
              {path === "services"
                ? "Services"
                : path.charAt(0).toUpperCase() + path.slice(1)}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-orange-100 hover-pointer focus:outline-none"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav
          className="md:hidden text-black mt-4 flex flex-col gap-3 bg-emerald-900/90 rounded-lg py-4 px-6 animate-slideDown"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "0.9rem",
            padding: "0.5rem",
            marginTop: "0.5rem"
          }}
        >
          {["news", "faqs", "services", "aboutus"].map((path) => (
            <NavLink
              key={path}
              to={`/${path}`}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block py-2 px-3 rounded-md transition-all duration-200 ${isActive
                  ? "bg-orange-100 text-emerald-950 font-semibold"
                  : "hover:bg-orange-100/20"
                }`
              }

              style={{ padding: "0.5rem" }}
            >
              {path === "services"
                ? "Practice Areas"
                : path.charAt(0).toUpperCase() + path.slice(1)}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
