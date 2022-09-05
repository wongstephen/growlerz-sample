import "./Header.css";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import React from "react";

export default function Header() {
  return (
    <header>
      <div className="header__div">
        <Link to="/">
          <img
            src={require("../../assets/highreslogo.webp")}
            alt="logo"
            className="header__logo"
          />
        </Link>
        <NavBar />
      </div>
    </header>
  );
}
