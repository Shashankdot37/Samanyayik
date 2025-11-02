import React from "react";
import HeroSection from "../components/HeroSection";
import WhyUs from "../components/WhyUs";
import Article from "../components/Article";
import "../index.css";
import PracticeAreasSection from "../components/PracticeAreasSection";
import Testimonial from "../components/Testimonial";
import GetinTouch from "../components/GetInTouch";
import Footer from "../components/Footer";

const LandingPage: React.FC = () => {
  return (
    <div style={{overflow:"hidden"}}>
      <HeroSection />
      <WhyUs/>
     <Article/>
      <PracticeAreasSection/>
      <Testimonial/>
      <GetinTouch/>
      <Footer/>
    </div>
  );
};

export default LandingPage;
