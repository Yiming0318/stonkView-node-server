import buyinModel from "./buyin-model.js";

export const createBuyIn = async (userId, stockId) => {
  return buyinModel.create({userId, stockId});
};

export const findBuyInByUserId = async (userId) => {
  return buyinModel.find({userId});
};