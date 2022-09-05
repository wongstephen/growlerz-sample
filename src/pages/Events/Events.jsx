import PageTitle from "../../components/PageTitle/PageTitle";
import placeholderImg from "../../assets/trivia.jpeg";
import { gql, GraphQLClient } from "graphql-request";
import React, { useEffect, useState } from "react";
import "./Events.css";

export default function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const getFetch = async () => {
    const endpoint =
      "https://api-us-west-2.hygraph.com/v2/cl7kpvo4y0qxu01ukcwwqgjnb/master";
    const graphCms = new GraphQLClient(endpoint, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_GRAPHQL}`,
      },
    });
    const query = gql`
      query getPosts {
        posts {
          title
          datePublished
          content {
            html
          }
          slug
          id
          author {
            id
          }
          photo {
            id
            url
          }
        }
      }
    `;

    try {
      const { posts } = await graphCms.request(query);
      await setEvents(posts);
      // setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // getFetch();
  }, []);

  // useEffect(() => {
  //   console.log(events);
  // }, [events]);

  return (
    <div className="page-container">
      <PageTitle title="Growlers" subtitle="events" />
      {loading ? (
        <img
          src={require("../../assets/3-dots-fade-white-36.svg")}
          alt="loading"
          style={{
            margin: "0 auto",
            display: "block",
          }}
        />
      ) : (
        <div className="event-container">
          {events.map((event) => (
            <div className="event-card" key={event.title}>
              <div className="event-image">
                <img
                  src={
                    event.photo.url !== null ? event.photo.url : placeholderImg
                  }
                  alt={event.title}
                  className="event-image"
                ></img>
              </div>
              <h2 className="event-card">{event.title}</h2>
              <p className="event-card date">{event.datePublished}</p>
              <p
                className="event-card content"
                dangerouslySetInnerHTML={{ __html: event.content.html }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
