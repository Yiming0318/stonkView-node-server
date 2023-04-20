import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  review: String,
  author: {type: mongoose.Schema.Types.ObjectId, ref: 'UserGoldModel'},
  searchStockCode: String,
}, {collection: "review"});

export default reviewSchema;