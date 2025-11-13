import React, { useState, useRef } from "react";
import MapPicker from "./MapPicker";

const FinalClientForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    address: "",
    email: "",
    issue: "",
  });

  const [useMap, setUseMap] = useState(false);
  const [recording, setRecording] = useState(false);
  const [audioURL, setAudioURL] = useState<string | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [coords, setCoords] = useState<{ lat: number; lng: number } | null>(null);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunks = useRef<Blob[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleVoiceRecord = async () => {
    if (!recording) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaRecorderRef.current = new MediaRecorder(stream);
        mediaRecorderRef.current.ondataavailable = (e) => chunks.current.push(e.data);
        mediaRecorderRef.current.onstop = () => {
          const blob = new Blob(chunks.current, { type: "audio/mpeg" });
          setAudioURL(URL.createObjectURL(blob));
          chunks.current = [];
        };
        mediaRecorderRef.current.start();
        setRecording(true);
      } catch (err) {
        alert("Microphone access denied. Please enable it to record a message.");
      }
    } else {
      mediaRecorderRef.current?.stop();
      setRecording(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const tempErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) tempErrors.name = "Name is required.";
    if (!formData.contact.trim()) tempErrors.contact = "Contact number is required.";
    else if (!/^[0-9]{10}$/.test(formData.contact))
      tempErrors.contact = "Contact number must be 10 digits.";
    if (!formData.address.trim() && !useMap)
      tempErrors.address = "Please provide an address or choose from map.";
    if (!formData.issue.trim() && !audioURL)
      tempErrors.issue = "Please describe your issue or leave a voice message.";

    setErrors(tempErrors);

    if (Object.keys(tempErrors).length === 0) {
      console.log("Form submitted:", { ...formData, audioURL });
      alert("Your information has been submitted successfully!");
    }
  };

  return (
    <section
      style={{
        width: "100%",
        maxWidth: "700px",
        margin: "0 auto",
        padding: "2rem 1rem",
      }}
    >
      <h2
        style={{
          fontFamily: "EB Garamond, serif",
          fontWeight: 700,
          fontSize: "2.25rem",
          color: "#043222",
          marginBottom: "2rem",
          textAlign: "center",
        }}
      >
        Tell Us About Your Case
      </h2>

      <form
        onSubmit={handleSubmit}
        role="form"
        aria-label="Client Information Form"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
        }}
      >
        {/* Name */}
        <div>
          <label htmlFor="name" style={{ color: "#043222", fontWeight: 600 }}>
            Name <span style={{ color: "red" }}>*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            style={{
              width: "100%",
              height: "52px",
              borderRadius: "12px",
              padding: "0 16px",
              marginTop: "8px",
              border: "1.5px solid #043222",
              backgroundColor: "#F6E9D9",
              color: "#043222",
            }}
            aria-required="true"
          />
          {errors.name && (
            <p style={{ color: "red", fontSize: "12px" }}>{errors.name}</p>
          )}
        </div>

        {/* Contact */}
        <div>
          <label htmlFor="contact" style={{ color: "#043222", fontWeight: 600 }}>
            Contact <span style={{ color: "red" }}>*</span>
          </label>
          <input
            id="contact"
            name="contact"
            type="tel"
            placeholder="9812345678"
            value={formData.contact}
            onChange={handleChange}
            style={{
              width: "100%",
              height: "52px",
              borderRadius: "12px",
              padding: "0 16px",
              marginTop: "8px",
              border: "1.5px solid #043222",
              backgroundColor: "#F6E9D9",
              color: "#043222",
            }}
            aria-required="true"
          />
          {errors.contact && (
            <p style={{ color: "red", fontSize: "12px" }}>{errors.contact}</p>
          )}
        </div>

        {/* Address */}
        <div>
          <label htmlFor="address" style={{ color: "#043222", fontWeight: 600 }}>
            Address <span style={{ color: "red" }}>*</span>
          </label>

          <div style={{ display: "flex", gap: "1rem", marginTop: "8px" }}>
            <button
              type="button"
              onClick={() => setUseMap(false)}
              style={{
                flex: 1,
                padding: "10px",
                borderRadius: "8px",
                border: !useMap ? "2px solid #D56B4B" : "2px solid #043222",
                backgroundColor: !useMap ? "#D56B4B" : "#F6E9D9",
                color: !useMap ? "#FFEEAD" : "#043222",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              aria-pressed={!useMap}
            >
              Type Address
            </button>
            <button
              type="button"
              onClick={() => setUseMap(true)}
              style={{
                flex: 1,
                padding: "10px",
                borderRadius: "8px",
                border: useMap ? "2px solid #D56B4B" : "2px solid #043222",
                backgroundColor: useMap ? "#D56B4B" : "#F6E9D9",
                color: useMap ? "#FFEEAD" : "#043222",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              aria-pressed={useMap}
            >
              Choose on Map
            </button>
          </div>

          {useMap ? (
            <MapPicker
              onSelectPosition={(lat, lng) => {
                setCoords({ lat, lng });
                setFormData(prev => ({
                  ...prev,
                  address: `${lat.toFixed(5)}, ${lng.toFixed(5)}`
                }));
              }}
            />
          ) : (
            <input
              id="address"
              name="address"
              type="text"
              placeholder="Enter your address"
              value={formData.address}
              onChange={handleChange}
              style={{
                width: "100%",
                height: "52px",
                borderRadius: "12px",
                padding: "0 16px",
                marginTop: "12px",
                border: "1.5px solid #043222",
                backgroundColor: "#F6E9D9",
                color: "#043222",
              }}
              aria-required={!useMap}
            />
          )}
          {errors.address && (
            <p style={{ color: "red", fontSize: "12px" }}>{errors.address}</p>
          )}
        </div>

        {/* Email (Optional) */}
        <div>
          <label htmlFor="email" style={{ color: "#043222", fontWeight: 600 }}>
            Email (optional)
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="name@example.com"
            value={formData.email}
            onChange={handleChange}
            style={{
              width: "100%",
              height: "52px",
              borderRadius: "12px",
              padding: "0 16px",
              marginTop: "8px",
              border: "1.5px solid #043222",
              backgroundColor: "#F6E9D9",
              color: "#043222",
            }}
          />
        </div>

        {/* Issue */}
        <div>
          <label htmlFor="issue" style={{ color: "#043222", fontWeight: 600 }}>
            Write your issue <span style={{ color: "red" }}>*</span>
          </label>
          <textarea
            id="issue"
            name="issue"
            placeholder="Describe your issue in detail"
            value={formData.issue}
            onChange={handleChange}
            rows={5}
            style={{
              width: "100%",
              borderRadius: "12px",
              padding: "12px 16px",
              marginTop: "8px",
              border: "1.5px solid #043222",
              backgroundColor: "#F6E9D9",
              color: "#043222",
              resize: "none",
            }}
            aria-required={!audioURL}
          />

          <p style={{ color: "#043222", fontSize: "0.875rem", marginTop: "6px" }}>
            Can’t type your issue? You can leave a <strong>voice message 🎤</strong>
          </p>

          <div style={{ display: "flex", gap: "12px", marginTop: "12px" }}>
            <button
              type="button"
              onClick={handleVoiceRecord}
              style={{
                flex: 1,
                padding: "10px",
                borderRadius: "12px",
                border: "2px solid #D56B4B",
                backgroundColor: recording ? "#D56B4B" : "#F6E9D9",
                color: recording ? "#FFEEAD" : "#043222",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              aria-pressed={recording}
            >
              {recording ? "Stop Recording" : "Record Voice Message"}
            </button>

            {audioURL && (
              <audio
                controls
                src={audioURL}
                style={{ flex: 1, outline: "none" }}
                aria-label="Playback of your recorded voice message"
              />
            )}
          </div>
          {errors.issue && (
            <p style={{ color: "red", fontSize: "12px" }}>{errors.issue}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          style={{
            marginTop: "1rem",
            width: "100%",
            padding: "14px",
            borderRadius: "12px",
            border: "2px solid #D56B4B",
            backgroundColor: "#D56B4B",
            color: "#FFEEAD",
            fontWeight: 600,
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default FinalClientForm;
