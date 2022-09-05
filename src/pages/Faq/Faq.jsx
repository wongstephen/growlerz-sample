import React from "react";
import faqs from "../../data/faq.json";
import PageTitle from "../../components/PageTitle/PageTitle";

export default function Faq() {
  return (
    <div className="page-container">
      <div className="parkrules-container ">
        <PageTitle title="Growlers" subtitle="FREQUENTLY ASKED QUESTIONS" />
        {faqs.faqs.map((faq) => (
          <div key={faq.title}>
            <h2>{faq.title}</h2>
            <p className="parkrules">{faq.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
