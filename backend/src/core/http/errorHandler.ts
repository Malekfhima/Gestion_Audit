// ==============================================
// ERROR HANDLER MIDDLEWARE
// ==============================================
// This file provides global error handling middleware for Express
//
// IMPORTS NEEDED:
// - express: Request, Response, NextFunction types
// - HttpError: from './httpError'
// - logger: from '../utils/logger'
// - config: from '../../config/config' (for NODE_ENV)
//
// MAIN ERROR HANDLER: errorHandler
// - Signature: (err: Error, req: Request, res: Response, next: NextFunction) => void
// - This is Express error middleware (4 parameters)
//
// RESPONSIBILITIES:
// 1. Log the error using logger
//    - logger.error() with error message, stack, and request info
//    - Include: method, url, ip, userId (if authenticated)
//
// 2. Determine if error is operational (HttpError) or programmer error
//    - if (err instanceof HttpError && err.isOperational)
//      * Expected error, send appropriate response
//    - else
//      * Unexpected error, treat as 500 Internal Server Error
//
// 3. Handle specific error types:
//    a. Mongoose Validation Errors:
//       - err.name === 'ValidationError'
//       - Extract validation errors from err.errors
//       - Return 422 with formatted errors array
//
//    b. Mongoose Cast Errors:
//       - err.name === 'CastError'
//       - Invalid ObjectId or type casting
//       - Return 400 Bad Request
//
//    c. Mongoose Duplicate Key Errors:
//       - err.code === 11000
//       - Duplicate unique field (e.g., email)
//       - Return 409 Conflict
//
//    d. JWT Errors:
//       - err.name === 'JsonWebTokenError'
//       - Invalid token
//       - Return 401 Unauthorized
//
//    e. JWT Expired Error:
//       - err.name === 'TokenExpiredError'
//       - Return 401 Unauthorized
//
// 4. Build error response object:
//    - success: false
//    - statusCode: determined status code
//    - message: error message
//    - errors: array of errors (for validation)
//    - stack: error stack (only in development mode)
//
// 5. Send response:
//    - res.status(statusCode).json(errorResponse)
//
// DEVELOPMENT vs PRODUCTION:
// - In development: include full error stack and details
// - In production: sanitize error messages, hide sensitive info
//
// HELPER FUNCTION: notFoundHandler (optional)
// - Middleware to catch 404 errors for undefined routes
// - (req: Request, res: Response, next: NextFunction) => void
// - Create NotFoundError and pass to next(error)
//
// EXPORTS:
// - export default errorHandler
// - export { errorHandler, notFoundHandler }
//
// USAGE IN APP.TS:
// - Place after all routes
// - app.use(errorHandler) as last middleware
