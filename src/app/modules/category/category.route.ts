import express from 'express';
import validateZodRequest from '../../middlewares/validateZodRequest';
import { CategoryController } from './category.controller';
import { CategoryValidation } from './category.validation';
export const router = express.Router();

router.post(
  '/',
  validateZodRequest(CategoryValidation.categoryValidationSchema),
  CategoryController.createCategoryController,
);
router.get('/', CategoryController.getAllCategoriesController);

export const CategoryRoutes = router;
