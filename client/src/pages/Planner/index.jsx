import React, { useEffect, useState } from "react";

function PlannerList() {
  const [planners, setPlanners] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPlanners() {
      try {
        const response = await fetch("http://localhost:3002/planners");
        if (!response.ok) {
          throw new Error("Failed to fetch planners");
        }
        const data = await response.json();
        setPlanners(data);
      } catch (err) {
        setError(err.message);
        console.error(err);
      }
    }

    fetchPlanners();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Planners List</h1>
      <ul>
        {planners.map((planner, index) => (
          <li key={index}>
            <h2>Destination: {planner.destination}</h2>
            <p>Description: {planner.description}</p>
            <p>Start Date: {planner.startDate}</p>
            <p>End Date: {planner.endDate}</p>
            <p>Hotel Name: {planner.hotelName}</p>
            <p>Address: {planner.address}</p>
            <p>Duration: {planner.duration} days</p>
            <p>Activities: {planner.activities}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlannerList;
