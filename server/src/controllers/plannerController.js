import Planner from "../modules/Planner.js";
import db from "../util/db-connect.js";

//Planner
export const plannersearch = async (req, res) => {
  try {
    const data = req.body;
    const planner = new Planner(data);
    await planner.save();
    res.json({ success: true });
  } catch (error) {
    console.error("Fehler beim Abrufen der Planner:", error);
    res
      .status(500)
      .json({ success: false, message: "Fehler beim Abrufen der Planner" });
  }
};

export const planners = async (req, res) => {
  try {
    const result = await Planner.find({});
    res.json(result);
  } catch (error) {
    console.error("Fehler beim Abrufen der Planner:", error);
    res
      .status(500)
      .json({ success: false, message: "Fehler beim Abrufen der Planner" });
  }
};
