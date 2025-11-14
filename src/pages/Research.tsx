import Header from "../components/Header";
import Footer from "../components/Footer";

const Research:React.FC = () =>{
    return (
        <>
        <Header/>
        <section className="min-h-screen">
         <h1
          className="font-[EB_Garamond] text-[#043222] font-bold mb-8 text-center"
          style={{
            fontSize: "clamp(2rem, 4vw, 57px)",
            marginTop: "2rem",
            fontWeight:"bold"
          }}
          role="banner"
          aria-label="Research and Publication"
        >
          Research and Publication
        </h1>
        </section>
        <Footer/>s
        </>
    )
}

export default Research;