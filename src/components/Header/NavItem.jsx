import React from "react";
import { Link } from "react-router-dom";

export default function NavItem(props) {
  function handleClick() {
    props.event(false);
  }

  return (
    <li className="nav__link">
      <Link to={props.link} onClick={handleClick}>
        {props.text}
      </Link>
    </li>
  );
}
