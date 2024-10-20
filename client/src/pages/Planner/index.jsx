import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Planner() {
  const location = useLocation();
  const { state } = location;
  const [planners, setPlanners] = useState([]);

  useEffect(() => {
    const fetchPlanners = async () => {
      try {
        const response = await fetch("http://localhost:3002/planners");
        if (!response.ok) {
          throw new Error("Failed to fetch planners");
        }
        const data = await response.json();
        setPlanners(data);
      } catch (error) {
        console.error("Error fetching planners:", error);
      }
    };

    fetchPlanners();
  }, []);
  console.log(planners);
  return (
    <div className="container">
      <h1>Your Travel Plans</h1>

      {/* alle data von Travelplanner-von Form */}
      {/* {state && (
        <>
          <h2>Newly Submitted Plan:</h2>
          <h3>Destination: {state.destination}</h3>
          <p>Description: {state.description}</p>
          <p>Start Date: {state.startDate}</p>
          <p>End Date: {state.endDate}</p>
          <h4>Accommodation:</h4>
          <p>Hotel Name: {state.hotelName}</p>
          <p>Address: {state.address}</p>
          <p>Duration of Stay: {state.duration}</p>
          <h4>Activities:</h4>
          <p>{state.activities}</p>
        </>
      )} */}

      {/*  all travels von Database */}
      <h2>All Travel Plans:</h2>
      {planners.length > 0 ? (
        planners.map((plan, index) => (
          <div key={index} className="travel-plan">
            <h3>Destination: {plan.destination}</h3>
            <p>Description: {plan.description}</p>
            <p>Start Date: {plan.startDate}</p>
            <p>End Date: {plan.endDate}</p>
            <h4>Accommodation:</h4>
            <p>Hotel Name: {plan.hotelName}</p>
            <p>Address: {plan.address}</p>
            <p>Duration of Stay: {plan.duration}</p>
            <h4>Activities:</h4>
            <p>{plan.activities}</p>
            <hr />
          </div>
        ))
      ) : (
        <p>keiene Reise gefunden</p>
      )}
    </div>
  );
}

export default Planner;
