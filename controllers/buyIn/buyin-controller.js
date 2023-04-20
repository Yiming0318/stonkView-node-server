import * as dao from "./buyin-dao.js";

const BuyinController = (app) => {
  const createBuyIn = async (req, res) => {
    const userId = req.params.uid;
    const stockId = req.params.sid;
    const newBuyIn = await dao.createBuyIn(userId, stockId);
    res.json(newBuyIn);
  };

  const findBuyIn = async (req, res) => {
    const userId = req.params.uid;
    const buyIn = await dao.findBuyInByUserId(userId);
    res.json(buyIn);
  };

  app.post("/users/:uid/buyin/:sid", createBuyIn);
  app.get("/users/:uid/buyin", findBuyIn);
}

export default BuyinController;