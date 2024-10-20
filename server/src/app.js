import express, { json } from "express";
import cors from "cors";
import plannerRoutes from "./router/recipeRoutes.js";
import plannersearchRoutes from "./router/recipeRoutes.js";
import recipeRoutes from "./router/recipeRoutes.js";
import placeRoutes from "./router/recipeRoutes.js";
import db from "./util/db-connect.js";

const app = express();
const PORT = 3002;

app.use(cors());
app.use(json());

app.get("/", (req, res) => {
  res.json({ success: true });
});
app.use("/planner", plannerRoutes);
app.use("/plannersearch", plannersearchRoutes);
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
