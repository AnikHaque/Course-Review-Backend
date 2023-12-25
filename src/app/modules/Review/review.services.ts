import { TReview } from './review.interface';
import { Review } from './review.model';

const createReviewIntoDB = async (review: TReview) => {
  const newReview = await Review.create(review);
  return newReview;
};

export const ReviewService = {
  createReviewIntoDB,
};
