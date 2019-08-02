import React, { useState, useEffect } from "react";
import axios from "axios";
import NasaPics from "./NasaPics";

function NasaCard() {
  const [nasaData, setData] = useState("");

  useEffect(() => {
    axios.get(
      "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"

        .then(response => {
          console.log(response.data);
          setData(response.data);
          // console.log(response);
        })

        .catch(err => console.log(err))
    );

    console.log(nasaData);
  }, [nasaData]);

  return (
    <div className="cardContainer">
      <NasaPics
        title={nasaData.title}
        date={nasaData.date}
        copyright={nasaData.copyright}
        explanation={nasaData.explanation}
        img={nasaData.url}
      />
    </div>
  );
}

export default NasaCard;
