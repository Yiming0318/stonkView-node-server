import reviewModel from "./review-model.js";

export const createReview = async (review) => {
  return reviewModel.create(review);
}

export const findReviewByStock = (searchStockCode) => {
  return reviewModel.find({searchStockCode}).populate('author').exec();
}

export const findReviewByAuthor= (author) => {
  return reviewModel.find({author});
}