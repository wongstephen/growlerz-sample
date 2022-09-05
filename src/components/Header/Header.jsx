import React from "react";
import NavBar from "./NavBar";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../assets/highreslogo.webp";

export default function Header() {
  return (
    <header>
      <div className="header__div">
        <Link to="/">
          <img src={logo} alt="logo" className="header__logo" />
        </Link>
        <NavBar />
      </div>
    </header>
  );
}
