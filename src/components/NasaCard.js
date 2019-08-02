import React, { useState, useEffect } from "react";
import axios from "axios";
import NasaPics from "./NasaPics";

function NasaCard() {
  const [nasaData, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=r4VDak3cdRd08LcBUSTyIPtq4BW1YTXUyKEPMjMy&date=2012-03-14"
      )
      .then(response => {
        console.log(response.data);
        setData(response.data);
      })

      .catch(error => {
        console.log("error: There was an error while getting data");
      });
    console.log(nasaData);
  }, [nasaData]);

  return (
    <div className="cardContainer">
      <h2>This is for the img</h2>
      <NasaPics
        title={nasaData.title}
        date={nasaData.date}
        copyright={nasaData.copyright}
        explanation={nasaData.explanation}
      />
    </div>
  );
}

export default NasaCard;
