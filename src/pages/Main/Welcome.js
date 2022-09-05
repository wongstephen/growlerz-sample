import React, { useState } from "react";
import { useEffect } from "react";
import { gql, GraphQLClient } from "graphql-request";

const graphCms = new GraphQLClient(process.env.REACT_APP_GRAPHQL_URL, {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_GRAPHQL}`,
  },
});

export default function Welcome() {
  const [loading, setLoading] = useState(true);
  const [hours, setHours] = useState([]);

  useEffect(
    () =>
      async function () {
        try {
          const { storeHours } = await graphCms.request(gql`
            query {
              storeHours {
                title
                open
                close
              }
            }
          `);
          setHours(storeHours);
          setLoading(false);
        } catch (err) {
          console.log(err);
        }
      },
    []
  );

  return (
    <div className="welcome__container">
      <div>
        <img
          className="welcome__img"
          src={require("../../assets/fatcorgi.png")}
          alt="dog hero"
        />
      </div>
      <div>
        <h1 className="welcome__h1">Growlerz Seattle</h1>
        <h2 className="welcome__h2">
          DOGS. BEER. COMMUNITY. <br /> COLUMBIA CITY NEIGHBORHOOD | SEATTLE
        </h2>
        <div>
          {loading ? null : (
            <>
              <p>
                <strong>Daycare Hours</strong>
                <br />
                Mon - Fri: {hours[0].open} - {hours[0].close}
              </p>
              <p>
                <strong>Play Park Hours</strong>
                <br />
                Mon - Fri: {hours[0].open} - {hours[0].close}
                <br />
                Sat: {hours[1].open} - {hours[1].close} & Sun: {hours[2].open} -
                {hours[2].close}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
