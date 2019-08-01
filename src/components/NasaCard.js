import React, { useState, useEffect } from "react";
import axios from "axios";

function NasaCard() {
  const [nasaData, setData] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // setIsLoading(true);
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=r4VDak3cdRd08LcBUSTyIPtq4BW1YTXUyKEPMjMy&date=2012-03-14"
      )
      .then(response => {
        console.log(response);

        setData(response.nasaData.message);
        // setIsLoading(false);
      })

      .catch(error => {
        console.log("error: There was an error while getting data");
      });
    console.log(nasaData);
  }, [nasaData]);

  return (
    <div className="cardContainer">
      <h2>This is for the img</h2>
    </div>
  );
}
export default NasaCard;
