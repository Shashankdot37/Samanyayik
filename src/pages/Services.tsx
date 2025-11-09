import PracticeAreasSection from "../components/PracticeAreasSection";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Services: React.FC = () =>{
    return (
        <>
        <Header/>
        <section className="min-w-screen min-h-screen" style={{paddingTop:"4rem", paddingBottom:"2rem"}}>
        <PracticeAreasSection/>
        </section>
        <Footer/>
        </>
    )
}

export default Services;