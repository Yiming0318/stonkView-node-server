import mongoose from 'mongoose';
import UsersBronzeSchema from "./users-bronze-schema.js";

const usersBronzeModel = mongoose.model('UserBronzeModel', UsersBronzeSchema);
export default usersBronzeModel;