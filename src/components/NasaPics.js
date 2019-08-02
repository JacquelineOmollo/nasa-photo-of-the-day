import React from "react";

const NasaPics = props => {
  return (
    <div>
      <img className="photo" src={props.img} alt="" />
      <h1>{props.title}</h1>
      <p>{props.date}</p>
      <p>{props.explanation}</p>
    </div>
  );
};

export default NasaPics;
