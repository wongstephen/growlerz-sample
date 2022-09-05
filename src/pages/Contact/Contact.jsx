import React from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import heroImg from "../../assets/map.jpg";
import Hours from "../../components/Hours/Hours";
export default function Contact() {
  return (
    <div className="page-container">
      <PageTitle title="Growlerz" subtitle="About & Contact" />
      <p>
        <Hours />
      </p>
      <div className="hero-split">
        <div className="daycare-img">
          <img src={heroImg} alt="Hero Daycare" className="daycareImg" />
        </div>
        <div className="daycare-hero-text">
          <h2></h2>
          <h3>Find us at: </h3>
          <p>
            5269 RAINIER AVE. S<br />
            SEATTLE, WA 98118
          </p>
          <br />
          <h3>We're also available by: </h3>
          <p>
            email: growlerzseattle@gmail.com
            <br />
            phone:(206) 459-2726
          </p>
        </div>
      </div>
    </div>
  );
}
