import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import news1 from "../assets/news1.jpg";
import news2 from "../assets/news2.jpg";
import news3 from "../assets/news3.jpg";

// Using object instead of enum
const Category = {
  NEWS: "news",
  BLOG: "blog",
  LEGAL: "legal",
};

const News: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(Category.NEWS);

  const articles = {
    [Category.NEWS]: [
      {
        title: "Government Launches Major Infrastructure Overhaul to Modernize City Roads",
        desc: "The Ministry of Physical Infrastructure has announced a new project to repair and expand major city roads, aiming to reduce congestion and improve public...",
        date: "2nd Aug 2025",
        author: "Saroj K. Thapa",
        tag: "Civil",
        image: news1,
      },
      {
        title: "Supreme Court Issues Landmark Ruling on Digital Privacy Rights",
        desc: "In a historic judgment, the Supreme Court has reaffirmed citizens’ right to digital privacy...",
        date: "2nd Aug 2025",
        author: "Sumit Mainali",
        tag: "Law",
        image: news2,
      },
      {
        title: "New Consumer Protection Bill Passed to Strengthen Legal Remedies",
        desc: "Parliament has approved the revised Consumer Protection Bill, introducing stricter penalties for fraud...",
        date: "20th July 2025",
        author: "Manish Poudel",
        tag: "Law",
        image: news3,
      },
    ],
    [Category.LEGAL]: [
      {
        title: "Legal Review: Data Protection Laws in 2025",
        desc: "Experts analyze the impact of the new digital privacy framework and its enforcement challenges.",
        date: "10th Aug 2025",
        author: "Aashish Bhatt",
        tag: "Legal",
        image: "https://placehold.co/265x333",
      },
    ],
    [Category.BLOG]: [
      {
        title: "Behind the Bench: How Laws Are Drafted",
        desc: "A look into the complex process of drafting and passing bills in the national parliament.",
        date: "15th Aug 2025",
        author: "Rekha Ghimire",
        tag: "Blog",
        image: "https://placehold.co/265x333",
      },
    ],
  };

  const currentArticles = articles[activeCategory];

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#F6E9D9", color: "white", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <Header />

      {/* Main content */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "60px",
          alignItems: "flex-start",
          padding: "60px 20px",
          flexWrap: "wrap",
        }}
      >
        {/* LEFT SECTION - CAROUSEL */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "65%",
            minWidth: "320px",
          }}
        >
          <div
            style={{
              display: "flex",
              overflowX: "auto",
              gap: "30px",
              scrollSnapType: "x mandatory",
              paddingBottom: "20px",
              scrollbarWidth: "none",
            }}
          >
            {currentArticles.map((article, index) => (
              <div
                key={index}
                style={{
                  minWidth: "265px",
                  scrollSnapAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "10px",
                }}
              >
                <div
                  style={{
                    width: "265px",
                    height: "333px",
                    borderRadius: "28px",
                    backgroundImage: `url(${article.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    outline: "1px solid #043222",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "15px",
                    backgroundColor: "rgba(6, 4, 4, 0.88)",
                  }}
                >
                  <div
                    style={{
                      background: "rgba(213,107,74,0.5)",
                      borderRadius: "20px",
                      padding: "3px 10px",
                      color: "white",
                      fontSize: "10px",
                      fontFamily: "Inter",
                      fontWeight: "700",
                      width: "fit-content",
                    }}
                  >
                    {article.tag}
                  </div>

                  <div>
                    <div
                      style={{
                        color: "white",
                        fontSize: "16px",
                        fontFamily: "EB Garamond",
                        fontWeight: "700",
                        marginBottom: "8px",
                      }}
                    >
                      {article.title}
                    </div>
                    <div
                      style={{
                        color: "#E4DFDF",
                        fontSize: "9px",
                        fontFamily: "Inter",
                        fontWeight: "400",
                        textAlign: "center",
                      }}
                    >
                      {article.desc}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: "10px",
                        color: "white",
                        fontSize: "9px",
                        fontFamily: "Inter",
                      }}
                    >
                      <span>{article.date}</span>
                      <span style={{ fontWeight: "700", fontFamily: "EB Garamond" }}>
                        {article.author}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Read More Button */}
                <button
                  style={{
                    background: "rgba(4,50,34,0.85)",
                    color: "#FFEEAD",
                    borderRadius: "28px",
                    border: "none",
                    fontSize: "9px",
                    fontWeight: "700",
                    fontFamily: "Inter",
                    width: "78px",
                    height: "26px",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.background = "rgba(4,50,34,0.95)")}
                  onMouseOut={(e) => (e.currentTarget.style.background = "rgba(4,50,34,0.85)")}
                >
                  Read More
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* DIVIDER LINE */}
        <div
          style={{
            width: "1px",
            height: "500px",
            background: "#043222",
          }}
        />

        {/* RIGHT SECTION - CATEGORY NAV */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "40px",
            alignItems: "center",
            width: "180px",
          }}
        >
          {[
            { label: "News", value: Category.NEWS },
            { label: "Legal Commentary", value: Category.LEGAL },
            { label: "Blog", value: Category.BLOG },
          ].map((item) => (
            <div
              key={item.value}
              onClick={() => setActiveCategory(item.value)}
              style={{
                color: activeCategory === item.value ? "#043222" : "gray",
                fontFamily: "EB Garamond",
                fontSize: "17px",
                fontWeight: "400",
                cursor: "pointer",
                transition: "color 0.3s ease",
                textDecoration: activeCategory === item.value ? "underline" : "none",
              }}
            >
              {item.label}
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default News;
