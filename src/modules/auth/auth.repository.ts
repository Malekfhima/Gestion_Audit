// ==============================================
// MODULE: AUTH - REPOSITORY LAYER
// ==============================================
// This file handles database operations for refresh tokens
//
// IMPORTS NEEDED:
// - RefreshToken model: from './auth.model'
// - IRefreshToken: from './auth.model'
//
// CLASS: AuthRepository
// Purpose: Encapsulate all database operations for refresh tokens
//
// METHODS TO IMPLEMENT:
//
// 1. createRefreshToken(data)
//    - Parameters: { token, userId, expiresAt, deviceInfo?, ipAddress? }
//    - Returns: Promise<IRefreshToken>
//    - Logic: Create new refresh token document in database
//
// 2. findTokenByValue(token: string)
//    - Parameters: token: string
//    - Returns: Promise<IRefreshToken | null>
//    - Logic: Find refresh token by token string
//    - Include: .populate('userId') to get user info
//
// 3. revokeToken(token: string)
//    - Parameters: token: string
//    - Returns: Promise<boolean>
//    - Logic: Set isRevoked = true for the token
//    - Return true if updated, false if not found
//
// 4. revokeAllUserTokens(userId: string)
//    - Parameters: userId: string
//    - Returns: Promise<number>
//    - Logic: Set isRevoked = true for all user's tokens
//    - Return count of revoked tokens
//
// 5. deleteToken(token: string)
//    - Parameters: token: string
//    - Returns: Promise<boolean>
//    - Logic: Delete token from database
//    - Used for permanent removal vs revocation
//
// 6. deleteExpiredTokens()
//    - Parameters: none
//    - Returns: Promise<number>
//    - Logic: Delete all tokens where expiresAt < now
//    - Return count of deleted tokens
//    - Used for cleanup if not using TTL index
//
// 7. getUserActiveTokens(userId: string)
//    - Parameters: userId: string
//    - Returns: Promise<IRefreshToken[]>
//    - Logic: Get all non-revoked, non-expired tokens for user
//    - Useful for showing user their active sessions
//
// 8. countUserActiveTokens(userId: string)
//    - Parameters: userId: string
//    - Returns: Promise<number>
//    - Logic: Count active tokens for user
//    - Used to limit number of concurrent sessions
//
// IMPLEMENTATION PATTERN:
// - Use async/await for all methods
// - Handle Mongoose errors and throw or return null
// - Keep methods focused on database operations only
// - No business logic in repository
//
// EXPORT:
// - export const authRepository = new AuthRepository()
// - OR export class and instantiate in service
//
// USAGE:
// - Import in auth.service.ts
// - Call repository methods for all database operations
// - Service layer handles business logic, repository handles data access
//
// EXAMPLE:
// const token = await authRepository.findTokenByValue(refreshToken)
// if (!token || token.isRevoked) throw new UnauthorizedError()
