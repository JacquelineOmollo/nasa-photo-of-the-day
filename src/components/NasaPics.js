import React from "react";

const NasaPics = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.date}</p>
      <p>{props.copyright}</p>
      <p>{props.explanation}</p>
      <img className="photo" src={props.img} alt="" />
    </div>
  );
};

export default NasaPics;
