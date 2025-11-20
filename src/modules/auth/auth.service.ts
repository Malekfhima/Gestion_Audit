// ==============================================
// MODULE: AUTH - SERVICE LAYER (BUSINESS LOGIC)
// ==============================================
// This file contains business logic for authentication
//
// IMPORTS NEEDED:
// - authRepository: from './auth.repository'
// - userRepository: from '../users/user.repository'
// - passwordUtils: from '../../core/auth/passwordUtils'
// - tokenUtils: from '../../core/auth/tokenUtils'
// - HttpError classes: from '../../core/http/httpError'
// - Auth types: from './auth.types'
//
// CLASS: AuthService
// Purpose: Handle authentication business logic
//
// METHODS TO IMPLEMENT:
//
// 1. register(dto: RegisterDto)
//    - Parameters: RegisterDto { firstName, lastName, email, password, role? }
//    - Returns: Promise<AuthResponse>
//    - Logic:
//      a. Check if user with email already exists
//      b. If exists: throw ConflictError('Email already registered')
//      c. Hash password using passwordUtils.hashPassword()
//      d. Create user via userRepository.create()
//      e. Generate access and refresh tokens
//      f. Save refresh token to database via authRepository
//      g. Return { user, accessToken, refreshToken }
//
// 2. login(dto: LoginDto)
//    - Parameters: LoginDto { email, password }
//    - Returns: Promise<AuthResponse>
//    - Logic:
//      a. Find user by email via userRepository.findByEmail()
//      b. If not found: throw UnauthorizedError('Invalid credentials')
//      c. Compare password using passwordUtils.comparePassword()
//      d. If invalid: throw UnauthorizedError('Invalid credentials')
//      e. Check if user is active (not banned/deleted)
//      f. Generate access and refresh tokens
//      g. Save refresh token to database
//      h. Update user's lastLoginAt field
//      i. Return { user, accessToken, refreshToken }
//
// 3. refreshTokens(refreshToken: string)
//    - Parameters: refreshToken: string
//    - Returns: Promise<RefreshTokenResponse>
//    - Logic:
//      a. Verify refresh token using tokenUtils.verifyRefreshToken()
//      b. Find token in database via authRepository.findTokenByValue()
//      c. Check if token exists and not revoked
//      d. Check if token not expired
//      e. Generate new access token
//      f. Optionally: rotate refresh token (generate new one)
//      g. If rotating: revoke old token, save new one
//      h. Return new access token (and new refresh token if rotating)
//
// 4. logout(refreshToken: string)
//    - Parameters: refreshToken: string
//    - Returns: Promise<void>
//    - Logic:
//      a. Revoke refresh token via authRepository.revokeToken()
//      b. Optionally: delete token instead of revoking
//      c. Return success
//
// 5. logoutAll(userId: string)
//    - Parameters: userId: string
//    - Returns: Promise<void>
//    - Logic:
//      a. Revoke all user's tokens via authRepository.revokeAllUserTokens()
//      b. User will need to login again on all devices
//
// 6. changePassword(userId: string, dto: ChangePasswordDto)
//    - Parameters: userId, { currentPassword, newPassword }
//    - Returns: Promise<void>
//    - Logic:
//      a. Get user from database
//      b. Verify current password
//      c. Validate new password strength
//      d. Hash new password
//      e. Update user password via userRepository
//      f. Optionally: revoke all tokens (force re-login)
//
// 7. forgotPassword(dto: ForgotPasswordDto)
//    - Parameters: { email }
//    - Returns: Promise<void>
//    - Logic:
//      a. Find user by email
//      b. Generate password reset token (random string)
//      c. Save token hash and expiry to user document
//      d. Send password reset email with token
//      e. Return success (don't reveal if email exists)
//
// 8. resetPassword(dto: ResetPasswordDto)
//    - Parameters: { token, newPassword }
//    - Returns: Promise<void>
//    - Logic:
//      a. Find user with matching reset token
//      b. Check if token not expired
//      c. Hash new password
//      d. Update user password
//      e. Clear reset token fields
//      f. Optionally: revoke all refresh tokens
//
// 9. verifyEmail(token: string)
//    - Parameters: token: string
//    - Returns: Promise<void>
//    - Logic:
//      a. Find user with verification token
//      b. Mark email as verified
//      c. Clear verification token
//
// ERROR HANDLING:
// - Use custom error classes (UnauthorizedError, ConflictError, etc.)
// - Don't expose sensitive information in error messages
// - For login failures: use generic "Invalid credentials" message
//
// SECURITY NOTES:
// - Always hash passwords before storing
// - Use constant-time comparison for tokens
// - Rate limit authentication endpoints
// - Log failed authentication attempts
// - Implement account lockout after X failed attempts (optional)
//
// EXPORT:
// - export const authService = new AuthService()
// - OR export class
