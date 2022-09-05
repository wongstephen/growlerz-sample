import { React, useState, useEffect } from "react";
import "./Playpark.css";
import PageTitle from "../../components/PageTitle/PageTitle.jsx";
import ParkHours from "../../components/Hours/ParkHours";
import heroImg from "../../assets/291948834_822416192465691_3840088884492033897_n.jpg";
import Price from "../../components/Price/Price";
import { Button, Alert } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ParkRules from "./ParkRules";

export default function Playpark() {
  const key = process.env.REACT_APP_WEATHER_API;
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(true);

  const getWeather = async () => {
    try {
      const res = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${key}&q=98118&aqi=no`
      );
      const data = await res.json();
      setWeather(data);
      setLoading(false);
    } catch (error) {
      console.log("Error: " + error);
    }
  };

  useEffect(() => {
    // getWeather();
  }, []);

  return (
    <div className="page-container">
      <PageTitle title="Growlerz" subtitle="Play Park" />
      <ParkHours />
      {!loading && (
        <div className="park-weather">
          Current Park Conditions:
          {weather.current.condition.text} {weather.current.temp_f}
          &deg;!
          <img
            src={weather.current.condition.icon}
            alt="Weather Icon"
          ></img>{" "}
        </div>
      )}
      <div className="hero-split">
        <div className="daycare-img">
          <img src={heroImg} alt="Hero Play Park" className="daycareImg" />
        </div>
        <div className="daycare-hero-text">
          <h2>
            Our beautiful off leash play park is designed with both your dog and
            you in mind!
          </h2>
          <p>
            7,000 sq. ft. outdoor space provides your pup room to play while you
            enjoy a drink in the sun or under one of our covered areas. Our
            smaller indoor space includes our taproom and plenty of space for
            you and your dog to hang out.
          </p>
        </div>
      </div>

      <div className="alert-container">
        <Alert severity="info" className="alert">
          <p className="alert">
            Vaccination records ( Rabies, Bordetella & DHPP mandatory) must be
            submitted and approved before entry to daycare or use of play park.
            All dogs should be on flea and tick preventative and be wearing a
            quick release collar. No prong or chain collars are allowed. <br />
            <br />
            ​All dogs over 7 months of age must be spayed / neutered. Please set
            up a profile for your dog using the link below and include his/her
            vaccination records. You will be notified once approved. There is no
            cost to set up a profile for your dog.
            <br />
            <br />
            <Button variant="text">
              Submit Info <ArrowRightAltIcon />
            </Button>
          </p>
        </Alert>
      </div>
      <ParkRules />
      <div className="product-pricing">
        <Price
          title="Single Admission"
          dog1={12}
          dog2={6}
          dog2s=""
          btntext=""
          btnlink=""
        />
        <Price
          title="11 Admissions Punchcard"
          dog1={100}
          dog2={70}
          dog2s="/add'l"
          btntext="Purchase"
          btnlink="https://growlerz.gingrapp.com/front_end/"
        />
        <Price
          title="Monthly Membership"
          dog1={49}
          dog1s="/mo"
          dog2={20}
          dog2s="/mo"
          btntext="Purchase"
          btnlink="https://growlerz.gingrapp.com/front_end/"
        />
        <Price
          title="Yearly Membership"
          dog1={539}
          dog1s="/yr"
          dog2={220}
          dog2s="/yr"
          btntext="Purchase"
          btnlink="https://growlerz.gingrapp.com/front_end/"
        />
      </div>
    </div>
  );
}
