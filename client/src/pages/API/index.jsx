// import { useEffect, useState } from "react";

// // React-Komponente
// function API() {
//   const [flights, setFlights] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const fetchFlights = async () => {
//     setLoading(true);
//     setError("");
//     const origin = "FRA"; // Beispiel: Frankfurt
//     const destination = "LHR"; // Beispiel: London Heathrow
//     const departureDate = "2024-12-01"; // Beispiel: Datum

//     try {
//       const response = await fetch(
//         `/api/search-flights?origin=${origin}&destination=${destination}&departureDate=${departureDate}`
//       );
//       const data = await response.json();
//       if (response.ok) {
//         setFlights(data);
//       } else {
//         setError(data.error || "Unbekannter Fehler");
//       }
//     } catch (error) {
//       setError("Fehler beim Abrufen der Flugdaten.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchFlights();
//   }, []);

//   return (
//     <div className="App">
//       <h1>Flugsuche</h1>
//       {loading ? (
//         <p>Lädt Flüge...</p>
//       ) : error ? (
//         <p style={{ color: "red" }}>{error}</p>
//       ) : (
//         <ul>
//           {flights.map((flight, index) => (
//             <li key={index}>
//               {flight}{" "}
//               {/* Hier sollten die spezifischen Flugdaten angezeigt werden */}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default API;
// PlacesSearch.jsx

// ----------------------------------Google------------------------------------
// import { useState } from "react";

// const API = () => {
//   const [location, setLocation] = useState("");
//   const [radius, setRadius] = useState("");
//   const [places, setPlaces] = useState([]);
//   const [error, setError] = useState("");

//   const fetchPlaces = async () => {
//     const location = "37.7749,-122.4194"; // Beispiel für eine Standortkoordinate
//     const radius = "1500"; // Beispiel für den Radius

//     try {
//       const response = await fetch(
//         `http://localhost:3001/api/places?location=${location}&radius=${radius}`
//       );
//       console.log("Location:", location);
//       console.log("Radius:", radius);

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const data = await response.json();
//       console.log(data);
//     } catch (error) {
//       console.error("Fetch error:", error);
//       setError("Fehler beim Abrufen der Orte.");
//     }
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     fetchPlaces();
//   };

//   return (
//     <div>
//       <h1>Suche nach Orten</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Standort (z.B. 37.7749,-122.4194)"
//           value={location}
//           onChange={(e) => setLocation(e.target.value)}
//           required
//         />
//         <input
//           type="number"
//           placeholder="Radius in Metern"
//           value={radius}
//           onChange={(e) => setRadius(e.target.value)}
//           required
//         />
//         <button type="submit">Suchen</button>
//       </form>
//       {error && <p>{error}</p>}
//       <ul>
//         {places.map((place) => (
//           <li key={place.place_id}>
//             {place.name} - {place.vicinity}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default API;
// ---------------------------------rezepz-------------------------
//spoonacular API
// RecipeSearch.jsx
import { useState } from "react";

function RecipeSearch() {
  const [ingredients, setIngredients] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState("");

  const fetchRecipes = async () => {
    try {
      const response = await fetch(
        `http://localhost:3002/api/recipes?ingredients=${ingredients}`
      );
      if (!response.ok) {
        throw new Error("Fehler beim Abrufen der Rezepte.");
      }
      const data = await response.json();
      setRecipes(data);
      setError("");
    } catch (err) {
      setError(err.message);
      setRecipes([]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchRecipes();
  };

  return (
    <div>
      <h2>Rezepte suchen</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Zutaten eingeben, z.B. tomaten, käse"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
        <button type="submit">Suche</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div>
        {recipes.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <img
              src={recipe.image}
              alt={recipe.title}
              style={{ width: "100px" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecipeSearch;
