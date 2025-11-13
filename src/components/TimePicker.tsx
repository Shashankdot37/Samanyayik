import React from "react";

interface TimePickerProps {
  selectedDate: Date;
  selectedTime: string | null;
  onSelectTime: (time: string) => void;
  onNextStep: () => void;
  onBackStep: () => void;
}

const TimePicker: React.FC<TimePickerProps> = ({
  selectedDate,
  selectedTime,
  onSelectTime,
  onNextStep,
  onBackStep,
}) => {
  // Define time slots with 1-hour gaps, skipping 1-2 PM for lunch
  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
  ];

  return (
    <section
      style={{
        width: "100%",
        maxWidth: "600px",
        margin: "0 auto",
        padding: "2rem 1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
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
        Choose a Time Slot
      </h2>

      <p
        style={{
          color: "#043222",
          marginBottom: "1.5rem",
          textAlign: "center",
        }}
      >
        Selected Date:{" "}
        <strong>{selectedDate.toLocaleDateString("en-US", { dateStyle: "full" })}</strong>
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
          gap: "1rem",
          width: "100%",
        }}
      >
        {timeSlots.map((slot) => (
          <button
            key={slot}
            onClick={() => onSelectTime(slot)}
            style={{
              padding: "0.75rem 1rem",
              borderRadius: "15px",
              border: selectedTime === slot ? "2px solid #D56B4B" : "2px solid #043222",
              backgroundColor: selectedTime === slot ? "#D56B4B" : "#F6E9D9",
              color: selectedTime === slot ? "#FFEEAD" : "#043222",
              fontWeight: 500,
              cursor: "pointer",
              transition: "all 0.3s ease",
              textAlign: "center",
            }}
            aria-pressed={selectedTime === slot}
            aria-label={`Select ${slot} as your appointment time`}
          >
            {slot}
          </button>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          marginTop: "2rem",
          gap: "1rem",
        }}
      >
        <button
          onClick={onBackStep}
          style={{
            flex: 1,
            padding: "0.75rem 1rem",
            borderRadius: "15px",
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

        <button
          onClick={onNextStep}
          disabled={!selectedTime}
          style={{
            flex: 1,
            padding: "0.75rem 1rem",
            borderRadius: "15px",
            border: "2px solid #D56B4B",
            backgroundColor: selectedTime ? "#D56B4B" : "#D56B4B80",
            color: "#FFEEAD",
            fontWeight: 600,
            cursor: selectedTime ? "pointer" : "not-allowed",
            transition: "all 0.3s ease",
          }}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default TimePicker;
