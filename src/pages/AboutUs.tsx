import Header from "../components/Header";
import Footer from "../components/Footer";
import beamBalance from "../assets/beam-balance.png";

const AboutUs: React.FC = () => {
  return (
    <>
      <Header />
      <main className="relative flex flex-col items-center justify-start bg-[#F6E9D9] overflow-visible px-4 sm:px-6 lg:px-8">
        {/* Page Title */}
        <h1
          className="font-[EB_Garamond] text-[#043222] font-bold mb-8 text-center"
          style={{
            fontSize: "clamp(2rem, 4vw, 57px)",
            marginTop: "2rem",
          }}
        >
          About Us
        </h1>

        {/* Background Image */}
        <img
          src={beamBalance}
          alt=""
          aria-hidden="true"
          className="absolute opacity-60 pointer-events-none object-contain"
          style={{
            width: "min(80%, 500px)",
            height: "auto",
            top: "-8%",
            left: "-7%",
            zIndex: 0,
          }}
        />

        {/* Mission Box */}
        <section
          className="flex justify-center items-center w-full"
          style={{
            zIndex: 1,
            marginTop: "3rem",
            marginBottom: "7rem",
            opacity: 0.95,
          }}
        >
          <div
            className="backdrop-blur-md shadow-lg"
            style={{
              width: "clamp(300px, 90%, 900px)",
              background: "rgba(16, 59, 43, 0.85)",
              borderTopRightRadius: "58px",
              borderBottomLeftRadius: "58px",
              padding: "2.5rem 4rem",
              textAlign: "center",
            }}
          >
            <p
              style={{
                color: "#FFEEAD",
                fontFamily: "EB Garamond, serif",
                fontSize: "clamp(1rem, 2vw, 22px)",
                fontWeight: 500,
                lineHeight: 1.6,
                margin: 0,
                maxWidth: "800px",
                display: "inline-flex",
                alignItems: "center",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "baseline",
                  flexWrap: "nowrap",
                }}
              >
                <span
                  style={{
                    fontSize: "3.5rem",
                    fontWeight: "800",
                    lineHeight: "0.9",
                    marginRight: "0.1em",
                  }}
                >
                  O
                </span>
                <span
                  style={{
                    fontSize: "clamp(1rem, 2vw, 22px)",
                    fontWeight: 500,
                  }}
                >
                  ur mission is to deliver innovative, reliable, and
                  customer-focused solutions that create lasting value while
                  upholding integrity, sustainability, and excellence in
                  everything we do.
                </span>
              </span>
            </p>
          </div>
        </section>

        {/* Team Vertical Stack */}
        <div
          className="flex flex-col items-center justify-start gap-7 w-[204px] mx-auto py-10 relative z-10"
          style={{ marginBottom: "5rem" }}
        >
          {/* Top Circle */}
          <img
            src="https://placehold.co/156x154"
            alt="Team member 1"
            className="w-[156px] h-[154px] rounded-full border-[5px] border-[#D56B4B] bg-[#D9D9D9] object-cover"
          />

          {/* Divider Line */}
          <div className="h-[100px] w-[7px] bg-[#043222]"></div>

          {/* Circle 2 */}
          <img
            src="https://placehold.co/152x152"
            alt="Team member 2"
            className="w-[152px] h-[152px] rounded-full border-[5px] border-[#D56B4B] object-cover"
          />

          {/* Divider Line */}
          <div className="h-[100px] w-[7px] bg-[#043222]"></div>

          {/* Circle 3 */}
          <img
            src="https://placehold.co/152x152"
            alt="Team member 3"
            className="w-[152px] h-[152px] rounded-full border-[5px] border-[#D56B4B] object-cover"
          />

          {/* Divider Line */}
          <div className="h-[100px] w-[7px] bg-[#043222]"></div>

          {/* Circle 4 */}
          <img
            src="https://placehold.co/152x152"
            alt="Team member 4"
            className="w-[152px] h-[152px] rounded-full border-[5px] border-[#D56B4B] object-cover"
          />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AboutUs;
