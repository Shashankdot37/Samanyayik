import Header from "../components/Header";
import Footer from "../components/Footer";
import beamBalance from "../assets/beam-balance.png";

const AboutUs: React.FC = () => {
  return (
    <>
      <Header />
      <main
        className="relative min-h-screen flex flex-col items-center justify-start bg-[#F6E9D9] overflow-hidden px-4 sm:px-6 lg:px-8"
        style={{
          paddingTop: "4rem",
        }}
      >
        {/* Page Title */}
        <h1
          className="font-[EB_Garamond] text-[#043222] font-bold mb-8 text-center"
          style={{
            fontSize: "clamp(2rem, 4vw, 57px)",
            fontWeight: "bold",
          }}
        >
          About Us
        </h1>

        {/* Background Image (Decorative) */}
        <img
          src={beamBalance}
          alt=""
          aria-hidden="true"
          className="absolute opacity-60 pointer-events-none object-contain"
          style={{
            width: "min(80%, 500px)",
            height: "auto",
            top: "5%",
            left: "2%",
            zIndex: 0,
          }}
        />

        {/* Mission Box Wrapper */}
        <section
          className="flex justify-center items-center w-full"
          style={{
            zIndex: 1,
            marginTop: "1rem",
            marginBottom: "3rem",
          }}
        >
          {/* Mission Box */}
          <div
            className="backdrop-blur-md shadow-lg"
            style={{
              width: "clamp(300px, 90%, 900px)",
              background: "rgba(16, 59, 43, 0.85)",
              borderTopRightRadius: "58px",
              borderBottomLeftRadius: "58px",
              padding: "2.5rem 2rem",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              transition: "transform 0.3s ease",
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
      </main>
      <Footer />
    </>
  );
};

export default AboutUs;
