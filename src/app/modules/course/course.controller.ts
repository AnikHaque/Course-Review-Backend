/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import catchAsyncFunc from '../../utils/catchAsyncFunc';
import sendResponseMessage from '../../utils/sendResponse';
import { CourseService } from './course.services';

const createCourse = catchAsyncFunc(async (req: Request, res: Response) => {
  const newCourse = await CourseService.createCourseIntoDB(req.body);
  sendResponseMessage(res, {
    success: true,
    statusCode: 201,
    message: 'Course created successfully',
    data: newCourse,
  });
});

const getAllCourses = catchAsyncFunc(async (req: Request, res: Response) => {
  const { page = 1, limit = 10 } = req.query;
  const courses = await CourseService.getAllCoursesFromDB(req.query);

  sendResponseMessage(res, {
    success: true,
    statusCode: 200,
    message: 'Courses retrieved successfully',
    meta: {
      page: Number(page),
      limit: Number(limit),
      total: courses.length || 0,
    },
    data: courses,
  });
});

const updateCourse = catchAsyncFunc(async (req: Request, res: Response) => {
  const { courseId } = req.params;
  const updatedCourse = await CourseService.updateCourseIntoDB(
    courseId,
    req.body,
  );
  sendResponseMessage(res, {
    success: true,
    statusCode: 200,
    message: 'Course updated successfully',
    data: updatedCourse,
  });
});
const getCourseAndReviews = catchAsyncFunc(
  async (req: Request, res: Response) => {
    const { courseId } = req.params;
    const course = await CourseService.getCourseAndReviewsFromDB(courseId);
    sendResponseMessage(res, {
      success: true,
      statusCode: 200,
      message: 'Course and Reviews retrieved successfully',
      data: course,
    });
  },
);
const getBestCourses = catchAsyncFunc(async (req: Request, res: Response) => {
  const bestCourses = await CourseService.getBestCoursesFromDB();
  sendResponseMessage(res, {
    success: true,
    statusCode: 200,
    message: 'Best Courses retrieved successfully',
    data: bestCourses,
  });
});
export const CourseController = {
  createCourse,
  getAllCourses,
  updateCourse,
  getCourseAndReviews,
  getBestCourses,
};
