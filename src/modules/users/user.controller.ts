// ==============================================
// MODULE: USERS - CONTROLLER LAYER
// ==============================================
//
// HTTP REQUEST HANDLERS FOR USER ENDPOINTS
//
// IMPORTS:
// - express types
// - asyncHandler
// - userService
// - pagination utils
// - validation
//
// CONTROLLER FUNCTIONS:
//
// 1. createUser (POST /users)
//    - Middleware: authenticate, authorize('ADMIN')
//    - Body: CreateUserDto
//    - Call userService.createUser()
//    - Return 201 Created
//
// 2. getUser (GET /users/:id)
//    - Middleware: authenticate
//    - Params: id
//    - Call userService.getUserById()
//    - Return 200 OK with user data
//
// 3. updateUser (PUT /users/:id)
//    - Middleware: authenticate, authorize('ADMIN') or owner
//    - Params: id
//    - Body: UpdateUserDto
//    - Call userService.updateUser()
//    - Return 200 OK with updated user
//
// 4. deleteUser (DELETE /users/:id)
//    - Middleware: authenticate, authorize('ADMIN')
//    - Params: id
//    - Call userService.deleteUser()
//    - Return 200 OK with success message
//
// 5. getAllUsers (GET /users)
//    - Middleware: authenticate, authorize('ADMIN', 'MANAGER')
//    - Query: page, limit, sortBy, sortOrder, role, isActive, search
//    - Parse pagination params
//    - Call userService.getAllUsers()
//    - Return 200 OK with paginated result
//
// 6. activateUser (POST /users/:id/activate)
//    - Middleware: authenticate, authorize('ADMIN')
//    - Params: id
//    - Call userService.activateUser()
//    - Return 200 OK
//
// 7. deactivateUser (POST /users/:id/deactivate)
//    - Middleware: authenticate, authorize('ADMIN')
//    - Params: id
//    - Call userService.deactivateUser()
//    - Return 200 OK
//
// 8. changeUserRole (PATCH /users/:id/role)
//    - Middleware: authenticate, authorize('ADMIN')
//    - Params: id
//    - Body: { role: string }
//    - Call userService.changeUserRole()
//    - Return 200 OK
//
// 9. getCurrentUserProfile (GET /users/me)
//    - Middleware: authenticate
//    - Get user from req.user
//    - Return 200 OK with user profile
//
// 10. updateCurrentUserProfile (PUT /users/me)
//     - Middleware: authenticate
//     - Body: UpdateUserDto (limited fields)
//     - Call userService.updateUser() with req.user.id
//     - Return 200 OK
//
// VALIDATION:
// - Validate all input data
// - Check ID format (valid MongoDB ObjectId)
// - Validate role values
// - Sanitize search queries
//
// AUTHORIZATION:
// - Admins can manage all users
// - Users can only view/update their own profile
// - Implement ownership check for update/delete
