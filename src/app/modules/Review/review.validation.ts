import { z } from 'zod';

const reviewValidationSchema = z.object({
  courseId: z.string(),
  rating: z
    .number()
    .min(1, { message: 'Rating must be greater than or equal 1' })
    .max(5, { message: 'Rating must be less than or equal 5' }),
  review: z.string(),
});

export const ReviewValidation = {
  reviewValidationSchema,
};
