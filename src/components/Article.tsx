import React from "react";
import articleBg from "../assets/news3.jpg";
import "../index.css";
const Article: React.FC = () => {
  return (
    <section
      className="relative w-full flex flex-col items-center justify-start text-center px-6 sm:px-10 md:px-16 pt-16 space-y-12 min-h-screen"
      style={{
        background: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${articleBg}) center/cover no-repeat`,
        borderTopLeftRadius: "58px",
        borderTopRightRadius: "58px",
        paddingBottom: "8rem",
      }}
    >
      {/* === QUOTE BOX === */}
      <div
      className="sm:mx-5"
        style={{
          background: "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.95))",
          minHeight: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "left",
          padding: "2rem",
          borderTopRightRadius: "30px",
          borderBottomLeftRadius: "30px",
          position: "relative",
          overflow: "hidden",
          marginTop: "4rem",
          maxWidth: "900px",
          width: "100%",
          marginBottom: "4rem",
        }}
      >
        <p
          className="text-lg sm:text-xl md:text-2xl leading-relaxed"
          style={{
            color: "white",
            fontFamily: "'EB Garamond', serif",
            fontWeight: 500,
            fontSize: "clamp(1.2rem, 3vw, 1.8rem)",
            margin: 0,
          }}
        >
          "Injustice <span style={{ color: "#FFEEAD" }}>anywhere</span> is a
          threat to justice <span style={{ color: "#FFEEAD" }}>everywhere</span>
          ."
        </p>
        <p
          style={{
            color: "white",
            fontFamily: "'EB Garamond', serif",
            fontWeight: 500,
            fontSize: "clamp(0.7rem, 1vw, 1rem)",
            margin: 0,
            position: "absolute",
            right: "1.5rem",
            bottom: "1rem",
          }}
        >
          - Martin Luther King Jr
        </p>
      </div>

      {/* === MAIN ARTICLE CONTENT === */}
      <div className="relative z-10 w-[70%] max-w-6xl flex flex-col lg:flex-row items-stretch justify-between gap-6 mt-[8vh] text-white">
        {/* LEFT: main text + paragraphs */}
        <div className="flex-1">
          {/* Text block */}
          <div className="flex flex-col justify-start items-start text-left space-y-4 px-4 sm:px-8">
            <div
              className="text-white/80 font-bold font-['EB_Garamond'] mt-6"
              style={{
                fontWeight: "bold",
                fontSize: "18px",
                marginTop: "20px",
              }}
            >
              We are your legal ally.
            </div>
            <div
              className="text-white text-5xl sm:text-md md:text-7xl font-bold font-['EB_Garamond'] leading-tight"
              style={{
                fontWeight: "bold",
                paddingBottom: "1rem",
                paddingTop: "1rem",
              }}
            >
              We are Here for You
            </div>
            <div
              className="text-orange-200 text-xl sm:text-2xl font-bold font-['EB_Garamond'] tracking-[3.50px]"
              style={{ marginBottom: "10px" }}
            >
              Professional and Experienced Advocates Specializing in All Areas
              of Law
            </div>
          </div>

          {/* Paragraph and side text */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 text-left px-4 sm:px-8 text-white mt-6">
            {/* Left paragraph */}
            <div className="text-md font-light font-['EB_Garamond'] leading-relaxed lg:w-[58%]">
              At Samanyayik, we bring unmatched expertise in civil, criminal,
              corporate, cyber, environmental, human rights, and disability
              rights law. Our proven track record of securing victories in
              landmark cases—ranging from disability rights advocacy to civil,
              criminal, environmental, and corporate litigation—demonstrates our
              relentless pursuit of justice. With a strong focus on our clients,
              we provide practical legal solutions that truly work for you.
              Whether you need justice, protection, or legal advice, we are here
              to stand by your side and fight for the best outcome. We offer
              more than just legal services—we operate a dedicated research
              center, conducting in-depth studies on law, policy, society, and
              community issues. In addition, we provide expert consultation and
              high-quality translation services for all kinds of documents,
              including legal, ensuring accuracy, professionalism, and
              reliability in every aspect of our work.
            </div>

            {/* Divider line */}
            <div className="hidden lg:block w-[2px] h-80 bg-white opacity-80 rounded-full" />

            {/* Right-side short text - increased width a bit, reduced height */}
            <div className="lg:w-1/6 text-md font-extrabold font-['EB_Garamond'] text-center flex items-center justify-center lg:text-left leading-snug lg:h-[92px]">
              Trusted experts delivering justice, proven results, and practical
              solutions across all areas of law.
            </div>
          </div>
        </div>

        {/* RIGHT: About Us button - bottom-right on lg, below on small screens */}
        <div className="w-full lg:w-[176px] flex flex-col justify-end items-center lg:items-end">
          <div className="mt-6 lg:mt-0">
            <button
              className="w-[168px] h-[56px] flex items-center justify-between px-4 shadow-sm"
              style={{
                backgroundColor: "#FFEEAD",
                cursor: "pointer",
                borderRadius: "15px",
                paddingLeft: "16px",
                paddingRight: "16px",
                opacity: 0.95,
              }}
            >
              <span className="text-black text-[20px] font-normal font-['EB_Garamond']">
                About Us
              </span>
              <div className="w-[38px] h-[38px] rounded-full border border-black flex items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
                    fill="#1D1B20"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Article;
