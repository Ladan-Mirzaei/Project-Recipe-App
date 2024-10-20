//spoonacular API
import fetch from "node-fetch";

const SPOONACULAR_API_KEY = "3d29bcb6d01c4bc1969d0d0b85cd5902";

export const getRecipes = async (req, res) => {
  const { ingredients } = req.query;

  if (!ingredients) {
    return res.status(400).json({ error: "Bitte geben Sie Zutaten an." });
  }

  try {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&number=5&apiKey=${SPOONACULAR_API_KEY}`
    );
    if (!response.ok) {
      throw new Error("Fehler beim Abrufen der Rezepte.");
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Fehler bei der Rezepterfassung:", error);
    res.status(500).json({ error: "Fehler beim Abrufen der Rezepte." });
  }
};
