import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import logo from "../assets/logo.png";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const ContactPage: React.FC = () => {
  const [feedback, setFeedback] = useState("");
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [recording, setRecording] = useState(false);
  let mediaRecorder: MediaRecorder | null = null;
  let audioChunks: BlobPart[] = [];

  // Voice recording
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorder = new MediaRecorder(stream);

      audioChunks = [];
      mediaRecorder.ondataavailable = (event) => audioChunks.push(event.data);

      mediaRecorder.onstop = () => {
        const blob = new Blob(audioChunks, { type: "audio/mp3" });
        setAudioBlob(blob);
      };

      mediaRecorder.start();
      setRecording(true);
    } catch (error) {
      alert("Microphone access denied.");
    }
  };

  const stopRecording = () => {
    if (mediaRecorder && mediaRecorder.state !== "inactive") {
      mediaRecorder.stop();
    }
    setRecording(false);
  };

  const containerStyle: React.CSSProperties = {
    minHeight: "100vh",
    backgroundColor: "#F6E9D9",
    display: "flex",
    flexDirection: "column",
  };

  const contentStyle: React.CSSProperties = {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "2rem 1rem",
    flexGrow: 1,
  };

  const titleStyle: React.CSSProperties = {
    fontFamily: "EB Garamond, serif",
    fontSize: "clamp(2rem, 4vw, 60px)",
    fontWeight: 700,
    color: "#043222",
    textAlign: "center",
    marginBottom: "2rem",
  };

  const sectionStyle: React.CSSProperties = {
    marginBottom: "2.5rem",
    padding: "1.5rem",
    background: "#FFEEAD",
    borderRadius: "20px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  };

  const socialIconStyle: React.CSSProperties = {
    fontSize: "34px",
    cursor: "pointer",
    marginRight: "22px",
    transition: "opacity 0.2s ease, transform 0.2s ease",
  };

  const sectionTitleStyle: React.CSSProperties = {
    fontFamily: "EB Garamond, serif",
    fontSize: "1.8rem",
    fontWeight: 600,
    color: "#043222",
    marginBottom: "1rem",
  };

  const textStyle: React.CSSProperties = {
    fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
    fontSize: "1rem",
    color: "#043222",
    lineHeight: "1.6",
    margin: "1rem",
  };

  const feedbackBoxStyle: React.CSSProperties = {
    width: "100%",
    minHeight: "120px",
    padding: "1rem",
    fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
    fontSize: "1rem",
    borderRadius: "10px",
    outline: "none",
    border: "1px solid #043222",
  };

  const voiceContainerStyle: React.CSSProperties = {
    marginTop: "1rem",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: "#D56B4B",
    color: "#FFEEAD",
    border: "none",
    padding: "0.8rem 1.2rem",
    borderRadius: "10px",
    fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
    fontWeight: 600,
    cursor: "pointer",
    width: "fit-content",
  };

  return (
    <div style={containerStyle}>
      <Header />

      <main style={contentStyle}>
        <h1 style={titleStyle} aria-label="Contact Us" role="banner">Contact Us</h1>

        {/* Company Info */}
        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Company Information</h2>

          <img
            src={logo}
            alt="Samanyayik Logo"
            style={{ width: "120px", marginBottom: "1rem" }}
          />

          <p style={textStyle}>
            <strong>Company Name:</strong> Samanyayik
          </p>
          <p style={textStyle}>
            <strong>Phone:</strong> +977-9800000000
          </p>
          <p style={textStyle}>
            <strong>Email:</strong> info@samanyayik.com
          </p>
          <p style={textStyle}>
            <strong>Address:</strong> Jawalakhel, Lalitpur, Nepal. Located near
            the XYZ landmark, beside ABC building.
          </p>

          <div style={{ marginTop: "1rem" }}>
            <iframe
              title="Company Location"
              width="100%"
              height="250"
              style={{ borderRadius: "12px", border: "none" }}
              src="https://www.openstreetmap.org/export/embed.html?bbox=85.312%2C27.667%2C85.314%2C27.668&layer=mapnik"
            ></iframe>
          </div>
        </section>

        {/* Socials */}
        <section style={{ marginBottom: "48px" }}>
          <h3
            style={{
              fontFamily: "EB Garamond, serif",
              fontSize: "26px",
              fontWeight: 600,
              marginBottom: "12px",
            }}
          >
            Connect With Us
          </h3>

          <div
            style={{ display: "flex", alignItems: "center", marginTop: "10px" }}
          >
            <a href="#" aria-label="Facebook">
              <FaFacebook
                style={{ ...socialIconStyle, color: "#1877F2" }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              />
            </a>

            <a href="#" aria-label="Twitter">
              <FaTwitter
                style={{ ...socialIconStyle, color: "#1DA1F2" }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              />
            </a>

            <a href="#" aria-label="LinkedIn">
              <FaLinkedin
                style={{ ...socialIconStyle, color: "#0A66C2" }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              />
            </a>

            <a href="#" aria-label="Instagram">
              <FaInstagram
                style={{ ...socialIconStyle, color: "#E4405F" }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              />
            </a>

            <a href="#" aria-label="YouTube">
              <FaYoutube
                style={{ ...socialIconStyle, color: "#FF0000" }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              />
            </a>
          </div>
        </section>

        {/* Feedback */}
        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Send Us Your Feedback</h2>

          <p style={textStyle}>
            We value your feedback. If typing is difficult, feel free to leave a
            voice message.
          </p>

          <textarea
            placeholder="Write your feedback here..."
            style={feedbackBoxStyle}
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />

          {/* Voice Message */}
          <div style={voiceContainerStyle}>
            {!recording ? (
              <button onClick={startRecording} style={buttonStyle}>
                🎤 Start Voice Message
              </button>
            ) : (
              <button onClick={stopRecording} style={buttonStyle}>
                ⏹ Stop Recording
              </button>
            )}

            {audioBlob && (
              <audio controls src={URL.createObjectURL(audioBlob)} />
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
