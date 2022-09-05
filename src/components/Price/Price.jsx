import React from "react";
import "./Price.css";
import { Button } from "@mui/material";
export default function Price({
  title,
  dog1,
  dog2,
  dog1s,
  dog2s,
  btntext,
  btnlink,
}) {
  return (
    <div className="price-card">
      <h2 className="price-card">{title}</h2>
      <h3 className="price-card">One Dog</h3>
      <p className="price-card">
        <span className="currency">$</span>
        {dog1}
        <span className="price-card tag">{dog1s}</span>
      </p>

      <h3 className="price-card">Additional Dog(s)*</h3>
      <p className="price-card">
        <span className="currency">$</span>
        {dog2}
        <span className="price-card tag">{dog2s}</span>{" "}
        <span className="price-card disclaimer">*Of the same family</span>
      </p>
      {btntext !== "" && (
        <Button className="price-card" variant="outlined">
          <a href={btnlink} rel="noreferrer" target="_blank">
            Purchase
          </a>
        </Button>
      )}
    </div>
  );
}
