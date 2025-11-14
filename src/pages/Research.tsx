import { useState, useEffect } from "react";
import { FaFilePdf, FaFileWord, FaLink } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface Publication {
  title: string;
  description: string;
  type: "pdf" | "word" | "link";
  url: string;
  author: string;
  date: string; // e.g. "Feb 12, 2024"
}

const publications: Publication[] = [
  {
    title: "Annual Financial Performance Report",
    description:
      "A comprehensive analysis of the firm's financial performance, strategic decisions, and growth outlook.",
    type: "pdf",
    url: "#",
    author: "Samanyayik Research Team",
    date: "Jan 20, 2024",
  },
  {
    title: "Impact Assessment Study",
    description:
      "Study focusing on socio-economic impact of local community development projects.",
    type: "word",
    url: "#",
    author: "Research Dept.",
    date: "Dec 11, 2023",
  },
  {
    title: "Government Policy Circular",
    description:
      "Official circular outlining recent regulatory changes affecting firms and applicants.",
    type: "link",
    url: "#",
    author: "Ministry of Labour",
    date: "Nov 02, 2023",
  },
];

const ResearchPublications = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const updateSize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const getIcon = (type: string) => {
    switch (type) {
      case "pdf":
        return <FaFilePdf size={isMobile ? 40 : 55} color="#b30000" />;
      case "word":
        return <FaFileWord size={isMobile ? 40 : 55} color="#1a4ba3" />;
      default:
        return <FaLink size={isMobile ? 40 : 55} color="#444" />;
    }
  };

  return (
    <>
      <Header />
      <section 
        style={{
          backgroundColor:"#F6E9D9",
          width: "100%",
          minHeight: "100vh",
          padding: isMobile ? "30px 12px" : "60px 40px",
          boxSizing: "border-box",
          fontFamily: "EB Garamond, serif",
        }}
      >
        {/* Page Heading */}
        <h1
          style={{
            textAlign: "center",
            fontSize: isMobile ? "2.4rem" : "3.8rem",
            marginBottom: isMobile ? "2.5rem" : "4rem",
            color: "#043222",
            fontWeight: 600,
            marginTop: "2rem",
          }}
        >
          Research & Publications
        </h1>

        {/* Cards Container */}
        <div
          style={{
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: isMobile ? "20px" : "26px",
          }}
        >
          {publications.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "14px",
                padding: isMobile ? "18px" : "26px",
                boxSizing: "border-box",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                justifyContent: "space-between",
                alignItems: isMobile ? "flex-start" : "center",
                gap: isMobile ? "15px" : "20px",
              }}
            >
              {/* Text Section */}
              <div style={{ flex: 1 }}>
                <h2
                  style={{
                    fontSize: isMobile ? "1.25rem" : "1.6rem",
                    marginBottom: "6px",
                    color: "#043222",
                  }}
                >
                  {item.title}
                </h2>

                <p
                  style={{
                    fontSize: isMobile ? "1rem" : "1.15rem",
                    marginBottom: "12px",
                    color: "#333",
                    lineHeight: 1.5,
                  }}
                >
                  {item.description}
                </p>

                {/* Author + Date */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: isMobile ? "column" : "row",
                    gap: isMobile ? "3px" : "12px",
                    fontSize: isMobile ? "0.95rem" : "1rem",
                    color: "#555",
                  }}
                >
                  <span>
                    <strong>Author:</strong> {item.author}
                  </span>
                  <span>
                    <strong>Date:</strong> {item.date}
                  </span>
                </div>
              </div>

              {/* Icon Section (Moves below on mobile) */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "8px",
                  alignSelf: isMobile ? "center" : "flex-end",
                }}
              >
                {getIcon(item.type)}
                <a
                  href={item.url}
                  style={{
                    fontSize: "1rem",
                    cursor: "pointer",
                    color: "#043222",
                    fontWeight: "600",
                    borderWidth: "1px",
                    borderRadius: "20%",
                    width: "auto",
                    height: "auto",
                    padding: "0.3rem",
                    backgroundColor: "rgba(148, 147, 142, 0.36)",
                  }}
                >
                  Open
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ResearchPublications;
