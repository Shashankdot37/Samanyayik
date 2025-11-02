import React from "react";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import logo from "../assets/logo.png";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#043222] text-[#FFEEAD] py-16 px-8 lg:px-24" style={{padding:"1rem 1rem"}}>
      <div className="flex flex-col lg:flex-row justify-between items-start gap-16 font-['EB_Garamond']">
        
        {/* Column 1 - Logo and Title */}
        <div className="flex flex-col items-center text-center gap-3">
          <img
            src={logo}
            alt="Samanyayik logo"
            className="w-44 h-44 rounded-full"
          />
          <h2 className="text-[#F6E9D9] text-5xl font-eb-garamond font-bold">
            Samanyayik
          </h2>
        </div>

        {/* Column 2 - Quick Links */}
        <div className="flex flex-col gap-8 text-center lg:text-left">
          
          <ul className="text-[#F6E9D9] text-xl leading-relaxed space-y-6" style ={{lineHeight: "3rem"}}>
            <li><a href="#" className="hover:underline focus:underline">News</a></li>
            <li><a href="#" className="hover:underline focus:underline">FAQs</a></li>
            <li><a href="#" className="hover:underline focus:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline focus:underline">Research & Publications</a></li>
          </ul>
        </div>

        {/* Column 3 - Contact Details */}
        <div className="flex flex-col gap-5">
          <h3 className="text-[#F6E9D9] text-3xl font-eb-garamond font-semibold">
            Contact Details
          </h3>

          <div className="flex items-center gap-3">
            <MapPin className="w-6 h-6 text-[#FFEEAD]" />
            <p className="text-xl text-[#FFEEAD]">Kathmandu, Nepal</p>
          </div>

          <div className="flex items-center gap-3">
            <Phone className="w-6 h-6 text-[#FFEEAD]" />
            <p className="text-xl text-[#FFEEAD]">
              +977-9861292120, +977-9865245410
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Mail className="w-6 h-6 text-[#FFEEAD]" />
            <p className="text-xl text-[#FFEEAD]">law.samanyayik@gmail.com</p>
          </div>

          <div className="flex items-center gap-3">
            <Clock className="w-6 h-6 text-[#FFEEAD]" />
            <p className="text-xl text-[#FFEEAD]">Sun – Fri: 9:00 AM – 5:00 PM</p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-[#FFEEAD]/40 pt-6 text-center text-[#F6E9D9] text-sm">
        © {new Date().getFullYear()} Samanyayik. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
