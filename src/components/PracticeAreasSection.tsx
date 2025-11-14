import Services from "./Services";

const PracticeAreasSection = () => {
  return (
    <section
      className="relative flex flex-col items-center bg-[#F6E9D9] rounded-t-[58px] py-24 px-6 md:px-12 min-h-screen"
      style={{ marginTop: "-3rem" }}
    >
      {/* Title */}
      <h1
        className="text-[#103B2B] font-['EB_Garamond'] text-center"
        style={{
          fontSize: "clamp(2.8rem, 6vw, 6.5rem)",
          marginBottom: "clamp(2rem, 8vh, 6rem)",
          marginTop: "2rem",
        }}
      >
        Our Practice Areas
      </h1>
      <Services />
    </section>
  );
};

export default PracticeAreasSection;
