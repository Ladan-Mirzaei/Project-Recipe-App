import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Planner() {
  const [formData, setFormData] = useState([]);

  async function fetchPlanner() {
    try {
      const response = await fetch("http://localhost:3002/planner", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        console.warn("Response is not OK!");
        return;
      }
      const data = await response.json();

      setFormData(data);

      console.warn("Expected an array, but got:", data);
    } catch (error) {
      console.error("Error fetching planner data:", error);
    }
  }

  useEffect(() => {
    fetchPlanner();
  }, []);
  console.log("test", formData);
  return (
    <div className="counter">
      <h2>Users List</h2>
      {formData.length > 0 ? (
        formData.map(({ _id, destination }) => (
          <div key={_id}>{destination} isJahre alt!</div>
        ))
      ) : (
        <p>No destinations found.</p>
      )}
      <Link to="/travelplanner">Zurück</Link>
    </div>
  );
}

export default Planner;
