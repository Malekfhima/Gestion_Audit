// ==============================================
// MODULE: USERS - TYPE DEFINITIONS
// ==============================================
//
// INTERFACES TO DEFINE:
//
// 1. CreateUserDto:
// - firstName: string
// - lastName: string
// - email: string
// - password: string
// - role: string
// - organization?: string
// - phoneNumber?: string
//
// 2. UpdateUserDto:
// - firstName?: string
// - lastName?: string
// - phoneNumber?: string
// - organization?: string
// - All fields optional for partial updates
//
// 3. UserResponse:
// - id: string
// - firstName: string
// - lastName: string
// - email: string
// - role: string
// - isActive: boolean
// - isEmailVerified: boolean
// - createdAt: Date
// - updatedAt: Date
// - lastLoginAt?: Date
// - Password field should NOT be included
//
// 4. UserFilters:
// - role?: string
// - isActive?: boolean
// - search?: string (search in name or email)
// - createdAfter?: Date
// - createdBefore?: Date
