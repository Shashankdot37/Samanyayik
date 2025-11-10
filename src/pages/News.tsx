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
  const carouselRef = useRef<HTMLDivElement>(null);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateItemsPerView = () => {
      const mobile = window.innerWidth < 768;
      setItemsPerView(mobile ? 1 : 3);
      setIsMobile(mobile);
    };
    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const articles = {
    [Category.NEWS]: [
      {
        title:
          "Government Launches Major Infrastructure Overhaul to Modernize City Roads",
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
        title:
          "New Consumer Protection Bill Passed to Strengthen Legal Remedies",
        desc: "Parliament has approved the revised Consumer Protection Bill, introducing stricter penalties for fraud...",
        date: "20th July 2025",
        author: "Manish Poudel",
        tag: "Law",
        image: news3,
      },
      {
        title:
          "New Consumer Protection Bill Passed to Strengthen Legal Remedies",
        desc: "Parliament has approved the revised Consumer Protection Bill, introducing stricter penalties for fraud...",
        date: "20th July 2025",
        author: "Manish Poudel",
        tag: "Law",
        image: news3,
      },
      {
        title:
          "New Consumer Protection Bill Passed to Strengthen Legal Remedies",
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
        image: news1,
      },
      {
        title: "Contract Law Reforms 2025",
        desc: "Upcoming changes in contract law explained for businesses and individuals.",
        date: "5th July 2025",
        author: "Kiran Shrestha",
        tag: "Legal",
        image: news2,
      },
      {
        title: "Contract Law Reforms 2025",
        desc: "Upcoming changes in contract law explained for businesses and individuals.",
        date: "5th July 2025",
        author: "Kiran Shrestha",
        tag: "Legal",
        image: news2,
      },
      {
        title: "Contract Law Reforms 2025",
        desc: "Upcoming changes in contract law explained for businesses and individuals.",
        date: "5th July 2025",
        author: "Kiran Shrestha",
        tag: "Legal",
        image: news2,
      },
    ],
    [Category.BLOG]: [
      {
        title: "Behind the Bench: How Laws Are Drafted",
        desc: "A look into the complex process of drafting and passing bills in the national parliament.",
        date: "15th Aug 2025",
        author: "Rekha Ghimire",
        tag: "Blog",
        image: news3,
      },
      {
        title: "Behind the Bench: How Laws Are Drafted",
        desc: "A look into the complex process of drafting and passing bills in the national parliament.",
        date: "15th Aug 2025",
        author: "Rekha Ghimire",
        tag: "Blog",
        image: news3,
      },
      {
        title: "Behind the Bench: How Laws Are Drafted",
        desc: "A look into the complex process of drafting and passing bills in the national parliament.",
        date: "15th Aug 2025",
        author: "Rekha Ghimire",
        tag: "Blog",
        image: news3,
      },
      {
        title: "Behind the Bench: How Laws Are Drafted",
        desc: "A look into the complex process of drafting and passing bills in the national parliament.",
        date: "15th Aug 2025",
        author: "Rekha Ghimire",
        tag: "Blog",
        image: news3,
      },
      {
        title: "Behind the Bench: How Laws Are Drafted",
        desc: "A look into the complex process of drafting and passing bills in the national parliament.",
        date: "15th Aug 2025",
        author: "Rekha Ghimire",
        tag: "Blog",
        image: news3,
      },
    ],
  };

  const currentArticles = articles[activeCategory];

  const scrollCarousel = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth / itemsPerView;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#F6E9D9",
        color: "white",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />

      <section
        className="flex flex-col items-center mt-12 mb-8 text-center px-4"
        role="banner"
      >
        <h1
          className="font-[EB_Garamond] text-[#043222] font-bold"
          style={{
            fontSize: "clamp(1.8rem, 4vw, 57px)",
            fontWeight: "bold",
          }}
          aria-label="News & Articles"
        >
          News & Articles
        </h1>
      </section>

      <main
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          padding: isMobile ? "30px 10px" : "60px 20px",
          flexWrap: "wrap",
        }}
      >
        {/* Left Section - Carousel */}
        <section
          style={{
            width: "65%",
            minWidth: "300px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          aria-label={`${activeCategory} articles carousel`}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              marginBottom: "10px",
            }}
          >
            <button
              onClick={() => scrollCarousel("left")}
              aria-label="Scroll left"
              style={{
                cursor: "pointer",
                fontSize: "20px",
                background: "none",
                border: "none",
                color: "#043222",
              }}
            >
              &#8592;
            </button>
            <button
              onClick={() => scrollCarousel("right")}
              aria-label="Scroll right"
              style={{
                cursor: "pointer",
                fontSize: "20px",
                background: "none",
                border: "none",
                color: "#043222",
              }}
            >
              &#8594;
            </button>
          </div>

          <div
            ref={carouselRef}
            style={{
              display: "flex",
              gap: "20px",
              overflowX: "auto",
              scrollSnapType: "x mandatory",
              paddingBottom: "20px",
            }}
          >
            {currentArticles.map((article, index) => (
              <article
                key={index}
                style={{
                  minWidth: `calc(100% / ${itemsPerView} - 20px)`,
                  scrollSnapAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "10px",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "300px",
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
                    <h2
                      style={{
                        color: "white",
                        fontSize: "16px",
                        fontFamily: "EB Garamond",
                        fontWeight: "700",
                        marginBottom: "8px",
                      }}
                    >
                      {article.title}
                    </h2>
                    <p
                      style={{
                        color: "#E4DFDF",
                        fontSize: "9px",
                        fontFamily: "Inter",
                        fontWeight: "400",
                        textAlign: "center",
                      }}
                    >
                      {article.desc}
                    </p>
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
                      <span
                        style={{
                          fontWeight: "700",
                          fontFamily: "EB Garamond",
                        }}
                      >
                        {article.author}
                      </span>
                    </div>
                  </div>
                </div>

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
                  }}
                  aria-label={`Read more about ${article.title}`}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.background = "rgba(4,50,34,0.95)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.background = "rgba(4,50,34,0.85)")
                  }
                >
                  Read More
                </button>
              </article>
            ))}
          </div>
        </section>

        {/* Divider */}
        {!isMobile && (
          <div
            style={{ width: "1px", height: "500px", background: "#043222" }}
          />
        )}

        {/* Right Section - Categories */}
        <nav
          aria-label="Article categories"
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
            <button
              key={item.value}
              onClick={() => setActiveCategory(item.value)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: activeCategory === item.value ? "#043222" : "gray",
                fontFamily: "EB Garamond",
                fontSize: "17px",
                fontWeight: "400",
                textDecoration:
                  activeCategory === item.value ? "underline" : "none",
              }}
              aria-pressed={activeCategory === item.value}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </main>

      <Footer />
    </div>
  );
};

export default News;
