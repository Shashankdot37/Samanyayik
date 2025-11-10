import backgroundImage from "../assets/get-in-touch-bg.png";
import GetInTouchForm from "./GetInTouchForm";

const GetinTouch: React.FC = () => {
  return (
    <section
      className="w-full min-h-screen relative"
      style={{
        borderTopLeftRadius: "58px",
        borderTopRightRadius: "58px",
        background: `
      linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.5)),
      url(${backgroundImage}) center/cover no-repeat,
      #F6E9D9
    `,
        overflow: "hidden",
        zIndex: 32,
        marginTop: "-3.2rem",
        paddingBottom: "1vh",
      }}
    >
      <div
        className="w-full flex justify-center mt-8"
        style={{ marginBottom: "5vh" }}
      >
        <h1
          className="font-['EB_Garamond'] text-center"
          style={{
            color: "white",
            fontSize: "clamp(2.5rem, 6vw, 5.9rem)",
            fontWeight: "bold",
            marginTop: "2rem",
          }}
        >
          Get in Touch
        </h1>
      </div>
      <div className="relative z-20 w-full flex justify-center">
        <GetInTouchForm />
      </div>
    </section>
  );
};
export default GetinTouch;
