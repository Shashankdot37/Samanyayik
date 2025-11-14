import React, { useState, useRef, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import news1 from "../assets/news1.jpg";
import news2 from "../assets/news2.jpg";
import news3 from "../assets/news3.jpg";

const Category = {
  NEWS: "news",
  BLOG: "blog",
  LEGAL: "legal",
};

const News: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(Category.NEWS);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [isMobile, setIsMobile] = useState(false);
  const [showCategoriesMobile, setShowCategoriesMobile] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateItems = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setItemsPerView(mobile ? 1 : 3);
    };
    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  const articles = {
    [Category.NEWS]: [
      {
        title: "Government Launches Major Infrastructure Overhaul",
        desc: "The Ministry has announced a new project to repair and expand major city roads...",
        date: "2nd Aug 2025",
        author: "Saroj K. Thapa",
        tag: "Civil",
        image: news1,
      },
      {
        title: "Supreme Court Issues Landmark Privacy Ruling",
        desc: "In a historic judgment, citizens’ right to digital privacy is reaffirmed...",
        date: "2nd Aug 2025",
        author: "Sumit Mainali",
        tag: "Law",
        image: news2,
      },
      {
        title: "New Consumer Protection Bill Passed",
        desc: "The revised Bill introduces stricter penalties for fraud...",
        date: "20th July 2025",
        author: "Manish Poudel",
        tag: "Law",
        image: news3,
      },
    ],
    [Category.LEGAL]: [
      {
        title: "Legal Review: Data Protection Laws in 2025",
        desc: "Experts analyze the impact of the new privacy framework...",
        date: "10th Aug 2025",
        author: "Aashish Bhatt",
        tag: "Legal",
        image: news1,
      },
      {
        title: "Contract Law Reforms 2025",
        desc: "Upcoming changes explained for businesses...",
        date: "5th July 2025",
        author: "Kiran Shrestha",
        tag: "Legal",
        image: news2,
      },
    ],
    [Category.BLOG]: [
      {
        title: "Behind the Bench: How Laws Are Drafted",
        desc: "A look into drafting and passing bills...",
        date: "15th Aug 2025",
        author: "Rekha Ghimire",
        tag: "Blog",
        image: news3,
      },
    ],
  };

  const currentArticles = articles[activeCategory];

  const scrollCarousel = (direction: "left" | "right") => {
    if (!carouselRef.current) return;

    const scrollAmount = carouselRef.current.offsetWidth / itemsPerView;

    carouselRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#F6E9D9",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />

      {/* Page Title */}
      <section
        style={{
          textAlign: "center",
          padding: "30px 20px",
          marginTop: "2rem",
        }}
      >
        <h1
          style={{
            fontFamily: "EB Garamond",
            fontSize: "clamp(1.8rem, 4vw, 57px)",
            fontWeight: "bold",
            color: "#043222",
          }}
        >
          News & Articles
        </h1>
      </section>

      {/* MOBILE CATEGORY BUTTON */}
      {isMobile && (
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <button
            onClick={() => setShowCategoriesMobile(!showCategoriesMobile)}
            style={{
              backgroundColor: "#043222",
              color: "white",
              padding: "10px 20px",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
              fontFamily: "EB Garamond",
              fontSize: "18px",
            }}
          >
            Categories ▾
          </button>

          {showCategoriesMobile && (
            <div
              style={{
                marginTop: "10px",
                backgroundColor: "#645b50ff",
                padding: "15px",
                borderRadius: "10px",
                width: "60%",
                color: "white",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              {[
                { label: "News", value: Category.NEWS },
                { label: "Legal Commentary", value: Category.LEGAL },
                { label: "Blog", value: Category.BLOG },
              ].map((item) => (
                <button
                  key={item.value}
                  onClick={() => {
                    setActiveCategory(item.value);
                    setShowCategoriesMobile(false);
                  }}
                  style={{
                    display: "block",
                    width: "100%",
                    padding: "10px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color:
                      activeCategory === item.value ? "#a1d3c1ff" : "#ffffffff",
                    fontFamily: "EB Garamond",
                    fontSize: "18px",
                    marginBottom: "10px",
                    textDecoration:
                      activeCategory === item.value ? "underline" : "none",
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* MAIN LAYOUT */}
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          padding: isMobile ? "10px" : "30px",
          gap: "40px",
          flexDirection: isMobile ? "column" : "row",
        }}
      >
        {/* Carousel */}
        <section style={{ width: isMobile ? "100%" : "65%" }}>
          {/* Buttons */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "2rem",
            }}
          >
            <button
              onClick={() => scrollCarousel("left")}
              style={{
                width: "45px",
                height: "45px",
                borderRadius: "50%",
                background: "white",
                border: "1px solid #043222",
                fontSize: "20px",
                cursor: "pointer",
                color: "#043222",
              }}
            >
              ←
            </button>
            <button
              onClick={() => scrollCarousel("right")}
              style={{
                width: "45px",
                height: "45px",
                borderRadius: "50%",
                background: "white",
                border: "1px solid #043222",
                fontSize: "20px",
                cursor: "pointer",
                color: "#043222",
              }}
            >
              →
            </button>
          </div>

          {/* Cards */}
          <div
            ref={carouselRef}
            style={{
              display: "flex",
              overflowX: "auto",
              gap: "20px",
              paddingBottom: "20px",
              scrollSnapType: "x mandatory",
            }}
          >
            {currentArticles.map((article, index) => (
              <article
                key={index}
                style={{
                  minWidth: isMobile ? "85%" : `calc(100% / ${itemsPerView})`,
                  scrollSnapAlign: "center",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: isMobile ? "220px" : "300px",
                    borderRadius: "22px",
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${article.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    padding: "15px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      background: "rgba(213,107,74,0.6)",
                      padding: "5px 12px",
                      borderRadius: "15px",
                      fontSize: "11px",
                      fontWeight: "700",
                      color: "white",
                      width: "fit-content",
                    }}
                  >
                    {article.tag}
                  </div>

                  <div>
                    <h2
                      style={{
                        fontFamily: "EB Garamond",
                        color: "white",
                        fontSize: "16px",
                        marginBottom: "5px",
                      }}
                    >
                      {article.title}
                    </h2>
                    <p
                      style={{
                        fontSize: "10px",
                        color: "#E4DFDF",
                      }}
                    >
                      {article.desc}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: "8px",
                        fontSize: "10px",
                        color: "white",
                      }}
                    >
                      <span>{article.date}</span>
                      <span style={{ fontFamily: "EB Garamond" }}>
                        {article.author}
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  style={{
                    width: isMobile ? "90px" : "78px",
                    height: "28px",
                    marginTop: "8px",
                    background: "#043222",
                    border: "none",
                    color: "#FFEEAD",
                    borderRadius: "25px",
                    cursor: "pointer",
                    fontSize: "10px",
                    fontWeight: "700",
                    fontFamily: "Inter",
                  }}
                >
                  Read More
                </button>
              </article>
            ))}
          </div>
        </section>

        {/* Divider Line for DESKTOP */}
        {!isMobile && (
          <div
            style={{
              width: "1px",
              backgroundColor: "#9C8F85",
              marginTop: "40px",
              marginBottom: "40px",
              opacity: 0.6,
            }}
          />
        )}

        {/* Categories (Desktop) */}
        {!isMobile && (
          <nav
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "30px",
              marginTop: "40px",
              width: "180px",
            }}
          >
            {[
              { label: "News", value: Category.NEWS },
              { label: "Legal Commentary", value: Category.LEGAL },
              { label: "Blog", value: Category.BLOG },
            ].map((item) => (
              <button
                key={item.value}
                onClick={() => setActiveCategory(item.value)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: activeCategory === item.value ? "#043222" : "#777777",
                  textDecoration:
                    activeCategory === item.value ? "underline" : "none",
                  fontFamily: "EB Garamond",
                  fontSize: "20px",
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default News;
