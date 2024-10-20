import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const db = mongoose.connect("mongodb://127.0.0.1/travelplanner-app");

export default db;
