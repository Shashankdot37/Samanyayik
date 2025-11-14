import React from "react";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import logo from "../assets/logo.png";

const Footer: React.FC = () => {
  return (
    <footer
      className="w-full bg-[#043222] text-[#FFEEAD] py-10 px-6 md:px-16 lg:px-24"
      style={{ padding: "1rem" }}
    >
      <div
        className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12 lg:gap-16 font-['EB_Garamond'] text-center lg:text-left"
      >
        {/* Column 1 - Logo and Title */}
        <div className="flex flex-col items-center lg:items-center text-center lg:text-left gap-3">
          <img
            src={logo}
            alt="Samanyayik logo"
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full"
          />
          <h2 className="text-[#F6E9D9] text-4xl sm:text-5xl font-eb-garamond font-bold">
            Samanyayik
          </h2>
        </div>

        {/* Column 2 - Quick Links */}
        <div className="flex flex-col gap-6">
          <h3 className="text-[#F6E9D9] text-2xl font-semibold">Quick Links</h3>
          <ul
            className="text-[#F6E9D9] text-lg sm:text-xl leading-relaxed space-y-4 sm:space-y-6"
            style={{ lineHeight: "2.5rem" }}
          >
            <li>
              <a href="/news" className=" hover:cursor-pointer hover:underline focus:underline focus:outline-none">
                News
              </a>
            </li>
            <li>
              <a href="/faqs" className="hover:underline focus:underline focus:outline-none">
                FAQs
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline focus:underline focus:outline-none">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/research" className="hover:underline focus:underline focus:outline-none">
                Research & Publications
              </a>
            </li>
            <li>
              <a href="/notices" className="hover:underline focus:underline focus:outline-none">
                Notices
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 - Contact Details */}
        <div className="flex flex-col gap-5">
          <h3 className="text-[#F6E9D9] text-2xl sm:text-3xl font-semibold">
            Contact Details
          </h3>

          <div className="flex items-center justify-center lg:justify-start gap-3 flex-wrap">
            <MapPin className="w-6 h-6 text-[#FFEEAD]" />
            <p className="text-lg sm:text-xl text-[#FFEEAD]">Kathmandu, Nepal</p>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-3 flex-wrap">
            <Phone className="w-6 h-6 text-[#FFEEAD]" />
            <p className="text-lg sm:text-xl text-[#FFEEAD]">
              +977-9861292120, +977-9865245410
            </p>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-3 flex-wrap">
            <Mail className="w-6 h-6 text-[#FFEEAD]" />
            <p className="text-lg sm:text-xl text-[#FFEEAD]">
              law.samanyayik@gmail.com
            </p>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-3 flex-wrap">
            <Clock className="w-6 h-6 text-[#FFEEAD]" />
            <p className="text-lg sm:text-xl text-[#FFEEAD]">
              Sun – Fri: 9:00 AM – 5:00 PM
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-[#FFEEAD]/40 pt-6 text-center text-[#F6E9D9] text-sm sm:text-base">
        © {new Date().getFullYear()} Samanyayik. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
