import React from "react";
import hours from "../../data/hours.json";

export default function ParkHours() {
  return (
    <p className="hours">
      <span className="hours-bold">PLAY PARK HOURS (21+ ONLY)</span> <br />
      Mon - Fri {hours.playpark.weekday} <br />
      Sat {hours.playpark.sat}, Sun {hours.playpark.sun}
    </p>
  );
}
