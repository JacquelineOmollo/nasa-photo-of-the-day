import React, { useState, useEffect } from "react";
import axios from "axios";
import NasaPics from "./NasaPics";

const NasaCard = () => {
  const [nasaData, setData] = useState([]);

  useEffect(() => {
    setData([]);
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=KVfXAM2KC4YeoLSgi7nXZLNW1e7bWAwgTduk4ocK"
      )

      .then(response => {
        console.log(response.data);
        setData(response.data);
      })

      .catch(err => console.log(err, "Errors where found"));
  }, []);

  console.log("nasaData");
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
};

export default NasaCard;
