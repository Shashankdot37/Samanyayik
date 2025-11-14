import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import "../index.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="bg-emerald-950 text-orange-100 sticky top-0 z-50 shadow-md rounded-b-[30px]"
      role="banner"
    >
      <div
        className="max-w-screen mx-auto flex items-center justify-between px-6 py-4"
        style={{
          paddingInline: "1.5rem",
          paddingBottom: "0.5rem",
          paddingTop: "0.5rem",
          paddingRight: "2.5rem",
        }}
      >
        {/* Left Section: Logo + Title */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <NavLink
            to="/"
            className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 rounded-lg transition-transform hover:scale-105"
            aria-label="Go to Samanyayik homepage"
          >
            <img
              src={logo}
              alt="Samanyayik logo"
              className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full"
              decoding="async"
            />
            <h1
              className="font-[EB_Garamond] font-bold text-orange-50"
              style={{
                fontSize: "clamp(1.2rem, 2vw, 30px)",
              }}
            >
              Samanyayik
            </h1>
          </NavLink>
        </div>

        {/* Spacer to push nav right */}
        <div className="flex-grow" />

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center justify-end gap-8 lg:gap-10 text-orange-200"
          style={{
            fontSize: "0.875rem",
            fontFamily: "Inter, sans-serif",
          }}
          aria-label="Main navigation"
        >
          {["news", "faqs", "services", "aboutus","notices","contact"].map((path) => (
            <NavLink
              key={path}
              to={`/${path}`}
              className={({ isActive }) =>
                `relative pb-1 transition-all duration-300 after:transition-all after:duration-300 ${
                  isActive
                    ? "text-orange-100 after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-orange-100"
                    : "hover:text-orange-50 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-orange-100 hover:after:w-full"
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
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden p-2 rounded-md text-orange-100 hover:bg-emerald-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 transition"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav
          className="md:hidden mt-2 flex flex-col bg-emerald-900/95 rounded-lg py-3 px-6 space-y-2 animate-slideDown"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "0.875rem",
          }}
          aria-label="Mobile navigation"
        >
          {["news", "faqs", "services", "aboutus", "notices","contact"].map((path) => (
            <NavLink
              key={path}
              to={`/${path}`}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block py-2 px-3 rounded-md transition-all duration-200 ${
                  isActive
                    ? "bg-orange-100 text-black"
                    : "hover:bg-orange-100/20 text-black-900"
                }`
              }
              style={({ isActive }) => ({
                color: isActive ? "black" : "white",
                paddingLeft: isActive ? "1.5rem" : "1rem",
                paddingBottom: isActive ? "0.5rem" : "0.25rem",
                paddingTop: isActive ? "0.5rem" : "0.25rem",
              })}
            >
              {path === "services"
                ? "Services"
                : path.charAt(0).toUpperCase() + path.slice(1)}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
