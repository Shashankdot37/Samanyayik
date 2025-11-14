import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Step1DatePicker from "../components/Step1DatePicker";
import TimePicker from "../components/TimePicker";
import FinalClientForm from "../components/FinalClientForm";

const Appointment: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  return (
    <>
      <Header />
      <main
        style={{
          minHeight: "100vh",
          backgroundColor: "#F6E9D9",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem 1rem",
        }}
      >
        {/* Step Indicator */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
            marginBottom: "2rem",
            flexWrap: "wrap",
          }}
          aria-label="Appointment Booking Progress"
        >
          {["Select Date", "Choose Time", "Your Details"].map((label, index) => {
            const current = index + 1;
            const isActive = current === step;
            const isCompleted = current < step;

            return (
              <div
                key={label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <div
                  style={{
                    width: "35px",
                    height: "35px",
                    borderRadius: "50%",
                    backgroundColor: isActive
                      ? "#D56B4B"
                      : isCompleted
                      ? "#043222"
                      : "#F6E9D9",
                    color: isActive || isCompleted ? "#FFEEAD" : "#043222",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: 700,
                    border: "2px solid #043222",
                  }}
                >
                  {current}
                </div>
                <span
                  style={{
                    fontWeight: 600,
                    color: isActive || isCompleted ? "#043222" : "#666",
                    fontFamily: "EB Garamond, serif",
                  }}
                >
                  {label}
                </span>
                {current !== 3 && (
                  <span
                    style={{
                      width: "30px",
                      height: "2px",
                      backgroundColor: "#043222",
                      marginLeft: "0.5rem",
                    }}
                    aria-hidden="true"
                  ></span>
                )}
              </div>
            );
          })}
        </div>

        {/* Step Content */}
        <div style={{ width: "100%", maxWidth: "800px" }}>
          {step === 1 && (
            <>
              <Step1DatePicker
                selectedDate={selectedDate}
                onSelectDate={setSelectedDate}
              />
              <div
                style={{
                  textAlign: "center",
                  marginTop: "2rem",
                }}
              >
                <button
                  onClick={handleNext}
                  disabled={!selectedDate}
                  style={{
                    padding: "0.75rem 2rem",
                    borderRadius: "12px",
                    border: "2px solid #D56B4B",
                    backgroundColor: selectedDate ? "#D56B4B" : "#D56B4B80",
                    color: "#FFEEAD",
                    fontWeight: 600,
                    cursor: selectedDate ? "pointer" : "not-allowed",
                    transition: "all 0.3s ease",
                  }}
                >
                  Next
                </button>
              </div>
            </>
          )}

          {step === 2 && selectedDate && (
            <TimePicker
              selectedDate={selectedDate}
              selectedTime={selectedTime}
              onSelectTime={setSelectedTime}
              onNextStep={handleNext}
              onBackStep={handleBack}
            />
          )}

          {step === 3 && (
            <>
              <FinalClientForm />
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "2rem",
                }}
              >
                <button
                  onClick={handleBack}
                  style={{
                    padding: "0.75rem 1.5rem",
                    borderRadius: "12px",
                    border: "2px solid #043222",
                    backgroundColor: "#F6E9D9",
                    color: "#043222",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                >
                  Back
                </button>
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Appointment;
