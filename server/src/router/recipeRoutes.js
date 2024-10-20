import { Router } from "express";
import { getRecipes } from "../controllers/recipeController.js";
import { planners } from "../controllers/plannerController.js"; // Adjust path as necessary
import { plannersearch } from "../controllers/plannerController.js";
import { getPlaces } from "../controllers/placeController.js";

const router = Router();
router.get("/", getPlaces);
// Route für Rezeptsuche
router.get("/recipes", getRecipes);
// Route für GooglePlate
router.get("/places", getPlaces);
// Route für Planner
router.get("/", planners);
router.post("/", plannersearch);

export default router;
