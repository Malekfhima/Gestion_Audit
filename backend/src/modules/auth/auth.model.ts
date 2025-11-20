// ==============================================
// MODULE: AUTH - REFRESH TOKEN MODEL
// ==============================================
// This file defines the Mongoose schema and model for refresh tokens
//
// PURPOSE:
// - Store refresh tokens in database for revocation capability
// - Track token usage and expiration
// - Enable user logout and "logout from all devices"
//
// IMPORTS NEEDED:
// - mongoose: Schema, model, Document
//
// INTERFACE: IRefreshToken (extends Document)
// Properties:
// - token: string (required, unique, indexed)
// - userId: ObjectId (required, ref: 'User')
// - expiresAt: Date (required)
// - createdAt: Date (auto-generated)
// - isRevoked: boolean (default: false)
// - deviceInfo?: string (optional: user agent, device info)
// - ipAddress?: string (optional: IP address)
//
// MONGOOSE SCHEMA: RefreshTokenSchema
// Fields:
// - token: { type: String, required: true, unique: true }
// - userId: { type: Schema.Types.ObjectId, ref: 'User', required: true }
// - expiresAt: { type: Date, required: true }
// - isRevoked: { type: Boolean, default: false }
// - deviceInfo: { type: String }
// - ipAddress: { type: String }
//
// Timestamps: { timestamps: true }
//
// INDEXES:
// - token: unique index for fast lookup
// - userId: index for querying user's tokens
// - expiresAt: TTL index to auto-delete expired tokens
//   * schema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 })
//
// STATIC METHODS TO ADD:
//
// 1. revokeToken(token: string)
//    - Mark specific token as revoked
//    - Update isRevoked field
//
// 2. revokeAllUserTokens(userId: string)
//    - Revoke all tokens for a specific user
//    - Used for "logout from all devices"
//
// 3. cleanupExpiredTokens()
//    - Remove expired tokens (if not using TTL index)
//    - Can be called periodically
//
// MODEL EXPORT:
// - export const RefreshToken = model<IRefreshToken>('RefreshToken', RefreshTokenSchema)
// - export { IRefreshToken }
//
// USAGE:
// - In auth.service.ts:
//   * Save refresh token when user logs in
//   * Verify token exists and not revoked when refreshing
//   * Revoke token when user logs out
//
// SECURITY CONSIDERATIONS:
// - Refresh tokens should be long random strings
// - Store hashed version (optional, more secure)
// - Implement token rotation: issue new refresh token on each use
// - Limit number of active tokens per user
// - Track device info to detect suspicious activity
