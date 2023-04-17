import * as dao from "./review-dao.js";

const reviewController = (app) => {
  const createReview = async (req, res) => {
    const review = req.body;
    const currentUser = req.session['currentUser'];
    review.author = currentUser._id;
    const newReview = await dao.createReview(review);
    res.json(newReview);
  };

  const findReviewByStock = async (req, res) => {
    const searchStockCode = req.params.sid;
    const reviews = await dao.findReviewByStock(searchStockCode);
    res.json(reviews);
  }

  const findReviewByUser = async (req, res) => {
    const author = req.params.uid;
    const reviews = await dao.findReviewByAuthor(author);
    res.json(reviews);
  }

  app.post("/reviews", createReview);
  app.get("/reviews/stocks/:sid/reviews", findReviewByStock);
  app.get("/reviews/users/:uid/reviews", findReviewByUser);
};

export default reviewController;