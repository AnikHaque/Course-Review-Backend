import { z } from 'zod';
const TagsValidationSchema = z.object({
  name: z.string(),
  isDeleted: z.boolean(),
});

const DetailsValidationSchema = z.object({
  level: z.string(),
  description: z.string(),
});

const createCourseValidationSchema = z.object({
  title: z.string(),
  instructor: z.string(),
  categoryId: z.string(),
  price: z.number().min(1, { message: 'Price must be Greater than 0' }),
  tags: z.array(TagsValidationSchema),
  startDate: z.string(),
  endDate: z.string(),
  language: z.string(),
  provider: z.string(),
  durationWeeks: z.number().optional(),
  details: DetailsValidationSchema,
});
const updateTagsValidationSchema = z.object({
  name: z.string().optional(),
  isDeleted: z.boolean().optional(),
});
const updateDetailsValidationSchema = z.object({
  level: z.string().optional(),
  description: z.string().optional(),
});
const updateCourseValidationSchema = z.object({
  title: z.string().optional(),
  instructor: z.string().optional(),
  categoryId: z.string().optional(),
  price: z
    .number()
    .min(1, { message: 'Price must be Greater than 0' })
    .optional(),
  tags: z.array(updateTagsValidationSchema).optional(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  language: z.string().optional(),
  provider: z.string().optional(),
  details: updateDetailsValidationSchema.optional(),
});

export const CourseValidation = {
  createCourseValidationSchema,
  updateCourseValidationSchema,
};
