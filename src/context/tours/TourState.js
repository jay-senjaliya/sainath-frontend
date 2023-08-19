import TourContext from "./TourContext";
import React, { useState } from "react";

const TourState = (props) => {
  const [tours, setTours] = useState([]);
  const [tour, setTour] = useState();
  const BASE_URL = "https://sainathbackend.onrender.com";

  // console.log(tours);

  const getAllTours = async () => {
    const response = await fetch(`${BASE_URL}/api/v1/tour/`, {
      method: "GET",
      headers: {
        "Content-Type": " application/json",
      },
    });
    const json = await response.json();
    // console.log(json);
    setTours(json.tours);
    // console.log(tours)
  };

  const getTourByName = (tourName) => {
    // console.log(tours.length);
    for (let i = 0; i < tours.length; i++) {
      if (tours[i].name === tourName) {
        setTour(tours[i]);
        // console.log(tour);
        break;
      }
    }
  };

  return (
    <TourContext.Provider value={{ tours, getAllTours, tour, getTourByName }}>
      {props.children}
    </TourContext.Provider>
  );
};

export default TourState;
