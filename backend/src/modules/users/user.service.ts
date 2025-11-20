// ==============================================
// MODULE: USERS - SERVICE LAYER
// ==============================================
//
// BUSINESS LOGIC FOR USER MANAGEMENT
//
// IMPORTS:
// - userRepository
// - passwordUtils (for hashing)
// - HttpError classes
// - User types
// - Pagination utils
//
// METHODS:
//
// 1. createUser(dto: CreateUserDto): Promise<IUser>
//    - Validate email not already exists
//    - Hash password
//    - Create user via repository
//    - Return user (without password)
//
// 2. getUserById(id: string): Promise<IUser>
//    - Get user by ID
//    - Throw NotFoundError if not found
//
// 3. getUserByEmail(email: string): Promise<IUser>
//    - Get user by email
//    - Throw NotFoundError if not found
//
// 4. updateUser(id: string, dto: UpdateUserDto): Promise<IUser>
//    - Check user exists
//    - If updating email: check new email not taken
//    - Update via repository
//    - Return updated user
//
// 5. deleteUser(id: string): Promise<void>
//    - Check user exists
//    - Soft delete user (set isActive = false)
//    - Or hard delete if required
//
// 6. getAllUsers(filters: UserFilters, pagination: PaginationParams): Promise<PaginationResult<IUser>>
//    - Get users with filters and pagination
//    - Count total matching users
//    - Return paginated result
//
// 7. activateUser(id: string): Promise<IUser>
//    - Set isActive = true
//    - Return updated user
//
// 8. deactivateUser(id: string): Promise<IUser>
//    - Set isActive = false
//    - Return updated user
//
// 9. changeUserRole(id: string, newRole: string): Promise<IUser>
//    - Validate role value
//    - Update user role
//    - Return updated user
//
// 10. searchUsers(query: string, pagination: PaginationParams): Promise<PaginationResult<IUser>>
//     - Search users by name or email
//     - Return paginated results
//
// VALIDATION:
// - Validate email format
// - Validate role values against allowed roles
// - Check for duplicate emails
// - Validate required fields
//
// AUTHORIZATION:
// - Service doesn't handle authorization (done in controller/middleware)
// - But can include business rules (e.g., can't delete last admin)
