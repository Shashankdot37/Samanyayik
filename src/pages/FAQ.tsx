import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const FaqPage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How long does it take to get a divorce?",
      answer:
        "The duration depends on the complexity of your case, the court schedule, and mutual agreement between parties. Generally, it can take several months to over a year.",
    },
    {
      question: "How will I be kept informed about my case?",
      answer:
        "We keep our clients informed through regular updates via email and phone calls. You’ll always be aware of the progress and next steps in your case.",
    },
    {
      question: "What areas of law do you specialize in?",
      answer:
        "We specialize in corporate law, family law, and property disputes, ensuring clients receive expert guidance in each field.",
    },
    {
      question: "How long will my case take to resolve?",
      answer:
        "The timeline depends on the complexity of your case. We’ll provide an estimated duration after reviewing all the details.",
    },
    {
      question: "Do I need to visit your office for every consultation?",
      answer:
        "Not necessarily. We also provide consultations via phone or video calls for your convenience.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F6E9D9] flex flex-col">
      {/* Header */}
      <Header />

      {/* Page Title */}
      <section
        className="flex flex-col items-center mt-12 mb-8 text-center px-4"
        role="banner"
      >
        <h1
          className="font-[EB_Garamond] text-[#043222] font-bold"
          style={{
            fontSize: "clamp(1.8rem, 4vw, 57px)",
            fontWeight: "bold",
            marginTop:"2rem"
          }}
          aria-label="Frequently Asked Questions"
        >
          Frequently Asked Questions
        </h1>
      </section>

      {/* FAQ List */}
      <section
        className="flex flex-col items-center justify-start gap-8 sm:gap-12 px-4 sm:px-8 md:px-12 pb-12"
        style={{ padding: "5vh" }}
        aria-labelledby="faq-section"
      >
        <div
          className="flex flex-col justify-start items-center gap-8 w-full max-w-[800px]"
          id="faq-section"
        >
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                className="flex flex-col gap-3 w-full"
                style={{ width: "100%" }}
              >
                {/* Question Button */}
                <button
                  id={`faq-question-${index}`}
                  aria-controls={`faq-answer-${index}`}
                  aria-expanded={isActive}
                  onClick={() =>
                    setActiveIndex(isActive ? null : index)
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveIndex(isActive ? null : index);
                    }
                  }}
                  style={{
                    width: "100%",
                    padding: "20px 24px",
                    background: isActive
                      ? "rgba(4, 50, 34, 0.95)"
                      : "rgba(4, 50, 34, 0.85)",
                    borderTopRightRadius: "30px",
                    borderBottomRightRadius: "30px",
                    borderBottomLeftRadius: "30px",
                    color: "white",
                    fontSize: "clamp(0.9rem, 2vw, 20px)",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 300,
                    textAlign: "left",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    outline: isActive
                      ? "2px solid #FFEEAD"
                      : "2px solid transparent",
                    outlineOffset: "2px",
                  }}
                  className="focus-visible:ring-2 focus-visible:ring-[#FFEEAD] hover:bg-[rgba(4,50,34,0.95)]"
                >
                  <span>{faq.question}</span>
                  <span
                    style={{
                      transform: isActive ? "rotate(45deg)" : "rotate(0)",
                      transition: "transform 0.3s ease",
                      fontSize: "1.3rem",
                    }}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>

                {/* Answer */}
                {isActive && (
                  <div
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                    style={{
                      width: "100%",
                      padding: "20px 24px",
                      background: "rgba(255, 238, 173, 0.8)",
                      borderTopLeftRadius: "30px",
                      borderBottomRightRadius: "30px",
                      borderBottomLeftRadius: "30px",
                      border: "1px solid black",
                      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                      color: "black",
                      fontSize: "clamp(0.85rem, 1.8vw, 18px)",
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 300,
                      transition: "all 0.5s ease",
                    }}
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default FaqPage;
