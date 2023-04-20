import mongoose from "mongoose";
import buyinSchema from "./buyin-schema.js";
const buyinModel = mongoose.model("buyIn", buyinSchema);
export default buyinModel;