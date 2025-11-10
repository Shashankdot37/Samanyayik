import { useState } from "react";
import reviewer1 from "../assets/c1.jpeg";
import reviewer2 from "../assets/c2.jpeg";
import reviewer3 from "../assets/c3.jpeg";

const testimonials = [
  {
    image: reviewer1,
    name: "Madan Rokaya",
    position: "Applicant",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    image: reviewer2,
    name: "Sita Sharma",
    position: "Applicant",
    review:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
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

  const prevTestimonial = () => {
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
  };

  const nextTestimonial = () => {
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
  };

  const currentTestimonial = testimonials[current];

  return (
    <section
      className="w-full min-h-screen relative"
      style={{
        borderTopLeftRadius: "58px",
        borderTopRightRadius: "58px",
        backgroundColor: "#043222",
        overflow: "hidden",
        zIndex: 32,
      }}
    >
      {/* Heading at top */}
      <div
        className="w-full flex justify-center mt-8"
        style={{ marginBottom: "20vh" }}
      >
        <h1
          className="font-['EB_Garamond'] text-center"
          style={{
            color: "#FFEEAD",
            fontSize: "clamp(2.5rem, 6vw, 5.9rem)",
          }}
        >
          What our Clients Say
        </h1>
      </div>

      {/* Carousel layout */}
      <div className="flex items-center justify-center w-full w-[90%] mx-auto mt-12 relative">
        {/* Previous Button */}
        <button
          onClick={prevTestimonial}
          className="absolute left-[5rem] flex flex-col items-center justify-center group cursor-pointer"
          style={{ color: "#FFEEAD", fontSize: "5rem" }}
        >
          <span className="absolute inset-0 rounded-full border-2 border-yellow-200 opacity-0 scale-0 group-hover:opacity-50 group-hover:scale-110 transition-all duration-300"></span>
          <span className="relative z-10 text-yellow-200 group-hover:text-white select-none text-5xl">
            &lt;
          </span>
          <span className="relative z-10 mt-2 text-base font-medium text-yellow-200 group-hover:text-white">
            Previous
          </span>
        </button>

        {/* Testimonial */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 w-full">
          {/* Left: Image + Name */}
          <div className="flex flex-col items-center gap-4">
            <img
              src={currentTestimonial.image}
              alt={currentTestimonial.name}
              className="w-32 h-32 rounded-full object-cover"
            />
            <span
              style={{
                fontWeight: "bold",
                fontSize: "25px",
                color: "white",
                textAlign: "center",
              }}
            >
              {currentTestimonial.name}
            </span>
            <span className="text-sm text-white">
              {currentTestimonial.position}
            </span>
          </div>

          {/* Right: Review Box */}
          <div
            className="bg-white text-black p-6 lg:p-8 rounded-tr-[40px] rounded-bl-[40px] max-w-xl w-[60%] opacity-80"
            style={{ minHeight: "250px" }}
          >
            <p className="font-['EB_Garamond'] text-base leading-relaxed">
              "{currentTestimonial.review}"
            </p>
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={nextTestimonial}
          className="absolute right-[5rem] flex flex-col items-center justify-center group cursor-pointer"
          style={{ color: "#FFEEAD", fontSize: "5rem" }}
        >
          <span className="absolute inset-0 rounded-full border-2 border-yellow-200 opacity-0 scale-0 group-hover:opacity-50 group-hover:scale-110 transition-all duration-300"></span>
          <span className="relative z-10 text-yellow-200 group-hover:text-white select-none text-5xl">
            &gt;
          </span>
          <span className="relative z-10 mt-2 text-base font-medium text-yellow-200 group-hover:text-white">
            Next
          </span>
        </button>
      </div>
    </section>
  );
};

export default Testimonial;
