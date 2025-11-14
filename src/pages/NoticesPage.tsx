import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface Notice {
  id: number;
  title: string;
  description: string; // short summary
  details?: string; // optional long text
  category: "General" | "Career";
  date: string;
  imageUrl?: string;
}

const noticesData: Notice[] = [
  {
    id: 1,
    title: "Office Relocation Notice",
    description: "Our main office will be relocated to 123 Business Ave starting Dec 1st.",
    details:
      "All employees and clients are requested to note the change in office location. Updated contact info and parking instructions will be sent via email. We appreciate your cooperation during this transition period.",
    category: "General",
    date: "2025-11-01",
    imageUrl: "/images/office-relocation.jpg",
  },
  {
    id: 2,
    title: "Winter Internship Openings",
    description: "We are looking for talented interns for our upcoming winter program.",
    details:
      "Interns will be involved in corporate law research, client meetings, and document preparation. This is a great opportunity to gain hands-on experience in a professional law firm environment.",
    category: "Career",
    date: "2025-11-05",
    imageUrl: "/images/internship.jpg",
  },
  {
    id: 3,
    title: "Annual Client Meeting",
    description: "All team members are requested to attend the annual client meeting on Dec 10th.",
    category: "General",
    date: "2025-11-08",
  },
  {
    id: 4,
    title: "Junior Associate Vacancy",
    description: "We are hiring junior associates in the litigation department. Apply by Nov 30th.",
    details:
      "Applicants should have completed their LLB and have 1-2 years of litigation experience. Strong research and drafting skills are required. Submit your resume and cover letter via the Careers page.",
    category: "Career",
    date: "2025-11-10",
    imageUrl: "/images/junior-associate.jpg",
  },
];

const NoticesPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<"All" | "General" | "Career">("All");
  const [expandedNoticeIds, setExpandedNoticeIds] = useState<number[]>([]);

  const toggleReadMore = (id: number) => {
    setExpandedNoticeIds((prev) =>
      prev.includes(id) ? prev.filter((nid) => nid !== id) : [...prev, id]
    );
  };

  const filteredNotices = noticesData.filter(
    (notice) => activeCategory === "All" || notice.category === activeCategory
  );

  const containerStyle: React.CSSProperties = {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#F6E9D9",
  };

  const contentStyle: React.CSSProperties = {
    maxWidth: "960px",
    margin: "0 auto",
    padding: "2.5rem 1rem",
    flex: 1,
  };

  const titleStyle: React.CSSProperties = {
    fontFamily: "EB Garamond, serif",
    fontWeight: 700,
    fontSize: "clamp(1.8rem, 4vw, 57px)",
    color: "#043222",
    marginBottom: "2rem",
    textAlign: "center",
  };

  const categoryContainerStyle: React.CSSProperties = {
    display: "flex",
    gap: "1rem",
    justifyContent: "center",
    marginBottom: "2rem",
    flexWrap: "wrap",
  };

 const noticeGridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr", // only one card per row
  gap: "1.5rem",
};
  const noticeCardStyle = (category: "General" | "Career"): React.CSSProperties => ({
    borderRadius: "20px",
    padding: "20px",
    backgroundColor: category === "Career" ? "#D56B4B" : "#FFEEAD",
    color: category === "Career" ? "#FFEEAD" : "#043222",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease",
    cursor: "default",
    fontFamily: "EB Garamond, serif",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  });

  const noticeTitleStyle: React.CSSProperties = {
    fontSize: "1.5rem",
    fontWeight: 700,
  };

  const noticeDateStyle: React.CSSProperties = {
    fontSize: "0.9rem",
    color: "#043222",
  };

  const noticeDescStyle: React.CSSProperties = {
    fontSize: "1rem",
    fontWeight: 400,
  };

  const categoryButtonStyle = (active: boolean): React.CSSProperties => ({
    padding: "0.5rem 1rem",
    borderRadius: "0.5rem",
    fontWeight: 600,
    cursor: "pointer",
    border: active ? "none" : "2px solid #043222",
    backgroundColor: active ? "#D56B4B" : "#F6E9D9",
    color: active ? "#FFEEAD" : "#043222",
    transition: "all 0.3s ease",
    fontFamily: "EB Garamond, serif",
  });

  const readMoreStyle: React.CSSProperties = {
    fontWeight: 600,
    cursor: "pointer",
    textDecoration: "underline",
    alignSelf: "flex-start",
    marginTop: "4px",
  };

  const noticeImageStyle: React.CSSProperties = {
    width: "100%",
    borderRadius: "12px",
    maxHeight: "200px",
    objectFit: "cover",
  };

  return (
    <div style={containerStyle}>
      <Header />

      <section style={contentStyle} role="main" aria-label="Notices">
        <h1 style={titleStyle} aria-label="Notices" role="banner">Notices</h1>

        {/* Categories */}
        <div style={categoryContainerStyle}>
          {["All", "General", "Career"].map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat as "All" | "General" | "Career")}
                style={categoryButtonStyle(isActive)}
                aria-pressed={isActive}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Notices Grid */}
        <div style={noticeGridStyle}>
          {filteredNotices.length === 0 ? (
            <p style={{ textAlign: "center", gridColumn: "1 / -1", fontFamily: "EB Garamond, serif" }}>
              No notices found.
            </p>
          ) : (
            filteredNotices.map((notice) => {
              const isExpanded = expandedNoticeIds.includes(notice.id);
              return (
                <article
                  key={notice.id}
                  style={noticeCardStyle(notice.category)}
                  aria-labelledby={`notice-title-${notice.id}`}
                >
                  {notice.imageUrl && <img src={notice.imageUrl} alt={notice.title} style={noticeImageStyle} />}
                  <h2 id={`notice-title-${notice.id}`} style={noticeTitleStyle}>
                    {notice.title}
                  </h2>
                  <p style={noticeDateStyle}>{notice.date}</p>
                  <p style={noticeDescStyle}>{notice.description}</p>

                  {/* Details container with smooth expansion */}
                  {notice.details && (
                    <div
                      style={{
                        maxHeight: isExpanded ? "500px" : "0",
                        overflow: "hidden",
                        transition: "max-height 0.5s ease",
                        marginTop: "4px",
                      }}
                      id={`notice-details-${notice.id}`}
                    >
                      <p style={noticeDescStyle}>{notice.details}</p>
                    </div>
                  )}

                  {notice.details && (
                    <span
                      style={readMoreStyle}
                      onClick={() => toggleReadMore(notice.id)}
                      role="button"
                      aria-expanded={isExpanded}
                    >
                      {isExpanded ? "Read Less" : "Read More"}
                    </span>
                  )}
                </article>
              );
            })
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NoticesPage;
