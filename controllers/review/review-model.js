import mongoose from "mongoose";
import reviewSchema from "./review-schema.js";

const reviewModel = mongoose.model("review", reviewSchema);

export default reviewModel;