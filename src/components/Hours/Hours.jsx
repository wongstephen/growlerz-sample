import React from "react";
import "./Hours.css";
import ParkHours from "./ParkHours";

import DaycareHours from "./DaycareHours";

export default function Hours({ cName }) {
  return (
    <div className={`hours-container ${cName}`}>
      <ParkHours />
      <DaycareHours />
    </div>
  );
}
