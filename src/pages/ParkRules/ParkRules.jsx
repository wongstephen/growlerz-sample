import React from "react";
import "./ParkRules.css";
import rulesData from "../../data/parkrules.json";
import PageTitle from "../../components/PageTitle/PageTitle";

export default function ParkRules() {
  return (
    <div className="page-container">
      <div className="parkrules-container ">
        <PageTitle title="Growlers" subtitle="Park Rules" />
        {rulesData.parkrules.map((rule) => (
          <div key={rule.title}>
            <h2>{rule.title}</h2>
            <p className="parkrules">{rule.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
