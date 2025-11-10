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
      className="relative flex flex-col items-center bg-[#F6E9D9] rounded-t-[58px] py-24 px-6 md:px-12 min-h-screen"
      style={{ marginTop: "-3rem" }}
    >
      {/* Title */}
      <h1
        className="text-[#103B2B] font-['EB_Garamond'] text-center"
        style={{
          fontSize: "clamp(2.8rem, 6vw, 6.5rem)",
          marginBottom: "clamp(3rem, 8vh, 6rem)",
          marginTop: "2rem",
        }}
      >
        Our Practice Areas
      </h1>

      {/* Grid Section */}
      <div className="w-full max-w-[1200px] flex justify-center items-center flex-1">
        <div
          className="
        hidden
        md:grid 
        grid-cols-2 
        lg:grid-cols-4 
        gap-x-10 gap-y-14
        justify-items-center
        relative
        text-center
      "
        >
          {practiceAreas.map((area, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-start items-center text-center px-8 py-10 relative transition-transform hover:scale-[1.03]"
            >
              {/* Divider Lines for desktop */}
              {idx < 4 && (
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#103B2B]/30"></div>
              )}
              {idx % 4 !== 3 && (
                <div className="absolute right-0 top-0 w-[1px] h-full bg-[#103B2B]/30"></div>
              )}

              <h3
                className="text-[#103B2B] hover:text-[#043222] font-['EB_Garamond'] mb-4 leading-tight transition-colors"
                style={{
                  fontSize: "clamp(1.5rem, 2.8vw, 1.8rem)",
                  fontWeight: 700,
                  marginBottom: "1.2rem",
                }}
              >
                {area.title}
              </h3>
              <p
                className="text-black text-[1.15rem] font-['EB_Garamond'] leading-snug max-w-[260px]"
                style={{ marginBottom: "1rem" }}
              >
                {area.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile Version (cards) */}
        <div
          className="flex flex-col md:hidden gap-6 items-center justify-center w-full"
          style={{
            marginBottom: "3rem",
            marginTop: "clamp(2rem, 6vh, 5rem)",
          }}
        >
          {practiceAreas.map((area, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md flex flex-col text-center justify-center items-center w-[80%] transition-transform hover:scale-[1.03]"
              style={{ padding: "1.5rem 1rem" }}
            >
              <h3
                className="text-[#103B2B] font-['EB_Garamond'] mb-4"
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  paddingBottom: "0.5rem",
                }}
              >
                {area.title}
              </h3>
              <p className="text-black text-[1.05rem] font-['EB_Garamond'] leading-snug">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreasSection;
