// ==============================================
// TOKEN UTILITY FUNCTIONS
// ==============================================
// This file provides utility functions for JWT token operations
//
// IMPORTS NEEDED:
// - jsonwebtoken: for token generation and verification
// - config: from '../../config/config' (for JWT secrets and expiration)
//
// TOKEN PAYLOAD INTERFACE:
// interface TokenPayload {
//   userId: string
//   email: string
//   role?: string
//   [key: string]: any  // Allow additional properties
// }
//
// FUNCTION 1: generateAccessToken
// - Purpose: Generate JWT access token
// - Parameters: payload: TokenPayload
// - Returns: string (JWT token)
// - Logic:
//   * Use jwt.sign(payload, config.jwt.jwtSecret, options)
//   * Options: { expiresIn: config.jwt.jwtExpiresIn }
//   * Return signed token
//
// FUNCTION 2: generateRefreshToken
// - Purpose: Generate JWT refresh token
// - Parameters: payload: TokenPayload (usually just userId)
// - Returns: string (JWT refresh token)
// - Logic:
//   * Use jwt.sign(payload, config.jwt.refreshTokenSecret, options)
//   * Options: { expiresIn: config.jwt.refreshTokenExpiresIn }
//   * Return signed token
//   * Refresh tokens typically have longer expiration (7-30 days)
//
// FUNCTION 3: verifyAccessToken
// - Purpose: Verify and decode access token
// - Parameters: token: string
// - Returns: TokenPayload (decoded payload)
// - Logic:
//   * Use jwt.verify(token, config.jwt.jwtSecret)
//   * Return decoded payload
//   * Throws error if token invalid or expired
//
// FUNCTION 4: verifyRefreshToken
// - Purpose: Verify and decode refresh token
// - Parameters: token: string
// - Returns: TokenPayload (decoded payload)
// - Logic:
//   * Use jwt.verify(token, config.jwt.refreshTokenSecret)
//   * Return decoded payload
//   * Used in token refresh endpoint
//
// FUNCTION 5: generateTokenPair
// - Purpose: Generate both access and refresh tokens
// - Parameters: payload: TokenPayload
// - Returns: { accessToken: string, refreshToken: string }
// - Logic:
//   * Call generateAccessToken(payload)
//   * Call generateRefreshToken({ userId: payload.userId })
//   * Return both tokens as object
//   * Convenient for login/signup responses
//
// OPTIONAL FUNCTION: decodeToken
// - Purpose: Decode token without verification (for debugging)
// - Parameters: token: string
// - Returns: TokenPayload | null
// - Logic:
//   * Use jwt.decode(token)
//   * Does NOT verify signature
//   * Useful for inspecting token payload
//
// EXPORTS:
// - export { generateAccessToken, generateRefreshToken, verifyAccessToken, ... }
//
// USAGE EXAMPLES:
//
// In auth.service.ts (login):
// const tokens = generateTokenPair({ userId: user._id, email: user.email, role: user.role })
// return { user, ...tokens }
//
// In auth.controller.ts (refresh token):
// const decoded = verifyRefreshToken(refreshToken)
// const newAccessToken = generateAccessToken({ userId: decoded.userId })
// res.json({ accessToken: newAccessToken })
//
// SECURITY NOTES:
// - Access tokens: short-lived (15min - 1hr)
// - Refresh tokens: longer-lived (7-30 days)
// - Store refresh tokens in database for revocation capability
// - Never store tokens in localStorage (XSS risk), use httpOnly cookies
// - Rotate refresh tokens on each use (optional, more secure)
