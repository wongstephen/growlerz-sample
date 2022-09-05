import React from "react";
import "./Daycare.css";
import PageTitle from "../../components/PageTitle/PageTitle.jsx";
import DaycareHours from "../../components/Hours/DaycareHours";
import heroImg from "../../assets/292164134_603341337893015_7559827513983418038_n.jpg";
import Price from "../../components/Price/Price";

export default function Daycare() {
  return (
    <div className="page-container">
      <PageTitle title="Growlerz" subtitle="Daycare" />
      <DaycareHours />
      <div className="hero-split">
        <div className="daycare-img">
          <img src={heroImg} alt="Hero Daycare" className="daycareImg" />
        </div>
        <div className="daycare-hero-text">
          <h2>
            We all live busy lives and can't always be there for our dogs.
          </h2>
          <p>
            At Growlerz, we make sure your furchild is taken care of properly.
            All of our staff is thoroughly trained in Pet CPR/First Aid and
            excited to spend the day with your pup while you go to work or run
            errands.
            <br />
            <br />
            Your dog will be thoroughly exercised, played with, and feeling
            great when you come to pick them up!
          </p>
        </div>
      </div>
      <h2 className="product-pricing">Daycare Packages and Pricing</h2>
      <p className="product-pricing">
        Use can be non-consecutive days. Day Care bundles never expire. 5%
        Discount on Dog Daycare with any Play Park membership.
      </p>
      <div className="product-pricing">
        <Price
          title="Single Day"
          dog1={38}
          dog2={20}
          dog2s="/add'l"
          btntext="Purchase"
          btnlink="https://growlerz.gingrapp.com/front_end/"
        />
        <Price
          title="5 Days"
          dog1={180}
          dog2={85}
          dog2s="/add'l"
          btntext="Purchase"
          btnlink="https://growlerz.gingrapp.com/front_end/"
        />
        <Price
          title="10 Days"
          dog1={380}
          dog2={172.5}
          dog2s="/add'l"
          btntext="Purchase"
          btnlink="https://growlerz.gingrapp.com/front_end/"
        />
      </div>
    </div>
  );
}
