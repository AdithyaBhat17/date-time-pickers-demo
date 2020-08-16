import React from "react";
import moment from "moment";
import { TimePicker } from "@atlaskit/datetime-picker";

export default function TimePickers({ dateString }) {
  const defaultValue = moment().get("h") + ":" + moment().get("m");

  const onTimeChange = (time) => {
    console.log(time);
  };

  return (
    <div>
      <label>{dateString}</label>
      <TimePicker
        css={{
          width: "100%"
        }}
        timeIsEditable
        onChange={onTimeChange}
        defaultValue={defaultValue}
        selectProps={{ classNamePrefix: "timepicker-select" }}
      />
    </div>
  );
}
