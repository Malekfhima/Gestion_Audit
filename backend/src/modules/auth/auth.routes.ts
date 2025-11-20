// ==============================================
// MODULE: AUTH - ROUTES CONFIGURATION
// ==============================================
// This file defines all routes for authentication endpoints
//
// IMPORTS NEEDED:
// - express: Router
// - auth controllers: from './auth.controller'
// - authenticate middleware: from '../../core/auth/authMiddleware'
// - rate limiting (optional): for extra protection on auth routes
//
// ROUTER SETUP:
// const router = express.Router()
//
// ROUTES TO DEFINE:
//
// PUBLIC ROUTES (no authentication required):
//
// 1. POST /register
//    - Controller: authController.register
//    - Description: Register new user account
//    - Body: { firstName, lastName, email, password }
//
// 2. POST /login
//    - Controller: authController.login
//    - Description: User login
//    - Body: { email, password }
//
// 3. POST /refresh
//    - Controller: authController.refreshToken
//    - Description: Refresh access token using refresh token
//    - Body: { refreshToken }
//
// 4. POST /forgot-password
//    - Controller: authController.forgotPassword
//    - Description: Request password reset
//    - Body: { email }
//
// 5. POST /reset-password
//    - Controller: authController.resetPassword
//    - Description: Reset password with token
//    - Body: { token, newPassword }
//
// 6. GET /verify-email/:token
//    - Controller: authController.verifyEmail
//    - Description: Verify email address
//    - Params: token
//
// PROTECTED ROUTES (require authentication):
//
// 7. POST /logout
//    - Middleware: authenticate
//    - Controller: authController.logout
//    - Description: Logout current session
//    - Body: { refreshToken }
//
// 8. POST /logout-all
//    - Middleware: authenticate
//    - Controller: authController.logoutAll
//    - Description: Logout from all devices
//
// 9. POST /change-password
//    - Middleware: authenticate
//    - Controller: authController.changePassword
//    - Description: Change password
//    - Body: { currentPassword, newPassword }
//
// 10. GET /me
//     - Middleware: authenticate
//     - Controller: authController.getCurrentUser
//     - Description: Get current authenticated user info
//
// OPTIONAL ENHANCEMENTS:
// - Add rate limiting to login/register routes:
//   * const loginLimiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 5 })
//   * router.post('/login', loginLimiter, authController.login)
//
// - Add validation middleware before controllers:
//   * router.post('/register', validateRegisterDto, authController.register)
//
// - Add request logging for security audit:
//   * Log all authentication attempts
//
// EXPORT:
// - export default router
//
// USAGE IN MAIN ROUTES (routes.ts):
// - import authRoutes from './modules/auth/auth.routes'
// - router.use('/auth', authRoutes)
//
// RESULTING URLS:
// - POST /api/auth/register
// - POST /api/auth/login
// - POST /api/auth/refresh
// - POST /api/auth/logout
// - POST /api/auth/change-password
// - etc.
//
// SECURITY CONSIDERATIONS:
// - Implement rate limiting on sensitive endpoints
// - Log failed authentication attempts
// - Consider CAPTCHA for registration/login after failures
// - Validate and sanitize all inputs
