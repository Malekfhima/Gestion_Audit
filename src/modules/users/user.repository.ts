// ==============================================
// MODULE: USERS - REPOSITORY LAYER
// ==============================================
//
// DATABASE OPERATIONS FOR USERS
//
// METHODS:
//
// 1. create(data: CreateUserDto): Promise<IUser>
//    - Create new user in database
//    - Return created user
//
// 2. findById(id: string): Promise<IUser | null>
//    - Find user by ID
//    - Exclude password field
//
// 3. findByIdWithPassword(id: string): Promise<IUser | null>
//    - Find user by ID including password
//    - Used for password verification
//
// 4. findByEmail(email: string): Promise<IUser | null>
//    - Find user by email
//    - Include password for authentication
//
// 5. update(id: string, data: UpdateUserDto): Promise<IUser | null>
//    - Update user by ID
//    - Return updated user
//
// 6. delete(id: string): Promise<boolean>
//    - Delete user by ID (hard delete)
//    - Return true if deleted, false if not found
//
// 7. softDelete(id: string): Promise<boolean>
//    - Soft delete: set isActive = false
//    - Return true if updated
//
// 8. find(filters: UserFilters, pagination: PaginationParams): Promise<IUser[]>
//    - Find users with filters and pagination
//    - Apply search, role filter, isActive filter
//    - Return array of users
//
// 9. count(filters: UserFilters): Promise<number>
//    - Count users matching filters
//    - Used for pagination total
//
// 10. updateLastLogin(id: string): Promise<void>
//     - Update lastLoginAt to current time
//     - Called after successful login
//
// 11. setEmailVerified(id: string): Promise<boolean>
//     - Set isEmailVerified = true
//     - Clear verification token
//
// 12. findByResetToken(token: string): Promise<IUser | null>
//     - Find user by password reset token
//     - Check token not expired
