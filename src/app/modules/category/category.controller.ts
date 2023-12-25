import { Request, Response } from 'express';
import catchAsyncFunc from '../../utils/catchAsyncFunc';
import sendResponseMessage from '../../utils/sendResponse';
import { CategoryServices } from './category.services';

const createCategoryController = catchAsyncFunc(
  async (req: Request, res: Response) => {
    const newCategory = await CategoryServices.createCategoryIntoDB(req.body);

    sendResponseMessage(res, {
      success: true,
      statusCode: 201,
      message: 'Category created successfully',
      data: newCategory,
    });
  },
);
const getAllCategoriesController = catchAsyncFunc(
  async (req: Request, res: Response) => {
    const categories = await CategoryServices.getAllCategoriesFromDB();
    sendResponseMessage(res, {
      success: true,
      statusCode: 200,
      message: 'Categories retrieved successfully',
      data: categories,
    });
  },
);

export const CategoryController = {
  createCategoryController,
  getAllCategoriesController,
};
