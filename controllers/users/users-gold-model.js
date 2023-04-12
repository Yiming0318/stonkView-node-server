import mongoose from 'mongoose';
import UsersGoldSchema from "./users-gold-schema.js";

const usersGoldModel = mongoose.model('UserGoldModel', UsersGoldSchema);
export default usersGoldModel;