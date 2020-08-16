import React, { useState } from "react";
import "react-dates/initialize";
import { DayPickerRangeController } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

export default function DayPicker({ startDate, endDate, onDatesChange }) {
  const [focus, setFocus] = useState("startDate");

  const onFocusChange = (focusedInput) => {
    console.log(focusedInput);
    setFocus(!focusedInput ? "startDate" : focusedInput);
  };

  return (
    <div className="App">
      <DayPickerRangeController
        onDatesChange={onDatesChange}
        focusedInput={focus}
        onFocusChange={onFocusChange}
        endDate={endDate}
        startDate={startDate}
        numberOfMonths={1}
      />
    </div>
  );
}
