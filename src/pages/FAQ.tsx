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
    <div className="min-h-screen bg-[#F6E9D9] text-white flex flex-col">
      {/* Header */}
      <Header />

      {/* Page Title */}
      <section className="flex flex-col items-center mt-16 mb-12 text-center">
        <h1
          className="text-[57px] font-bold font-[EB_Garamond] text-[#043222]"
          aria-label="Frequently Asked Questions"
          style={{ fontSize: "57px", fontWeight: "bold" }}
        >
          Frequently Asked Questions
        </h1>
      </section>

      {/* FAQ List */}
      <section
        className="flex flex-col items-center justify-start gap-12"
        style={{ paddingBottom: "5vh", paddingTop: "5vh" }}
      >
        <div
          className="flex-col justify-start items-start gap-[50px] inline-flex"
          style={{ width: "542px" }}
        >
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;

            return (
              <div key={index} className="flex flex-col gap-4 w-full">
                {/* Question Box */}
                <button
                  onClick={() =>
                    setActiveIndex(isActive ? null : index)
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveIndex(isActive ? null : index);
                    }
                  }}
                  aria-expanded={isActive}
                  aria-controls={`faq-answer-${index}`}
                  style={{
                    height: "84px",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    width: "100%",
                    paddingLeft: "46px",
                    paddingRight: "46px",
                    paddingTop: "28px",
                    paddingBottom: "28px",
                    background: isActive
                      ? "rgba(4, 50, 34, 0.95)" // darker when active (clicked)
                      : "rgba(4, 50, 34, 0.85)", // normal when inactive
                    borderTopRightRadius: "30px",
                    borderBottomRightRadius: "30px",
                    borderBottomLeftRadius: "30px",
                    textAlign: "left",
                    color: "white",
                    fontSize: "17px",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 300,
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                  }}
                >
                  {faq.question}
                </button>

                {/* Answer Box */}
                {isActive && (
                  <div
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                    style={{
                      width: "100%",
                      maxWidth: "790px",
                      paddingLeft: "45px",
                      paddingRight: "45px",
                      paddingTop: "29px",
                      paddingBottom: "29px",
                      background: "rgba(255, 238, 173, 0.8)",
                      color: "black",
                      fontSize: "15px",
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 100,
                      borderTopLeftRadius: "30px",
                      borderBottomRightRadius: "30px",
                      borderBottomLeftRadius: "30px",
                      border: "1px solid black",
                      outlineOffset: "-1px",
                      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
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
