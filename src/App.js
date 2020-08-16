import React, { useState, useMemo } from "react";
// import moment from "moment";
import "./styles.css";
import DayPicker from "./DayPicker";
import TimePickers from "./TimePickers";

export default function App() {
  const [range, setRange] = useState({
    startDate: null,
    endDate: null
  });

  const onDatesChange = ({ startDate, endDate }) => {
    console.log(startDate, endDate);
    setRange({ startDate, endDate });
  };

  const startDateString = range.startDate
    ? range.startDate.format("DD MMM, YYYY")
    : "";
  const endDateString = range.endDate
    ? range.endDate.format("DD MMM, YYYY")
    : "";

  return (
    <div className="App">
      <DayPicker
        startDate={range.startDate}
        endDate={range.endDate}
        onDatesChange={onDatesChange}
      />
      <br />
      <div className="flex justify-between">
        {range.startDate ? <TimePickers dateString={startDateString} /> : null}
        {range.endDate ? <TimePickers dateString={endDateString} /> : null}
      </div>
    </div>
  );
}
