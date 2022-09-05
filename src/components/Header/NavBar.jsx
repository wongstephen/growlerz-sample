import React, { useState } from "react";
import "./NavBar.css";
import { MenuRounded, CloseRounded } from "@mui/icons-material/";
import NavItem from "./NavItem";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  document.body.style.overflow = menuOpen ? "hidden" : "visible";
  return (
    <nav>
      <MenuRounded
        className="menu-action"
        onClick={() => setMenuOpen(true)}
        style={{ display: menuOpen ? "none" : "inline-block" }}
      />
      <CloseRounded
        className="menu-action"
        onClick={() => setMenuOpen(false)}
        style={{ display: menuOpen ? "inline-block" : "none" }}
      />
      <ul
        className={`navbar ${menuOpen ? "open" : "closed"} 
        navbar
        navbar_large`}
      >
        <NavItem text="Home" event={setMenuOpen} link={"/"} />
        <NavItem text="Play Park" event={setMenuOpen} link={"/playpark"} />
        <NavItem text="Day Care" event={setMenuOpen} link={"/daycare"} />
        <NavItem text="Events" event={setMenuOpen} link={"/events"} />
        <NavItem text="FAQ" event={setMenuOpen} link={"/faq"} />
        <NavItem text="Contact" event={setMenuOpen} link={"/contact"} />
        <li className="nav__link">
          <a
            href="https://growlerz.gingrapp.com/front_end/login/email"
            rel="noreferrer"
            target="_blank"
          >
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
}
