import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="bg-emerald-950 text-orange-100 px-8 py-6 rounded-b-[40px]" style={{paddingBottom: '0.5rem', paddingLeft: '1rem', paddingRight: '1rem', paddingTop: '0.5rem'}}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Samanyayik Logo"
            className="w-20 h-20 rounded-full"
          />
          <h1 className="font-[EB_Garamond]" style={{fontSize:"30px", fontWeight:"bold"}}>Samanyayik</h1>
        </div>

        {/* Navigation */}
        <nav className="flex gap-10 text-orange-200 font-semibold" style={{ fontSize: '0.7rem', fontFamily: 'Inter, sans-serif'}}>
          <NavLink
            to="/news"
            className={({ isActive }) =>
              `relative pb-1 transition-all duration-300 ${
                isActive
                  ? "text-orange-100 after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-orange-100"
                  : "hover:text-orange-100"
              }`
            }
          >
            News
          </NavLink>

          <NavLink
            to="/faqs"
            className={({ isActive }) =>
              `relative pb-1 transition-all duration-300 ${
                isActive
                  ? "text-orange-100 after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-orange-100"
                  : "hover:text-orange-100"
              }`
            }
          >
            FAQs
          </NavLink>

          <NavLink
            to="/practice-areas"
            className={({ isActive }) =>
              `relative pb-1 transition-all duration-300 ${
                isActive
                  ? "text-orange-100 after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-orange-100"
                  : "hover:text-orange-100"
              }`
            }
          >
            Practice Areas
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `relative pb-1 transition-all duration-300 ${
                isActive
                  ? "text-orange-100 after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-orange-100"
                  : "hover:text-orange-100"
              }`
            }
          >
            About Us
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
