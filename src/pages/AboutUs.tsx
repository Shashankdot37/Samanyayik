import Header from "../components/Header";
import Footer from "../components/Footer";
import beamBalance from "../assets/beam-balance.png";
import OurTeam from "../components/OurTeam";
import AboutUsTimeline from "../components/AboutUsTimeline";
import AboutUsMission from "../components/AboutUsMission";
import OurAchievements from "../components/OurAchievements";

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

        <AboutUsMission />
        <AboutUsTimeline />

        <div style={{ marginBottom: "2rem" }}>
          <OurTeam />
        </div>
        <OurAchievements />
      </main>
      <Footer />
    </>
  );
};

export default AboutUs;
