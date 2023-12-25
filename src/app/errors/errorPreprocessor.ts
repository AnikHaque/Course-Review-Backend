/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from 'mongoose';
import { ZodError } from 'zod';
import handlerCastError from './handleCastError';
import handlerDuplicateError from './handleDuplicateError';
import handleValidationError from './handleValidationError';
import handlerZodError from './handleZodError';

const errorPreprocessor = (error: any) => {
  if (error instanceof ZodError) {
    return handlerZodError(error);
  } else if (error instanceof mongoose.Error.ValidationError) {
    return handleValidationError(error);
  } else if (error.code && error.code === 11000) {
    return handlerDuplicateError(error);
  } else if (error instanceof mongoose.Error.CastError) {
    return handlerCastError(error);
  } else {
    return {
      statusCode: 500,
      status: 'error',
      message: 'Unknown Error',
      issues: [
        {
          path: '',
          message: error.message,
        },
      ],
    };
  }
};

export default errorPreprocessor;
