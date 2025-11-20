// ==============================================
// ROLE-BASED AUTHORIZATION MIDDLEWARE
// ==============================================
// This file provides middleware to check user roles/permissions
//
// IMPORTS NEEDED:
// - express: Request, Response, NextFunction types
// - ForbiddenError, UnauthorizedError: from '../http/httpError'
//
// PREREQUISITE:
// - This middleware must be used AFTER authenticate middleware
// - Requires req.user to be populated by authenticate middleware
//
// MIDDLEWARE: authorize
// - Factory function that returns middleware
// - Takes allowed roles/permissions as parameters
// - Returns Express middleware function
//
// SIGNATURE:
// const authorize = (...allowedRoles: string[]) => {
//   return (req: Request, res: Response, next: NextFunction) => {
//     // Authorization logic
//   }
// }
//
// RESPONSIBILITIES:
// 1. Check if user is authenticated:
//    - if (!req.user): throw UnauthorizedError('Authentication required')
//
// 2. Check if user has required role:
//    - Extract user role: req.user.role or req.user.roles
//    - Check if user role is in allowedRoles array
//    - if (!allowedRoles.includes(req.user.role))
//      * throw ForbiddenError('Insufficient permissions')
//
// 3. If authorized:
//    - Call next() to proceed
//
// ADVANCED: Permission-based authorization
// - FUNCTION: authorizePermission(...requiredPermissions: string[])
// - Check if user has specific permissions instead of roles
// - User model should have permissions array
// - Check if req.user.permissions includes required permissions
//
// ROLE HIERARCHY (optional):
// - ADMIN > MANAGER > AUDITOR > USER
// - Can implement role hierarchy check
// - If user has higher role, grant access to lower role routes
//
// EXPORTS:
// - export { authorize, authorizePermission }
// - export default authorize
//
// USAGE IN ROUTES:
// - router.post('/users', authenticate, authorize('ADMIN'), userController.create)
// - router.get('/reports', authenticate, authorize('ADMIN', 'MANAGER'), ...)
// - router.put('/audit', authenticate, authorizePermission('audit:update'), ...)
//
// COMMON ROLES:
// - ADMIN: Full system access
// - MANAGER: Management-level access
// - AUDITOR: Can create and manage audits
// - USER: Basic user access
//
// EXAMPLE ERROR RESPONSES:
// - No user: 401 "Authentication required"
// - Wrong role: 403 "Insufficient permissions"
// - Can customize messages: 403 "Admin access required"
//
// ADVANCED FEATURES TO CONSIDER:
// - Resource ownership check (user can only edit their own data)
// - Conditional authorization (different rules based on context)
// - Organization/tenant-based authorization
