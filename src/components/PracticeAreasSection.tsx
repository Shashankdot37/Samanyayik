import whyUsBg from "../assets/practice-area-bg.png";

const PracticeAreasSection = () => {
  const practiceAreas = [
    {
      title: "Legal Assistance & Representation",
      description:
        "We offer expert legal guidance and representation in civil, criminal, and constitutional matters.",
    },
    {
      title: "Corporate Advisory",
      description:
        "Providing strategic legal solutions for businesses to ensure compliance and sustainable growth.",
    },
    {
      title: "Cyber & Technology Law",
      description:
        "Protecting your digital rights and data privacy with modern legal insights and expertise.",
    },
    {
      title: "Environmental Law",
      description:
        "Advocating for environmental protection and sustainability through legal frameworks.",
    },
    {
      title: "Human Rights Law",
      description:
        "Fighting for equality, justice, and human dignity through effective advocacy.",
    },
    {
      title: "Disability Rights Law",
      description:
        "Championing accessibility and inclusion through strong legal representation and reform.",
    },
    {
      title: "Research & Translation",
      description:
        "Offering precise legal research and professional translation for academic and legal documents.",
    },
    {
      title: "Constitutional & Policy Work",
      description:
        "Contributing to policy reform and constitutional awareness for social justice.",
    },
  ];

  return (
    <section
      className="min-h-screen relative flex flex-col items-center justify-start"
      style={{ marginTop: "-3.2rem" }}
    >
      {/* Background */}
      <div
        className="absolute inset-0 rounded-t-[58px] bg-[#F6E9D9] z-10"
        style={{ marginTop: "-3rem" }}
      />

      {/* Section content */}
      <div className="relative z-20 px-6 py-16 w-full flex flex-col items-center">
        <h1
          className="text-[#103B2B] font-['EB_Garamond'] text-center"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 5.9rem)",
            marginBottom: "2rem",
          }}
        >
          Our Practice Areas
        </h1>

        {/* Grid Layout with balanced dividers */}
        <div className="w-[75%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {practiceAreas.map((area, idx) => (
            <div
              key={idx}
              className={`flex flex-col justify-start items-start text-left bg-transparent relative
              border-[#103B2B]/30`}
              style={{
                borderRight:
                  idx % 4 !== 3 ? "1px solid rgba(16,59,43,0.4)" : "none",
                borderBottom:
                  idx < 4 ? "1px solid rgba(16,59,43,0.4)" : "none",
                padding: "1.75rem 2rem", // adds breathing room
                margin: "0.5rem", // spacing between items visually
              }}
            >
              <h3 className="text-[#103B2B] text-[1.6rem] font-semibold font-['EB_Garamond'] mb-3">
                {area.title}
              </h3>
              <p className="text-black text-[1.1rem] font-normal font-['EB_Garamond'] leading-snug">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative background shapes */}
      <div
        className="absolute rounded-full bg-[#16346B] opacity-20 z-15"
        style={{
          width: "40vw",
          height: "40vw",
          bottom: "-20%",
          right: "-20%",
          pointerEvents: "none",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute rounded-full opacity-40 z-18"
        style={{
          width: "25vw",
          height: "25vw",
          bottom: "-10%",
          right: "-10%",
          backgroundImage: `url(${whyUsBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          pointerEvents: "none",
        }}
        aria-hidden="true"
      />
    </section>
  );
};

export default PracticeAreasSection;
