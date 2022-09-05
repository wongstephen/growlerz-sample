import React from "react";
import "./PageTitle.css";
export default function PageTitle({ title, subtitle }) {
  return (
    <div>
      <h1 className="page-title">{title}</h1>
      <h2 className="page-subtitle">{subtitle}</h2>
    </div>
  );
}
