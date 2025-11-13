import AU1 from "../assets/au1.jpg";
import AU2 from "../assets/au2.jpg";
import AU3 from "../assets/au3.jpg";
import AU4 from "../assets/au4.jpg";

const AboutUsTimeline: React.FC = () => {
  return (
    <>
      {/* ===== Timeline Section ===== */}
      <div
        className="flex flex-col items-center justify-center w-full mx-auto relative z-10 px-4"
        style={{ marginBottom: "5rem" }}
      >
        {/* Hide timeline line on mobile */}
        <style>{`
            @media (max-width: 640px) {
              .timeline-line { display: none; }
            }
          `}</style>

        {/* ===== 1st Circle + Text ===== */}
        <div className="flex flex-row sm:flex-row items-center justify-center gap-4 relative mb-10">
          {/* Text Left (Desktop) */}
          <div
            className="hidden sm:block absolute -left-[260px] p-4"
            style={{
              width: "250px",
              backgroundColor: "#103B2B",
              color: "white",
              padding: "1.5rem",
              borderRadius: "50px 0 50px 50px",
            }}
          >
            <h3
              className="font-[EB_Garamond] font-bold mb-2"
              style={{
                color: "#FFEEAD",
                fontSize: "25px",
                marginBottom: "1rem",
              }}
            >
              Humble Beginning
            </h3>
            <p className="font-[EB_Garamond] text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              vehicula nunc ut tincidunt posuere.
            </p>
          </div>

          {/* Mobile Layout */}
          <div
            className="sm:hidden flex flex-col items-center text-center gap-3 mb-6"
            style={{ marginBottom: "3rem", gap: "1rem" }}
          >
            <div
              className="w-[90px] h-[90px] rounded-full overflow-hidden relative"
              style={{ border: "5px solid #D56B4B" }}
            >
              <div
                className="absolute inset-0 bg-center bg-cover"
                style={{ backgroundImage: `url(${AU1})` }}
              ></div>
            </div>
            <div
              className="p-6 rounded-[30px] mb-4"
              style={{
                backgroundColor: "#103B2B",
                color: "white",
                width: "90%",
              }}
            >
              <h3
                className="font-[EB_Garamond] font-bold mb-2"
                style={{ color: "#FFEEAD", fontSize: "22px" }}
              >
                Humble Beginning
              </h3>
              <p
                className="font-[EB_Garamond] text-sm"
                style={{ padding: "1rem" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                vehicula nunc ut tincidunt posuere.
              </p>
            </div>
          </div>

          {/* Circle (Desktop) */}
          <div
            className="hidden sm:block w-[156px] h-[156px] rounded-full overflow-hidden relative"
            style={{ border: "5px solid #D56B4B" }}
          >
            <div
              className="absolute inset-0 bg-center bg-cover"
              style={{ backgroundImage: `url(${AU1})` }}
            ></div>
          </div>
        </div>

        <div className="timeline-line h-[100px] w-[7px] bg-[#043222] mx-auto"></div>

        {/* ===== 2nd Circle + Text ===== */}
        <div className="flex flex-row items-center justify-center gap-4 relative mb-10">
          {/* Circle (Desktop) */}
          <div
            className="hidden sm:block w-[152px] h-[152px] rounded-full overflow-hidden relative"
            style={{ border: "5px solid #D56B4B" }}
          >
            <div
              className="absolute inset-0 bg-center bg-cover"
              style={{ backgroundImage: `url(${AU2})` }}
            ></div>
          </div>

          {/* Text Right (Desktop) */}
          <div
            className="hidden sm:block absolute -right-[260px] p-4"
            style={{
              width: "250px",
              backgroundColor: "#103B2B",
              color: "white",
              padding: "1.5rem",
              borderRadius: "50px 50px 50px 0",
            }}
          >
            <h3
              className="font-[EB_Garamond] font-bold mb-2"
              style={{
                color: "#FFEEAD",
                fontSize: "25px",
                marginBottom: "1rem",
              }}
            >
              Our Milestones
            </h3>
            <p className="font-[EB_Garamond] text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              facilisis justo vitae tortor fermentum.
            </p>
          </div>

          {/* Mobile Layout */}
          <div
            className="sm:hidden flex flex-col items-center text-center gap-3 mb-6"
            style={{ marginBottom: "3rem", gap: "1rem" }}
          >
            <div
              className="w-[90px] h-[90px] rounded-full overflow-hidden relative"
              style={{ border: "5px solid #D56B4B" }}
            >
              <div
                className="absolute inset-0 bg-center bg-cover"
                style={{ backgroundImage: `url(${AU2})` }}
              ></div>
            </div>
            <div
              className="p-6 rounded-[30px] mb-4"
              style={{
                backgroundColor: "#103B2B",
                color: "white",
                width: "90%",
              }}
            >
              <h3
                className="font-[EB_Garamond] font-bold mb-2"
                style={{ color: "#FFEEAD", fontSize: "22px" }}
              >
                Our Milestones
              </h3>
              <p
                className="font-[EB_Garamond] text-sm"
                style={{ padding: "1rem" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                facilisis justo vitae tortor fermentum.
              </p>
            </div>
          </div>
        </div>

        <div className="timeline-line h-[100px] w-[7px] bg-[#043222] mx-auto"></div>

        {/* ===== 3rd Circle + Text ===== */}
        <div className="flex flex-row items-center justify-center gap-4 relative mb-10">
          {/* Text Left (Desktop) */}
          <div
            className="hidden sm:block absolute -left-[260px] p-4"
            style={{
              width: "250px",
              backgroundColor: "#103B2B",
              color: "white",
              padding: "1.5rem",
              borderRadius: "50px 0 50px 50px",
            }}
          >
            <h3
              className="font-[EB_Garamond] font-bold mb-2"
              style={{
                color: "#FFEEAD",
                fontSize: "25px",
                marginBottom: "1rem",
              }}
            >
              Our Team
            </h3>
            <p className="font-[EB_Garamond] text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at
              nisi eget nulla posuere consequat.
            </p>
          </div>

          {/* Mobile Layout */}
          <div
            className="sm:hidden flex flex-col items-center text-center gap-3 mb-6"
            style={{ marginBottom: "3rem", gap: "1rem" }}
          >
            <div
              className="w-[90px] h-[90px] rounded-full overflow-hidden relative"
              style={{ border: "5px solid #D56B4B" }}
            >
              <div
                className="absolute inset-0 bg-center bg-cover"
                style={{ backgroundImage: `url(${AU3})` }}
              ></div>
            </div>
            <div
              className="p-6 rounded-[30px] mb-4"
              style={{
                backgroundColor: "#103B2B",
                color: "white",
                width: "90%",
              }}
            >
              <h3
                className="font-[EB_Garamond] font-bold mb-2"
                style={{ color: "#FFEEAD", fontSize: "22px" }}
              >
                Our Team
              </h3>
              <p
                className="font-[EB_Garamond] text-sm"
                style={{ padding: "1rem" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                at nisi eget nulla posuere consequat.
              </p>
            </div>
          </div>

          {/* Circle (Desktop) */}
          <div
            className="hidden sm:block w-[152px] h-[152px] rounded-full overflow-hidden relative"
            style={{ border: "5px solid #D56B4B" }}
          >
            <div
              className="absolute inset-0 bg-center bg-cover"
              style={{ backgroundImage: `url(${AU3})` }}
            ></div>
          </div>
        </div>

        <div className="timeline-line h-[100px] w-[7px] bg-[#043222] mx-auto"></div>

        {/* ===== 4th Circle + Text ===== */}
        <div className="flex flex-row items-center justify-center gap-4 relative mb-10">
          {/* Circle (Desktop) */}
          <div
            className="hidden sm:block w-[152px] h-[152px] rounded-full overflow-hidden relative"
            style={{ border: "5px solid #D56B4B" }}
          >
            <div
              className="absolute inset-0 bg-center bg-cover"
              style={{ backgroundImage: `url(${AU4})` }}
            ></div>
          </div>

          {/* Text Right (Desktop) */}
          <div
            className="hidden sm:block absolute -right-[260px] p-4"
            style={{
              width: "250px",
              backgroundColor: "#103B2B",
              color: "white",
              padding: "1.5rem",
              borderRadius: "50px 50px 50px 0",
            }}
          >
            <h3
              className="font-[EB_Garamond] font-bold mb-2"
              style={{
                color: "#FFEEAD",
                fontSize: "25px",
                marginBottom: "1rem",
              }}
            >
              Our Vision
            </h3>
            <p className="font-[EB_Garamond] text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              pretium purus a sapien dictum.
            </p>
          </div>

          {/* Mobile Layout */}
          <div
            className="sm:hidden flex flex-col items-center text-center"
            style={{ marginBottom: "3rem", gap: "1rem" }}
          >
            <div
              className="w-[90px] h-[90px] rounded-full overflow-hidden relative"
              style={{ border: "5px solid #D56B4B" }}
            >
              <div
                className="absolute inset-0 bg-center bg-cover"
                style={{ backgroundImage: `url(${AU4})` }}
              ></div>
            </div>
            <div
              className="p-6 rounded-[30px] mb-4"
              style={{
                backgroundColor: "#103B2B",
                color: "white",
                width: "90%",
              }}
            >
              <h3
                className="font-[EB_Garamond] font-bold mb-2"
                style={{ color: "#FFEEAD", fontSize: "22px" }}
              >
                Our Vision
              </h3>
              <p
                className="font-[EB_Garamond] text-sm"
                style={{ padding: "1rem" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                pretium purus a sapien dictum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsTimeline;
