import { Schema, model } from 'mongoose';
import { TReview } from './review.interface';

export const ReviewSchema = new Schema<TReview>({
  courseId: {
    type: Schema.Types.ObjectId,
    ref: 'Course',
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    validate: {
      validator: function (rating: number) {
        return rating >= 1 && rating <= 5;
      },
      message: 'Rating must be between 1 and 5',
    },
  },
  review: {
    type: String,
    required: true,
  },
});

export const Review = model<TReview>('review', ReviewSchema);
