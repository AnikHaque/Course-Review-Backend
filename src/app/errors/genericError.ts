class GenericError extends Error {
  public statusCode: number;

  constructor(code: number, message: string, stack?: '') {
    super(message);
    this.statusCode = code;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export default GenericError;
