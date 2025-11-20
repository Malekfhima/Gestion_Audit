// ==============================================
// MODULE: USERS - ROUTES CONFIGURATION
// ==============================================
//
// ROUTE DEFINITIONS FOR USER ENDPOINTS
//
// IMPORTS:
// - express Router
// - user controllers
// - authenticate middleware
// - authorize middleware
//
// ROUTES:
//
// SPECIAL ROUTES (must be defined before /:id routes):
// - GET /me (get current user profile)
// - PUT /me (update current user profile)
//
// STANDARD CRUD ROUTES:
// - POST / (create user) - ADMIN only
// - GET / (get all users with pagination) - ADMIN, MANAGER
// - GET /:id (get user by id) - authenticated
// - PUT /:id (update user) - ADMIN or owner
// - DELETE /:id (delete user) - ADMIN only
//
// ACTION ROUTES:
// - POST /:id/activate (activate user) - ADMIN only
// - POST /:id/deactivate (deactivate user) - ADMIN only
// - PATCH /:id/role (change user role) - ADMIN only
//
// ROUTE ORDER MATTERS:
// 1. Define /me routes first
// 2. Then define /:id routes
// 3. Otherwise /me will be treated as an ID
//
// MIDDLEWARE APPLICATION:
// - All routes require authentication
// - Admin routes require authorize('ADMIN')
// - Some routes allow owner access (check req.user.id === req.params.id)
//
// EXPORT:
// - export default router
//
// USAGE:
// - Imported in main routes.ts as /users
// - Results in URLs like: /api/users, /api/users/:id, /api/users/me
