import { useState, useEffect } from "react";
import reviewer1 from "../assets/c1.jpeg";
import reviewer2 from "../assets/c2.jpeg";
import reviewer3 from "../assets/c3.jpeg";

const testimonials = [
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
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const prevTestimonial = () => {
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
  };

  const nextTestimonial = () => {
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
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

      {/* Outer Wrapper */}
      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* DESKTOP BUTTONS */}
        {!isMobile && (
          <>
            <button
              onClick={prevTestimonial}
              style={{
                position: "absolute",
                left: "-4rem",
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
              <span style={{ marginTop: "6px", fontSize: "1rem" }}>
                Previous
              </span>
            </button>

            <button
              onClick={nextTestimonial}
              style={{
                position: "absolute",
                right: "-4rem",
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
              <span style={{ marginTop: "6px", fontSize: "1rem" }}>
                Next
              </span>
            </button>
          </>
        )}

        {/* MAIN CONTENT */}
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
          {/* Image + Name */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
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
              opacity: 0.9,
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

        {/* MOBILE BUTTONS BELOW (FIXED & WORKING) */}
        {isMobile && (
          <div
            style={{
              marginTop: "30px",
              display: "flex",
              justifyContent: "center",
              gap: "40px",
            }}
          >
            <button
              onClick={prevTestimonial}
              style={{
                background: "none",
                border: "2px solid #FFEEAD",
                borderRadius: "50%",
                padding: "12px 20px",
                fontSize: "1.6rem",
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
                padding: "12px 20px",
                fontSize: "1.6rem",
                color: "#FFEEAD",
              }}
            >
              &gt;
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonial;
