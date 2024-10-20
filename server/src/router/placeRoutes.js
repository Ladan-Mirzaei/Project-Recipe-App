import { Router } from "express";
import { getPlaces } from "../controllers/placeController.js";

const router = Router();
router.get("/", getPlaces);

export default router;
