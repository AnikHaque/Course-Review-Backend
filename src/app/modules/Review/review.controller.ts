/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import catchAsyncFunc from '../../utils/catchAsyncFunc';
import sendResponseMessage from '../../utils/sendResponse';
import { ReviewService } from './review.services';

const createReview = catchAsyncFunc(async (req: Request, res: Response) => {
  const newReview = await ReviewService.createReviewIntoDB(req.body);
  sendResponseMessage(res, {
    success: true,
    statusCode: 201,
    message: 'Review created successfully',
    data: newReview,
  });
});
export const ReviewController = {
  createReview,
};
