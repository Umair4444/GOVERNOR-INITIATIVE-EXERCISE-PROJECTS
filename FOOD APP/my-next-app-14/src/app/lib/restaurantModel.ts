import mongoose from "mongoose";

const restaurantModel = new mongoose.Schema({
  name: String,
});

export const restaurantSchema =
  mongoose.models.restaurant || mongoose.model("restaurant", restaurantModel);
