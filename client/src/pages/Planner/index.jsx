import React from "react";
import { useLocation } from "react-router-dom";

function ResultPage() {
  const location = useLocation();
  const { state } = location;

  return (
    <div className="container">
      <h1>Your Travel Plan</h1>
      <h2>Destination: {state.destination}</h2>
      <p>Description: {state.description}</p>
      <p>Start Date: {state.startDate}</p>
      <p>End Date: {state.endDate}</p>
      <h3>Accommodation:</h3>
      <p>Hotel Name: {state.hotelName}</p>
      <p>Address: {state.address}</p>
      <p>Duration of Stay: {state.duration}</p>
      <h3>Activities:</h3>
      <p>{state.activities}</p>
    </div>
  );
}

export default ResultPage;
