import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
export default function ParkRules() {
  return (
    <div className="park-rules">
      <p className="park-rules-desc">
        <strong>
          Patrons using the play park will be responsible for monitoring their
          dog’s behavior and for cleaning up after their dog(s). Any aggressive
          behavior or fighting will not be tolerated.{" "}
        </strong>
        <br />
        <br />
        First offense: all involved dogs will be asked to be put on a leash.
        <br />
        <br />
        Second offense: dogs will be asked to leave that day. Third offense,
        dogs will no longer be allowed to access services.
        <br />
        <br />
        Payments for services will be forfeited (at a pro-rated rate as
        applicable). <br />
      </p>
      <div className="park-rules-container">
        Check out our full list of play park rules
        <br />
        <Link
          to="/parkrules"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <Button variant="outlined" className="getStarted park-rules-btn">
            Play Park Rules
          </Button>
        </Link>
      </div>
    </div>
  );
}
