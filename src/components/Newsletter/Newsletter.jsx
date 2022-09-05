import React from "react";
import "./Newsletter.css";
import { TextField, Button } from "@mui/material";

export default function Newsletter() {
  return (
    <div className="newsletter-container">
      <h2>Join the Growlerz Newsletter</h2>
      <form className="newsletter-form">
        <label htmlFor="newsletter-input">Email</label>
        <TextField
          id="newsletter-input"
          label="Email"
          variant="outlined"
          size="large"
        />
        <Button type="submit" variant="text" className="newsletter-btn">
          Submit
        </Button>
      </form>
    </div>
  );
}
