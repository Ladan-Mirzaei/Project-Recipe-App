import { Router } from "express";
import {
  getAllPlanners,
  plannersearch,
} from "../controllers/plannerController.js";

const plannerRouter = Router();
plannerRouter.get("/", getAllPlanners); // Get all planners
plannerRouter.post("/", plannersearch); // Add a new planner

export default router;
