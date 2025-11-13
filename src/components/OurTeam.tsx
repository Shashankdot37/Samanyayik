import { useState } from "react";
import { X } from "lucide-react";
import team1 from "../assets/team1.jpg";
import team2 from "../assets/team2.jpg";
import team3 from "../assets/team3.jpg";
import team4 from "../assets/team4.jpg";
import team5 from "../assets/team5.jpg";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiPhone, FiMail } from "react-icons/fi";

const teamMembers = [
  {
    name: "Amelia Carter",
    position: "Chief Executive Officer",
    image: team1,
    description:
      "Amelia leads our company with over 15 years of experience in logistics management and business operations. She’s passionate about innovation and sustainable transport.",
    joined: "2015",
    achievements: "Transformed company operations and expanded nationwide.",
    contact: "1234567890",
    email: "oliviachen@gmail.com",
    socials: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Benjamin Lee",
    position: "Operations Director",
    image: team2,
    description:
      "Benjamin oversees daily operations ensuring efficiency and timely deliveries. His problem-solving mindset drives team performance.",
    joined: "2017",
    achievements:
      "Implemented route optimization strategies reducing delays by 30%.",
    email: "oliviachen@gmail.com",
    contact: "1234567890",
    socials: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Sophia Turner",
    position: "Head of Customer Relations",
    image: team3,
    description:
      "Sophia focuses on enhancing customer experience and maintaining strong partnerships with clients.",
    joined: "2018",
    achievements: "Built the customer care department from the ground up.",
    contact: "1234567890",
    email: "oliviachen@gmail.com",
    socials: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "James Patel",
    position: "Technology Manager",
    image: team4,
    description:
      "James drives the digital transformation of the company, ensuring modern systems and secure data handling.",
    joined: "2019",
    achievements: "Integrated smart logistics tracking and analytics tools.",
    contact: "1234567890",
    email: "oliviachen@gmail.com",
    socials: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Olivia Chen",
    position: "Finance Controller",
    image: team5,
    description:
      "Olivia manages financial planning, ensuring sustainability and transparency across all departments.",
    joined: "2020",
    contact: "1234567890",
    email: "oliviachen@gmail.com",
    achievements: "Optimized budget allocation saving 15% in annual costs.",
    socials: {
      linkedin: "#",
      twitter: "#",
    },
  },
];

const OurTeam: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<any>(null);

  return (
    <section
      className="bg-[#F6E9D9] w-full flex flex-col items-center justify-center py-24 px-6 relative z-10"
      id="our-team"
    >
      {/* Section Title */}
      <h2
        className="font-[EB_Garamond] text-[#043222] font-bold mb-16 text-center tracking-wide"
        style={{ fontSize: "clamp(2rem, 4vw, 50px)", paddingBottom: "2rem" }}
      >
        Our Team
      </h2>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 justify-items-center max-w-6xl">
        {teamMembers.map((member) => (
          <button
            key={member.name}
            onClick={() => setSelectedMember(member)}
            className="group bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-[#D56B4B]/50"
            style={{
              borderRadius: "35px",
              cursor: "pointer",
              borderWidth: "0.5px",
              borderColor: "#043222",
            }}
          >
            <div
              className="relative w-44 h-44 mb-6"
              style={{ padding: "2rem" }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full rounded-full object-cover shadow-md"
                style={{
                  border: "2px solid #D56B4B",
                }}
              />
            </div>
            <h3
              className="font-[EB_Garamond] font-semibold text-[#043222] text-2xl mb-1 group-hover:text-[#D56B4B] transition-colors"
              style={{
                fontWeight: "bold",
                fontSize: "30px",
                paddingLeft: "2rem",
                paddingRight: "2rem",
              }}
            >
              {member.name}
            </h3>
            <p
              className="text-[#043222]/80 text-sm font-medium tracking-wide"
              style={{
                fontWeight: "semibold",
                fontSize: "15px",
                marginBottom: "2rem",
              }}
            >
              {member.position}
            </p>
          </button>
        ))}
      </div>

      {/* Modal */}
      {selectedMember && (
        <div
          onClick={() => setSelectedMember(null)}
          role="dialog"
          aria-modal="true"
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            backdropFilter: "blur(5px)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 50,
            padding: "1rem",
            animation: "fadeIn 0.3s ease-in-out",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: "#F6E9D9",
              borderRadius: "2rem",
              boxShadow: "0 25px 50px rgba(0,0,0,0.2)",
              maxWidth: "32rem",
              width: "100%",
              padding: "2rem",
              border: "2px solid #D56B4B",
              position: "relative",
            }}
          >
            <button
              onClick={() => setSelectedMember(null)}
              aria-label="Close"
              style={{
                position: "absolute",
                top: "1.25rem",
                right: "1.25rem",
                color: "#043222",
                cursor: "pointer",
                border: "none",
                background: "none",
              }}
            >
              <X size={30} />
            </button>

            <img
              src={selectedMember.image}
              alt={selectedMember.name}
              style={{
                width: "9rem",
                height: "9rem",
                display: "block",
                margin: "0 auto",
                borderRadius: "50%",
                objectFit: "cover",
                marginBottom: "1.5rem",
                boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                border: "5px solid #D56B4B",
              }}
            />

            <h3
              style={{
                fontFamily: "EB Garamond, serif",
                fontWeight: "700",
                color: "#043222",
                fontSize: "1.875rem",
                textAlign: "center",
                marginBottom: "0.25rem",
              }}
            >
              {selectedMember.name}
            </h3>
            <p
              style={{
                color: "rgba(4, 50, 34, 0.8)",
                textAlign: "center",
                marginBottom: "1.5rem",
                fontSize: "1.125rem",
                fontWeight: 500,
              }}
            >
              {selectedMember.position}
            </p>
            <p
              style={{
                color: "rgba(4, 50, 34, 0.9)",
                lineHeight: 1.6,
                marginBottom: "1rem",
              }}
            >
              {selectedMember.description}
            </p>
            <p
              style={{
                color: "rgba(4, 50, 34, 0.8)",
                fontSize: "0.875rem",
                marginBottom: "0.5rem",
              }}
            >
              <strong>Joined:</strong> {selectedMember.joined}
            </p>
            <p
              style={{
                color: "rgba(4, 50, 34, 0.8)",
                fontSize: "0.875rem",
                marginBottom: "1.25rem",
              }}
            >
              <strong>Achievements:</strong> {selectedMember.achievements}
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "1.5rem",
              }}
            >
              <a
                href={selectedMember.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#043222",
                  fontSize: "1.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                className="hover:text-[#D56B4B] transition"
              >
                <FaLinkedin />
              </a>

              <a
                href={selectedMember.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#043222",
                  fontSize: "1.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                className="hover:text-[#D56B4B] transition"
              >
                <FaTwitter />
              </a>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "0.75rem",
                marginTop: "1.5rem",
              }}
            >
              {/* Contact Number */}
              <a
                href={`tel:${selectedMember.contact}`}
                style={{
                  color: "#043222",
                  fontSize: "1rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  textDecoration: "none",
                }}
                className="hover:text-[#D56B4B] transition"
              >
                <FiPhone size={20} />
                {selectedMember.contact}
              </a>

              {/* Email */}
              <a
                href={`mailto:${selectedMember.email}`}
                style={{
                  color: "#043222",
                  fontSize: "1rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  textDecoration: "none",
                }}
                className="hover:text-[#D56B4B] transition"
              >
                <FiMail size={20} />
                {selectedMember.email}
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default OurTeam;
