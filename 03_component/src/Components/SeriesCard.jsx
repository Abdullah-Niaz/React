// SeriesCard.jsx
import React from "react";
import "./Series.css";

const SeriesCard = ({ props }) => {
  const { id, img_url, name, rating, description, genre, cast, watch_url } =
    props;

  return (
    <div className="mainContainer" key={id}>
      <div className="imageCard">
        <img src={img_url} alt={name} />
      </div>
      <div className="contentCard">
        <h2>{name}</h2>
        <h3>
          <b>Rating:</b>{" "}
          <span
            style={{
              color: rating >= 8 ? "green" : "red",
              fontWeight: "bold",
            }}
          >
            {" "}
            {rating}
          </span>
        </h3>
        <p>
          <b>Summary:</b> {description}
        </p>
        <p>
          <b>Genre:</b> {genre}
        </p>
        <p>
          <b>Cast:</b> {cast}
        </p>
        <a href={watch_url} target="_blank" rel="noreferrer">
          <button style={{ backgroundColor: rating >= 8 ? "green" : "red" }}>
            Watch Now
          </button>
        </a>
      </div>
    </div>
  );
};

export default SeriesCard;
