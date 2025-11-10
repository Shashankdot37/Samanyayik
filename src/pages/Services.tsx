import PracticeAreasSection from "../components/PracticeAreasSection";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Services: React.FC = () => {
  return (
    <>
      <Header />
      <section className="min-w-screen min-h-screen">
        <section
          className="flex flex-col items-center mt-12 mb-8 text-center px-4"
          role="banner"
        >
          <h1
            className="font-[EB_Garamond] text-[#043222] font-bold"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 57px)",
              fontWeight: "bold",
            }}
            aria-label="Our Services"
          >
            Our Services
          </h1>
        </section>
      </section>
      <Footer />
    </>
  );
};

export default Services;
