// ==============================================
// HTTP ERROR CLASS
// ==============================================
// This file defines custom HTTP error classes for standardized error handling
//
// IMPORTS NEEDED:
// - None (pure TypeScript class)
//
// BASE ERROR CLASS: HttpError
// - Extends Error class
// - Properties:
//   * statusCode: number (HTTP status code: 400, 404, 500, etc.)
//   * message: string (error message)
//   * isOperational: boolean (true for expected errors, false for programmer errors)
//   * errors?: any[] (optional array for validation errors)
//
// - Constructor(statusCode, message, isOperational = true, errors?)
//   * Set this.statusCode = statusCode
//   * Set this.message = message
//   * Set this.isOperational = isOperational
//   * Set this.errors = errors
//   * Call Error.captureStackTrace(this, this.constructor)
//
// SPECIFIC ERROR CLASSES (extend HttpError):
//
// 1. BadRequestError (400)
//    - Used for invalid request data
//    - constructor(message = 'Bad Request', errors?)
//    - Call super(400, message, true, errors)
//
// 2. UnauthorizedError (401)
//    - Used for authentication failures
//    - constructor(message = 'Unauthorized')
//    - Call super(401, message, true)
//
// 3. ForbiddenError (403)
//    - Used for authorization failures (valid user, insufficient permissions)
//    - constructor(message = 'Forbidden')
//    - Call super(403, message, true)
//
// 4. NotFoundError (404)
//    - Used when resource is not found
//    - constructor(message = 'Resource not found')
//    - Call super(404, message, true)
//
// 5. ConflictError (409)
//    - Used for conflicts (e.g., duplicate email)
//    - constructor(message = 'Conflict')
//    - Call super(409, message, true)
//
// 6. ValidationError (422)
//    - Used for validation failures
//    - constructor(message = 'Validation failed', errors)
//    - Call super(422, message, true, errors)
//
// 7. InternalServerError (500)
//    - Used for unexpected server errors
//    - constructor(message = 'Internal server error')
//    - Call super(500, message, false)
//
// EXPORTS:
// - export { HttpError, BadRequestError, UnauthorizedError, ... }
//
// USAGE EXAMPLE:
// - throw new NotFoundError('User not found')
// - throw new ValidationError('Invalid data', [{ field: 'email', message: 'Invalid email' }])
//
// ERROR RESPONSE FORMAT (handled by errorHandler):
// {
//   success: false,
//   statusCode: 404,
//   message: 'User not found',
//   errors: [...] // if validation error
// }
