import { useState, useEffect } from "react";
import reviewer1 from "../assets/c1.jpeg";
import reviewer2 from "../assets/c2.jpeg";
import reviewer3 from "../assets/c3.jpeg";

interface TestimonialType {
  image: string;
  name: string;
  position: string;
  review: string;
}

const testimonials: TestimonialType[] = [
  {
    image: reviewer1,
    name: "Madan Rokaya",
    position: "Applicant",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.",
  },
  {
    image: reviewer2,
    name: "Sita Sharma",
    position: "Applicant",
    review:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
  },
  {
    image: reviewer3,
    name: "Ram Bhandari",
    position: "Applicant",
    review:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

const Testimonial = () => {
  const [current, setCurrent] = useState<number>(0);
  const [fade, setFade] = useState<boolean>(true);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const animateChange = (newIndex: number) => {
    setFade(false);
    setTimeout(() => {
      setCurrent(newIndex);
      setFade(true);
    }, 300);
  };

  const prevTestimonial = () => {
    const newIndex = current === 0 ? testimonials.length - 1 : current - 1;
    animateChange(newIndex);
  };

  const nextTestimonial = () => {
    const newIndex = current === testimonials.length - 1 ? 0 : current + 1;
    animateChange(newIndex);
  };

  const currentTestimonial = testimonials[current];

  return (
    <section
      style={{
        width: "100%",
        minHeight: "100vh",
        borderTopLeftRadius: "58px",
        borderTopRightRadius: "58px",
        backgroundColor: "#043222",
        overflow: "hidden",
        zIndex: 32,
        padding: isMobile ? "40px 10px" : "60px 20px",
        boxSizing: "border-box",
      }}
    >
      {/* Heading */}
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginBottom: isMobile ? "6vh" : "12vh",
        }}
      >
        <h1
          style={{
            fontFamily: "EB Garamond, serif",
            color: "#FFEEAD",
            fontSize: isMobile ? "2.2rem" : "4rem",
            textAlign: "center",
            lineHeight: 1.2,
            padding: "0 10px",
          }}
        >
          What our Clients Say
        </h1>
      </div>

      {/* Wrapper */}
      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        {/* Prev (Desktop) */}
        {!isMobile && (
          <button
            onClick={prevTestimonial}
            style={{
              position: "absolute",
              left: "4rem",
              top: "50%",
              transform: "translateY(-50%)",
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#FFEEAD",
              fontSize: "4rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <span>&lt;</span>
            <span style={{ marginTop: 6, fontSize: "1rem" }}>Previous</span>
          </button>
        )}

        {/* Content */}
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "center",
            justifyContent: "center",
            gap: isMobile ? "25px" : "60px",
            padding: "0 10px",
          }}
        >
          {/* Profile Section */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
              opacity: fade ? 1 : 0,
              transform: fade ? "translateY(0px)" : "translateY(15px)",
              transition: "0.4s ease",
            }}
          >
            <img
              src={currentTestimonial.image}
              alt={currentTestimonial.name}
              style={{
                width: isMobile ? "90px" : "130px",
                height: isMobile ? "90px" : "130px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />

            <span
              style={{
                fontWeight: "bold",
                fontSize: isMobile ? "18px" : "24px",
                color: "white",
                textAlign: "center",
              }}
            >
              {currentTestimonial.name}
            </span>

            <span
              style={{
                fontSize: "14px",
                color: "white",
                opacity: 0.9,
              }}
            >
              {currentTestimonial.position}
            </span>
          </div>

          {/* Review Box */}
          <div
            style={{
              backgroundColor: "white",
              color: "black",
              padding: isMobile ? "18px" : "30px",
              borderTopRightRadius: "40px",
              borderBottomLeftRadius: "40px",
              width: isMobile ? "90%" : "55%",
              maxWidth: "600px",
              minHeight: isMobile ? "150px" : "220px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              opacity: fade ? 1 : 0,
              transform: fade ? "translateY(0px)" : "translateY(20px)",
              transition: "0.4s ease",
            }}
          >
            <p
              style={{
                fontFamily: "EB Garamond, serif",
                fontSize: isMobile ? "1rem" : "1.3rem",
                lineHeight: 1.6,
                width: "90%",
                textAlign: "center",
              }}
            >
              "{currentTestimonial.review}"
            </p>
          </div>
        </div>

        {/* Next (Desktop) */}
        {!isMobile && (
          <button
            onClick={nextTestimonial}
            style={{
              position: "absolute",
              right: "4rem",
              top: "50%",
              transform: "translateY(-50%)",
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#FFEEAD",
              fontSize: "4rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <span>&gt;</span>
            <span style={{ marginTop: 6, fontSize: "1rem" }}>Next</span>
          </button>
        )}

        </div>
        {/* Mobile Buttons */}
        {isMobile && (
          <div
            style={{
              marginTop: "35px",
              display: "flex",
              justifyContent: "center",
              gap: "35px",
            }}
          >
            <button
              onClick={prevTestimonial}
              style={{
                background: "none",
                border: "2px solid #FFEEAD",
                borderRadius: "50%",
                padding: "10px 18px",
                fontSize: "1.5rem",
                color: "#FFEEAD",
              }}
            >
              &lt;
            </button>

            <button
              onClick={nextTestimonial}
              style={{
                background: "none",
                border: "2px solid #FFEEAD",
                borderRadius: "50%",
                padding: "10px 18px",
                fontSize: "1.5rem",
                color: "#FFEEAD",
              }}
            >
              &gt;
            </button>
          </div>
        )}
    </section>
  );
};

export default Testimonial;
