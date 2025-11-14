import Header from "../components/Header";
import Footer from "../components/Footer";
import Services from "../components/Services";

const OurServices: React.FC = () => {
  return (
    <>
      <Header />
      <section className="min-w-screen min-h-screen flex flex-col justify-start items-center gap-[8vh]" style={{marginTop:"2rem"}}>
        <section
          className="flex flex-col items-center mb-8 text-center px-4"
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
        <section>
          <Services />
        </section>
      </section>
      <Footer />
    </>
  );
};

export default OurServices;
