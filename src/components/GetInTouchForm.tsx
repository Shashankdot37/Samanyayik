import React, { useState } from "react";

const GetInTouchForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let tempErrors: any = {};

    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.email) tempErrors.email = "Email is required";

    // Phone validation: only digits, exactly 10 digits
    if (!formData.phone) {
      tempErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      tempErrors.phone = "Phone number must be exactly 10 digits";
    }

    if (!formData.service) tempErrors.service = "Please select a service";
    if (!formData.message) tempErrors.message = "Message cannot be empty";

    setErrors(tempErrors);

    if (Object.keys(tempErrors).length === 0) {
      console.log("Form submitted", formData);
      alert("Message sent!");
    }
  };

  return (
    <section
      className="w-full min-h-screen flex items-center justify-center relative"
      style={{ marginTop: "-3.2rem" }}
    >
      <form
        onSubmit={handleSubmit}
        role="form"
        className="w-[70%] flex flex-col gap-8"
      >
        {/* Required explanation */}
        <p style={{ color: "white", fontSize: "14px" }}>
          Fields marked with <span style={{ color: "red" }}>*</span> are mandatory
        </p>

        {/* Row 1: Name & Email */}
        <div className="flex flex-col lg:flex-row gap-6">
          <div style={{ flex: 1 }}>
            <label style={{ color: "white", display: "block", marginBottom: "4px" }}>
              Name <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              style={{
                width: "100%",
                height: "64px",
                borderRadius: "58px",
                paddingLeft: "32px",
                paddingRight: "32px",
                backgroundColor: "rgba(217, 217, 217, 0.9)",
                color: "#2B2929",
              }}
              required
            />
            {errors.name && <span style={{ color: "red", fontSize: "12px" }}>{errors.name}</span>}
          </div>

          <div style={{ flex: 1 }}>
            <label style={{ color: "white", display: "block", marginBottom: "4px" }}>
              Email <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="e.g. name@example.com"
              value={formData.email}
              onChange={handleChange}
              style={{
                width: "100%",
                height: "64px",
                borderRadius: "58px",
                paddingLeft: "32px",
                paddingRight: "32px",
                backgroundColor: "rgba(217, 217, 217, 0.9)",
                color: "#2B2929",
              }}
              required
            />
            {errors.email && <span style={{ color: "red", fontSize: "12px" }}>{errors.email}</span>}
          </div>
        </div>

        {/* Row 2: Phone & Service */}
        <div className="flex flex-col lg:flex-row gap-6">
          <div style={{ flex: 1 }}>
            <label style={{ color: "white", display: "block", marginBottom: "4px" }}>
              Phone <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="9812345678"
              value={formData.phone}
              onChange={handleChange}
              style={{
                width: "100%",
                height: "64px",
                borderRadius: "58px",
                paddingLeft: "32px",
                paddingRight: "32px",
                backgroundColor: "rgba(217, 217, 217, 0.9)",
                color: "#2B2929",
              }}
              required
            />
            {errors.phone && <span style={{ color: "red", fontSize: "12px" }}>{errors.phone}</span>}
          </div>

          <div style={{ flex: 1 }}>
            <label style={{ color: "white", display: "block", marginBottom: "4px" }}>
              Service <span style={{ color: "red" }}>*</span>
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              style={{
                width: "100%",
                height: "64px",
                borderRadius: "58px",
                paddingLeft: "32px",
                paddingRight: "48px",
                backgroundColor: "rgba(217, 217, 217, 0.9)",
                color: "#2B2929",
              }}
              required
            >
              <option value="" disabled>
                Select your service
              </option>
              <option value="service1">Service 1</option>
              <option value="service2">Service 2</option>
              <option value="service3">Service 3</option>
            </select>
            {errors.service && <span style={{ color: "red", fontSize: "12px" }}>{errors.service}</span>}
          </div>
        </div>

        {/* Message */}
        <div>
          <label style={{ color: "white", display: "block", marginBottom: "4px" }}>
            Message <span style={{ color: "red" }}>*</span>
          </label>
          <textarea
            name="message"
            placeholder="Write your message"
            value={formData.message}
            onChange={handleChange}
            style={{
              width: "100%",
              height: "192px",
              borderRadius: "58px",
              paddingLeft: "32px",
              paddingRight: "32px",
              paddingTop: "24px",
              paddingBottom: "24px",
              backgroundColor: "rgba(217, 217, 217, 0.9)",
              color: "#2B2929",
              resize: "none",
            }}
            required
          />
          {errors.message && <span style={{ color: "red", fontSize: "12px" }}>{errors.message}</span>}

          {/* Voice message hint */}
          <p style={{ color: "white", fontSize: "12px", marginTop: "4px" }}>
            Can't type your message? You can send a voice message 🎤
          </p>
        </div>

        {/* Buttons: Submit + Voice Message */}
        <div style={{ display: "flex", gap: "16px" }}>
          <button
            type="submit"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              backgroundColor: "#FFEEAD",
              color: "#000000",
              borderRadius: "100px",
              paddingLeft: "40px",
              paddingRight: "40px",
              paddingTop: "10px",
              paddingBottom: "10px",
              fontWeight: 500,
              cursor: "pointer",
              transition: "background-color 0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#ffeebb")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#FFEEAD")}
          >
            Send Message
          </button>

          <button
            type="button"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "#D9D9D9",
              color: "#2B2929",
              borderRadius: "100px",
              paddingLeft: "32px",
              paddingRight: "32px",
              paddingTop: "10px",
              paddingBottom: "10px",
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            🎤 Voice Message
          </button>
        </div>
      </form>
    </section>
  );
};

export default GetInTouchForm;
