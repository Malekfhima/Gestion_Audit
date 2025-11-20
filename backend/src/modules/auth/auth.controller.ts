// ==============================================
// MODULE: AUTH - CONTROLLER LAYER
// ==============================================
// This file handles HTTP requests and responses for authentication
//
// IMPORTS NEEDED:
// - express: Request, Response types
// - asyncHandler: from '../../core/http/asyncHandler'
// - authService: from './auth.service'
// - Auth types: from './auth.types'
// - validation library (Joi, class-validator, etc.)
//
// CONTROLLER FUNCTIONS:
// All functions should be wrapped with asyncHandler
//
// 1. register
//    - Route: POST /auth/register
//    - Body: RegisterDto
//    - Logic:
//      a. Validate request body (use Joi or similar)
//      b. Call authService.register(req.body)
//      c. Return 201 Created with user and tokens
//    - Response: { success: true, data: { user, accessToken, refreshToken } }
//
// 2. login
//    - Route: POST /auth/login
//    - Body: LoginDto
//    - Logic:
//      a. Validate request body
//      b. Call authService.login(req.body)
//      c. Optionally: set refresh token as httpOnly cookie
//      d. Return 200 OK with user and tokens
//    - Response: { success: true, data: { user, accessToken, refreshToken } }
//
// 3. refreshToken
//    - Route: POST /auth/refresh
//    - Body: { refreshToken } OR read from cookie
//    - Logic:
//      a. Extract refresh token from body or cookie
//      b. Call authService.refreshTokens(refreshToken)
//      c. Return new access token
//    - Response: { success: true, data: { accessToken, refreshToken? } }
//
// 4. logout
//    - Route: POST /auth/logout
//    - Headers: Authorization (for access token)
//    - Body: { refreshToken } OR read from cookie
//    - Middleware: authenticate (require valid access token)
//    - Logic:
//      a. Extract refresh token
//      b. Call authService.logout(refreshToken)
//      c. Clear refresh token cookie if using cookies
//      d. Return 200 OK
//    - Response: { success: true, message: 'Logged out successfully' }
//
// 5. logoutAll
//    - Route: POST /auth/logout-all
//    - Middleware: authenticate
//    - Logic:
//      a. Get userId from req.user
//      b. Call authService.logoutAll(userId)
//      c. Return 200 OK
//    - Response: { success: true, message: 'Logged out from all devices' }
//
// 6. changePassword
//    - Route: POST /auth/change-password
//    - Middleware: authenticate
//    - Body: ChangePasswordDto
//    - Logic:
//      a. Validate request body
//      b. Get userId from req.user
//      c. Call authService.changePassword(userId, req.body)
//      d. Return 200 OK
//    - Response: { success: true, message: 'Password changed successfully' }
//
// 7. forgotPassword
//    - Route: POST /auth/forgot-password
//    - Body: ForgotPasswordDto
//    - Logic:
//      a. Validate email
//      b. Call authService.forgotPassword(req.body)
//      c. Return 200 OK (always, don't reveal if email exists)
//    - Response: { success: true, message: 'If email exists, reset link sent' }
//
// 8. resetPassword
//    - Route: POST /auth/reset-password
//    - Body: ResetPasswordDto
//    - Logic:
//      a. Validate request body
//      b. Call authService.resetPassword(req.body)
//      c. Return 200 OK
//    - Response: { success: true, message: 'Password reset successfully' }
//
// 9. verifyEmail
//    - Route: GET /auth/verify-email/:token
//    - Params: token
//    - Logic:
//      a. Extract token from params
//      b. Call authService.verifyEmail(token)
//      c. Return 200 OK
//    - Response: { success: true, message: 'Email verified successfully' }
//
// 10. getCurrentUser
//     - Route: GET /auth/me
//     - Middleware: authenticate
//     - Logic:
//       a. req.user is populated by authenticate middleware
//       b. Return user data
//     - Response: { success: true, data: req.user }
//
// REQUEST VALIDATION:
// - Validate all input data before passing to service
// - Use validation library: Joi, class-validator, express-validator
// - Return 400 Bad Request for validation errors
//
// RESPONSE FORMAT:
// - Success: { success: true, data?: any, message?: string }
// - Error: handled by global error handler
//
// COOKIE OPTIONS (if using httpOnly cookies):
// - httpOnly: true (prevent XSS)
// - secure: true (HTTPS only in production)
// - sameSite: 'strict' or 'lax'
// - maxAge: refresh token expiration time
//
// EXPORTS:
// - export { register, login, refreshToken, logout, ... }
// - Each function exported individually
//
// USAGE IN ROUTES:
// - router.post('/register', register)
// - router.post('/login', login)
// - router.post('/logout', authenticate, logout)
