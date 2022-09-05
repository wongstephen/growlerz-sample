import React from "react";
import "./Article.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Products({ title, image, text, link, textBtn }) {
  return (
    <div className="article-container">
      <div className="article-img-container">
        <img src={image} alt="Play Park" />
        <div className="article-desc-container">
          <h2 className="article-title">{title}</h2>
          <p className="article-text">{text}</p>
          {textBtn !== "" && (
            <Link
              to={`/${link}`}
              style={{ textDecoration: "none" }}
              className="article"
            >
              <Button variant="outlined" className="article">
                {textBtn}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
