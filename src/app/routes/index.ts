import { Router } from 'express';
import { ReviewRoutes } from '../modules/Review/review.route';
import { CategoryRoutes } from '../modules/category/category.route';
import { CourseRoutes } from '../modules/course/course.route';

export const router = Router();
const moduleRoutes = [
  {
    path: '/categories',
    route: CategoryRoutes,
  },
  {
    path: '/',
    route: CourseRoutes,
  },
  {
    path: '/reviews',
    route: ReviewRoutes,
  },
];
moduleRoutes.forEach(route => {
  router.use(route.path, route.route);
});
