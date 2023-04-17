import mongoose from "mongoose";
const buyinSchema = new mongoose.Schema(
    {
      userId: {type: mongoose.Schema.Types.ObjectId, ref: 'UserGoldModel'},
      stockId: String,
    },
    {collection: "buyIn"}
);
export default buyinSchema;