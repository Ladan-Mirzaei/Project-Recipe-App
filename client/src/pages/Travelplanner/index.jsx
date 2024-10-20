import { useState } from "react";
import "./planner.css";
import { useNavigate } from "react-router-dom";

function Travelplanner() {
  const [formData, setFormData] = useState({
    destination: "",
    description: "",
    startDate: "",
    endDate: "",
    hotelName: "",
    address: "",
    duration: "",
    activities: "",
  });
  const navigate = useNavigate();
  async function planner() {
    const response = await fetch("http://localhost:3002/plannersearch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    console.log(formData);
    if (!response.ok) {
      console.warn("Response is not OK!");
      return;
    } else {
      // Router Hinzufügen  Plannes List ??? ist das so richtig
      navigate("/planner", { state: formData });
    }
  }
  const handleOnSubmit = (e) => {
    e.preventDefault();

    planner();
  };

  return (
    <>
      <div className="containerLogin">
        <h2>The Complete Travel Planner</h2>
        <form onSubmit={handleOnSubmit}>
          <div className="form-section">
            <label htmlFor="destination">Reiseziel:</label>
            <input
              type="text"
              id="destination"
              name="name"
              placeholder="Land oder Stadt."
              value={formData.destination}
              onChange={(e) =>
                setFormData({ ...formData, destination: e.target.value })
              }
              required
            />
          </div>
          <div className="form-section">
            <label htmlFor="description">Beschreibung:</label>
            <textarea
              id="description"
              name="description"
              rows="4"
              placeholder="Kurze Beschreibung der Reise."
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              required
            />
          </div>

          <div className="form-section">
            <label htmlFor="start-date">Start Reisedatum:</label>
            <input
              type="date"
              id="start-date"
              name="startDate"
              value={formData.startDate}
              onChange={(e) =>
                setFormData({ ...formData, startDate: e.target.value })
              }
              required
            />
            <label htmlFor="end-date">End Reisedatum:</label>
            <input
              type="date"
              id="end-date"
              name="endDate"
              value={formData.endDate}
              onChange={(e) =>
                setFormData({ ...formData, endDate: e.target.value })
              }
              required
            />
          </div>
          <div className="form-section">
            <label htmlFor="accommodation">Unterkunft:</label>
            <input
              type="text"
              id="hotel-name"
              name="hotelName"
              placeholder="Hotel Name"
              value={formData.hotelName}
              onChange={(e) =>
                setFormData({ ...formData, hotelName: e.target.value })
              }
              required
            />
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Adress"
              value={formData.address}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
            />
            <input
              type="text"
              id="duration"
              name="duration"
              placeholder="Dauer des Aufenthalts(nur INT)"
              value={formData.duration}
              onChange={(e) =>
                setFormData({ ...formData, duration: e.target.value })
              }
              required
            />
          </div>
          <div className="form-section">
            <label htmlFor="activities">Aktivitäten:</label>
            <textarea
              id="activities"
              name="activities"
              rows="4"
              placeholder="Liste Aktivitäten mit Daten und Beschreibungen."
              value={formData.activities}
              onChange={(e) =>
                setFormData({ ...formData, activities: e.target.value })
              }
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Travelplanner;
