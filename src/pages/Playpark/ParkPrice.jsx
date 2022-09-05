import React from "react";

export default function ParkPrice(props) {
  if (props.dog === "one") {
    return (
      <div className="dog-price">
        <h3>One Dog</h3>
        <p className="price">
          <span className="currency">$</span>
          {props.cost}
        </p>
      </div>
    );
  }
  if (props.dog === "two") {
    return (
      <div className="dog-price">
        <h3>
          Two Dogs* <br />
        </h3>
        <p className="price">
          <span className="currency">$</span>
          {props.cost}
        </p>
        <p className="disclaimer">*Of the same family</p>
      </div>
    );
  }
}
