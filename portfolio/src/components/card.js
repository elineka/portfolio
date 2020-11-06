import React from "react";

const Card = ({ id, url, name, about, imgSrc }) => {
  return (
    <li key={id} className="card">
      <a href={url}>
        <div className="img-container">
          <img src={imgSrc} alt={name} />
        </div>
        <div className="details">
          <h2>{name}</h2>
          <p>{about}</p>
          <span>{id}</span>
        </div>
      </a>
    </li>
  );
};

export default Card;
