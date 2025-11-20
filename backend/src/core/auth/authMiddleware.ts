// ==============================================
// AUTHENTICATION MIDDLEWARE
// ==============================================
// This file provides middleware to protect routes requiring authentication
//
// IMPORTS NEEDED:
// - express: Request, Response, NextFunction types
// - jsonwebtoken: for token verification
// - config: JWT configuration from '../../config/config'
// - UnauthorizedError: from '../http/httpError'
// - asyncHandler: from '../http/asyncHandler'
// - User model: from '../../modules/users/user.model'
//
// EXTEND EXPRESS REQUEST TYPE:
// - Add user property to Request interface
// - declare global { namespace Express { interface Request { user?: any } } }
// - This allows req.user to be typed
//
// MAIN MIDDLEWARE: authenticate
// - Signature: (req: Request, res: Response, next: NextFunction) => Promise<void>
// - Should be wrapped with asyncHandler
//
// RESPONSIBILITIES:
// 1. Extract token from request:
//    - Check Authorization header: 'Bearer <token>'
//    - Extract token: req.headers.authorization?.split(' ')[1]
//    - Alternative: check req.cookies.token if using cookies
//
// 2. Validate token exists:
//    - If no token: throw UnauthorizedError('No token provided')
//
// 3. Verify token:
//    - Use jwt.verify(token, config.jwt.jwtSecret)
//    - Cast result to expected payload type { userId: string, email: string, ... }
//    - If verification fails: jwt throws error, caught by asyncHandler
//
// 4. Load user from database:
//    - Use User.findById(decoded.userId).select('-password')
//    - If user not found: throw UnauthorizedError('User not found')
//    - If user found: attach to req.user = user
//
// 5. Call next():
//    - Allow request to proceed to next middleware/controller
//
// ERROR CASES:
// - No token provided → 401 Unauthorized
// - Invalid token → 401 Unauthorized (jwt.verify throws)
// - Expired token → 401 Unauthorized (jwt.verify throws TokenExpiredError)
// - User not found → 401 Unauthorized
//
// OPTIONAL MIDDLEWARE: optionalAuth
// - Same as authenticate but doesn't throw error if no token
// - If token exists and valid: attach user to req.user
// - If no token or invalid: continue without user (req.user = undefined)
// - Use for routes that work with or without authentication
//
// EXPORTS:
// - export { authenticate, optionalAuth }
// - export default authenticate
//
// USAGE IN ROUTES:
// - router.get('/profile', authenticate, userController.getProfile)
// - router.get('/public', optionalAuth, publicController.getData)
//
// TOKEN PAYLOAD INTERFACE:
// interface JwtPayload {
//   userId: string
//   email: string
//   role?: string
//   iat?: number  // issued at
//   exp?: number  // expiration
// }
