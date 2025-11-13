const AboutUsMission: React.FC = () => {
  return (
    <section
      className="flex justify-center items-center w-full"
      style={{
        zIndex: 1,
        marginTop: "3rem",
        marginBottom: "7rem",
        opacity: 0.95,
      }}
    >
      <div
        className="backdrop-blur-md shadow-lg"
        style={{
          width: "clamp(250px, 90%, 900px)",
          background: "rgba(16, 59, 43, 0.85)",
          borderTopRightRadius: "58px",
          borderBottomLeftRadius: "58px",
          padding: "2.5rem 4rem",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#FFEEAD",
            fontFamily: "EB Garamond, serif",
            fontSize: "clamp(1rem, 2vw, 22px)",
            fontWeight: 500,
            lineHeight: 1.6,
            margin: 0,
            maxWidth: "800px",
            display: "inline-flex",
            alignItems: "center",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "baseline",
              flexWrap: "nowrap",
            }}
          >
            <span
              style={{
                fontSize: "3.5rem",
                fontWeight: "800",
                lineHeight: "0.9",
              }}
            >
              O
            </span>
            <span
              style={{
                fontSize: "clamp(1rem, 2vw, 22px)",
                fontWeight: 500,
              }}
            >
              ur mission is to deliver innovative, reliable, and
              customer-focused solutions that create lasting value while
              upholding integrity, sustainability, and excellence in everything
              we do.
            </span>
          </span>
        </p>
      </div>
    </section>
  );
};

export default AboutUsMission;
