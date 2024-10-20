import mongoose from "mongoose";

const { Schema, model } = mongoose;

const plannerchema = new Schema({
  destination: String,
  description: String,
  startDate: Date,
  endDate: Date,
  hotelName: String,
  address: String,
  duration: Number,
  activities: String,
});

const travelplanner = model("travelplanner", plannerchema);

export default travelplanner;
