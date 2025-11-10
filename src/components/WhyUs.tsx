import React from "react";
import beamBalance from "../assets/beam-balance.png";
import "../index.css";

const WhyUs: React.FC = () => {
  const cards = [
    {
      title: "Comprehensive Legal Solutions",
      desc: "Expert services through our dedicated law firm.",
    },
    {
      title: "Research & Policy Analysis",
      desc: "Expert services through our dedicated law firm.",
    },
    {
      title: "Professional Translation Services",
      desc: "Expert services through our dedicated law firm.",
    },
    {
      title: "Interpretation Services",
      desc: "Expert services through our dedicated law firm.",
    },
  ];

  return (
    <section
      aria-labelledby="whyus-heading"
      className="relative w-full overflow-hidden min-h-screen"
      style={{
        backgroundColor: "#F6E9D9",
        borderTopLeftRadius: "58px",
        borderTopRightRadius: "58px",
        marginTop: "-58px",
        paddingBottom: "6rem",
      }}
    >
      {/* Decorative beam balance */}
      <img
        src={beamBalance}
        alt=""
        role="presentation"
        aria-hidden="true"
        className="absolute opacity-60 pointer-events-none"
        style={{
          width: "528px",
          height: "550px",
          top: "-10%",
          left: "-10%",
          objectFit: "contain",
        }}
      />

      <div className="relative mx-auto px-6 sm:px-10 md:px-16 py-20 sm:py-24 text-center">
        {/* Heading */}
        <h1
          id="whyus-heading"
          className="text-[#103B2B] mb-12 font-semibold leading-tight"
          style={{
            fontFamily: "'EB Garamond', serif",
            fontSize: "clamp(2.5rem, 6vw, 5.9rem)",
            color: "black",
            marginBottom: "3rem",
            marginTop: "2rem",
          }}
        >
          Why Us?
        </h1>

        {/* Cards Grid */}
        <div className="why-us-grid sm:why-us-grid mx-auto justify-items-center mt-9 p-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`why-${index + 1} sm:why-${
                index + 1
              } focus:outline-none p-8 focus-visible:ring-4 focus-visible:ring-[#FFEEAD] rounded-[30px] flex flex-col justify-center items-center text-center transition-transform transform hover:scale-[1.02] hover:cursor-pointer`}
              style={{
                backgroundColor: "rgba(16, 59, 43, 0.85)",
                width: "100%",
                maxWidth: "400px",
                minHeight: "245px",
              }}
              tabIndex={0}
              role="listitem"
            >
              <h3
                className="mb-3 font-semibold leading-snug"
                style={{
                  fontFamily: "'EB Garamond', serif",
                  fontSize: "clamp(1.25rem, 2vw, 1.875rem)",
                  color: "#FFEEAD",
                }}
              >
                {card.title}
              </h3>
              <p
                className="leading-relaxed"
                style={{
                  fontFamily: "'EB Garamond', serif",
                  fontSize: "clamp(1rem, 1vw, 0.9rem)",
                  color: "white",
                  fontStyle: "italic",
                }}
              >
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
