import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface Step1DatePickerProps {
  selectedDate: Date | null;
  onSelectDate: (date: Date | null) => void;
}

const Step1DatePicker: React.FC<Step1DatePickerProps> = ({
  selectedDate,
  onSelectDate,
}) => {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "500px",
        margin: "0 auto",
        padding: "2rem",
        backgroundColor: "rgba(16, 59, 43, 0.85)",
        borderRadius: "2rem",
        color: "#FFEEAD",
        textAlign: "center",
        boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
        fontFamily: "EB Garamond, serif",
      }}
    >
      <h2
        style={{
          fontWeight: 700,
          fontSize: "2rem",
          marginBottom: "1.5rem",
        }}
      >
        Choose Your Appointment Date
      </h2>

      <DatePicker
        selected={selectedDate}
        onChange={(date) => onSelectDate(date)}
        inline
        minDate={new Date()}
        dayClassName={(date) => {
          const day = date.getDay();
          // Weekends styling
          return day === 0 || day === 6 ? "weekend" : "";
        }}
        renderCustomHeader={({
          monthDate,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <div
            style={{
              marginBottom: "1rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              color: "#FFEEAD",
            }}
          >
            <button
              onClick={decreaseMonth}
              disabled={prevMonthButtonDisabled}
              style={{
                backgroundColor:"#adadaa5a",
                color: "#FFEEAD",
                fontSize: "1.5rem",
                cursor: "pointer",
                marginLeft:"2rem",
                borderWidth:"2px",
                borderRadius:"100%",
                padding:"0.7rem",
              }}
              aria-label="Previous Month"
            >
              &#8249;
            </button>
            <span style={{ fontWeight: "700", fontSize: "1.25rem" }}>
              {monthDate.toLocaleString("default", { month: "long", year: "numeric" })}
            </span>
            <button
              onClick={increaseMonth}
              disabled={nextMonthButtonDisabled}
              style={{
                backgroundColor:"#adadaa5a",
                color: "#FFEEAD",
                fontSize: "1.5rem",
                cursor: "pointer",
                marginRight:"2rem",
                borderWidth:"2px",
                borderRadius:"100%",
                padding:"0.7rem",
              }}
              aria-label="Next Month"
            >
              &#8250;
            </button>
          </div>
        )}
      />

      <p
        style={{
          marginTop: "1rem",
          fontSize: "0.875rem",
          color: "#FFEEAD",
        }}
      >
        Select a date to see available time slots.
      </p>

      {/* Inline Styling for Date Cells */}
      <style>{`
        .react-datepicker__day {
          width: 2.5rem !important;
          height: 2.5rem !important;
          line-height: 2.5rem !important;
          margin: 0.15rem !important;
          border-radius: 50% !important;
          color: #043222 !important;
          background-color: #FFEEAD !important;
          cursor: pointer;
          font-weight: 500;
          transition: transform 0.2s;
        }
        .react-datepicker__day:hover {
          transform: scale(1.2);
          background-color: #D56B4B !important;
          color: #FFEEAD !important;
        }
        .react-datepicker__day--selected {
          background-color: #043222 !important;
          color: #FFEEAD !important;
        }
        .react-datepicker__day.weekend {
          color: #D56B4B !important;
          font-weight: 700;
        }
        .react-datepicker__header {
          background-color: rgba(16, 59, 43, 0.85) !important;
          border: none !important;
        }
        .react-datepicker__current-month {
          color: #FFEEAD !important;
          font-weight: 700;
        }
        .react-datepicker__day-name {
          color: #FFEEAD !important;
          font-weight: 600;
        }
        .react-datepicker__navigation-icon::before {
          border-color: #FFEEAD !important;
        }
      `}</style>
    </div>
  );
};

export default Step1DatePicker;
