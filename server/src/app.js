import express, { json } from "express";
import cors from "cors";
import plannerRoutes from "./router/plannerRoutes.js";
import recipeRoutes from "./router/recipeRoutes.js";
import placeRoutes from "./router/placeRoutes.js";
import db from "./util/db-connect.js";

const app = express();
const PORT = 3002;

app.use(cors());
app.use(json());

app.get("/", (req, res) => {
  res.json({ success: true });
});
app.use("/planners", plannerRoutes); // Get all planners
app.use("/plannersearch", plannerRoutes); // Add a new planners
app.use("/api", recipeRoutes);
app.use("/api", placeRoutes);
// app.delete("/users", async (req, res) => {
//   const data = req.body;
//   const result = await User.deleteOne({});

//   res.json(result);
// });

app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});
