import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <>
      <div  className="tc bg-light-green dib br3 pa3 ma2 bw2 shadow-5 grow">
        <img
          src={`https://robohash.org/${props.id}?150x150`}
          alt="dp"
          className="robotDp"
        />
          <h2>{props.name}</h2>
          <p>{props.email}</p>
        </div>
    </>
  );
};

export default Card;
