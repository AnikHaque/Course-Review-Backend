import { TCategory } from './category.interface';
import { Category } from './category.model';

const createCategoryIntoDB = async (category: TCategory) => {
  const newCategory = await Category.create(category);
  return newCategory;
};
const getAllCategoriesFromDB = async () => {
  const categories = await Category.find();
  return categories;
};

export const CategoryServices = {
  createCategoryIntoDB,
  getAllCategoriesFromDB,
};
