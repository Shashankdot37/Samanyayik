import Header from "../components/Header";
import Footer from "../components/Footer";
import beamBalance from "../assets/beam-balance.png";
const AboutUs: React.FC = () => {
  return (
    <>
      <Header />
      <section className="min-h-screen min-w-screen">
        <section
          className="flex flex-col items-center mt-12 mb-8 text-center px-4"
          role="banner">
          <h1
            className="font-[EB_Garamond] text-[#043222] font-bold"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 57px)",
              fontWeight: "bold",
            }}
            aria-label="About Us"
          >
            About Us
          </h1>
        </section>
        <img
          src={beamBalance}
          alt=""
          role="presentation"
          aria-hidden="true"
          className="absolute opacity-80 pointer-events-none"
          style={{
            width: "528px",
            height: "550px",
            top: "-10%",
            left: "-10%",
            objectFit: "contain",
          }}
        />
        <div style={{ width: 1137, height: 338, paddingLeft: 108, paddingRight: 108, paddingTop: 6, paddingBottom: 6, background: 'rgba(16, 59, 43, 0.63)', borderTopRightRadius: 58, borderBottomLeftRadius: 58, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
          <div style={{ width: 899, textAlign: 'center' }}><span style={{color: '#FFEEAD', fontSize: 95, fontFamily: 'EB Garamond', fontWeight: '700', wordWrap: 'break-word'}}>O</span><span style={{color: '#FFEEAD', fontSize: 43, fontFamily: 'EB Garamond', fontWeight: '700', wordWrap: 'break-word'}}>ur mission is to deliver innovative, reliable, and customer-focused solutions that create lasting value while upholding integrity, sustainability, and excellence in everything we do.</span></div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default AboutUs;