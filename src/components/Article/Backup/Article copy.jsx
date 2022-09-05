import React from "react";
import "./ArticleAlt.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Products({ title, image, text, link, textBtn }) {
  return (
    <div className="product-container">
      <div className="product-img-container">
        <img src={image} alt="Play Park" />
      </div>
      <div className="article-desc-container">
        <h2 className="product-title">{title}</h2>
        <p className="product-text">{text}</p>
        <Link
          to={`/${link}`}
          style={{ textDecoration: "none" }}
          className="article"
        >
          <Button variant="outlined" className="article">
            {textBtn}
          </Button>
        </Link>
      </div>
    </div>
  );
}
