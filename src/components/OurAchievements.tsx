import React from "react";
import { FaAward, FaTrophy, FaCertificate, FaMedal } from "react-icons/fa";

const achievementsTimeline = [
  {
    date: "2016",
    title: "Best Logistics Company Award",
    description: "Recognized nationally for outstanding logistics and transport services.",
    icon: <FaAward />,
  },
  {
    date: "2018",
    title: "ISO 9001 Certification",
    description: "Achieved international quality management standards certification.",
    icon: <FaCertificate />,
  },
  {
    date: "2019",
    title: "Customer Service Excellence",
    description: "Awarded for 98% customer satisfaction and outstanding support.",
    icon: <FaMedal />,
  },
  {
    date: "2021",
    title: "Innovation in Transport",
    description: "Won the national award for innovative and sustainable transport solutions.",
    icon: <FaTrophy />,
  },
  {
    date: "2023",
    title: "Expansion Milestone",
    description: "Successfully expanded services to 5 new international markets.",
    icon: <FaAward />,
  },
];

const OurAchievements: React.FC = () => {
  return (
    <section
      id="our-achievements"
      style={{
        backgroundColor: "#F6E9D9",
        padding: "4rem 2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Section Title */}
      <h2
        style={{
          fontFamily: "EB Garamond, serif",
          fontSize: "clamp(2rem, 4vw, 50px)",
          fontWeight: 700,
          color: "#043222",
          textAlign: "center",
          marginBottom: "3rem",
        }}
      >
        Our Achievements
      </h2>

      {/* Timeline */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "3rem",
          width: "100%",
          maxWidth: "900px",
        }}
      >
        {achievementsTimeline.map((ach, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              gap: "1.5rem",
              flexWrap: "wrap",
            }}
            tabIndex={0}
            aria-label={`${ach.date} - ${ach.title}: ${ach.description}`}
          >
            {/* Icon */}
            <div
              style={{
                fontSize: "2.5rem",
                color: "#D56B4B",
                minWidth: "50px",
                textAlign: "center",
              }}
            >
              {ach.icon}
            </div>

            {/* Text */}
            <div style={{ flex: 1, minWidth: "220px" }}>
              <p
                style={{
                  fontWeight: 700,
                  fontSize: "1.125rem",
                  color: "#043222",
                  marginBottom: "0.25rem",
                }}
              >
                {ach.date}
              </p>
              <h3
                style={{
                  fontFamily: "EB Garamond, serif",
                  fontWeight: 700,
                  fontSize: "1.5rem",
                  color: "#043222",
                  marginBottom: "0.5rem",
                }}
              >
                {ach.title}
              </h3>
              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.6,
                  color: "#043222CC",
                }}
              >
                {ach.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurAchievements;
