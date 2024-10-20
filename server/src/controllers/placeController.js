//Googleplace API
import fetch from "node-fetch";

const GOOGLE_PLACES_API_KEY = "DEIN_GOOGLE_PLACES_API_KEY";

export const getPlaces = async (req, res) => {
  const { location, radius } = req.query;

  if (!location || !radius) {
    return res
      .status(400)
      .json({ error: "Location und Radius sind erforderlich." });
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&radius=${radius}&key=${GOOGLE_PLACES_API_KEY}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `Fehler beim Abrufen von Google Places API: ${response.statusText}`
      );
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Fehler in /api/places:", error);
    res.status(500).json({ error: "Interner Serverfehler" });
  }
};
