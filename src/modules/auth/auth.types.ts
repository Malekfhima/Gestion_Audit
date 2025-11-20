// ==============================================
// MODULE: AUTH - TYPE DEFINITIONS
// ==============================================
// This file contains TypeScript interfaces and types for the auth module
//
// INTERFACES TO DEFINE:
//
// 1. LoginDto:
// interface LoginDto {
//   email: string
//   password: string
// }
//
// 2. RegisterDto:
// interface RegisterDto {
//   firstName: string
//   lastName: string
//   email: string
//   password: string
//   role?: string  // Optional, default to 'USER'
// }
//
// 3. RefreshTokenDto:
// interface RefreshTokenDto {
//   refreshToken: string
// }
//
// 4. ChangePasswordDto:
// interface ChangePasswordDto {
//   currentPassword: string
//   newPassword: string
// }
//
// 5. ForgotPasswordDto:
// interface ForgotPasswordDto {
//   email: string
// }
//
// 6. ResetPasswordDto:
// interface ResetPasswordDto {
//   token: string
//   newPassword: string
// }
//
// 7. AuthResponse:
// interface AuthResponse {
//   user: {
//     id: string
//     email: string
//     firstName: string
//     lastName: string
//     role: string
//   }
//   accessToken: string
//   refreshToken: string
// }
//
// 8. RefreshTokenResponse:
// interface RefreshTokenResponse {
//   accessToken: string
//   refreshToken?: string  // Optional: if rotating refresh tokens
// }
//
// EXPORTS:
// - export all interfaces and types
// - These types are used across auth module files
//
// USAGE:
// - Import in auth.controller.ts for request/response typing
// - Import in auth.service.ts for method parameters and return types
// - Use in validation schemas (Joi, class-validator, etc.)
