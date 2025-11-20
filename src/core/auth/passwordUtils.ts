// ==============================================
// PASSWORD UTILITY FUNCTIONS
// ==============================================
// This file provides utility functions for password hashing and verification
//
// IMPORTS NEEDED:
// - bcrypt or bcryptjs: for password hashing
// - config: from '../../config/config' (for salt rounds)
//
// FUNCTION 1: hashPassword
// - Purpose: Hash a plain text password
// - Parameters: password: string
// - Returns: Promise<string> (hashed password)
// - Logic:
//   * Get salt rounds from config (default 10)
//   * Use bcrypt.hash(password, saltRounds)
//   * Return hashed password
//   * This is async operation
//
// FUNCTION 2: comparePassword
// - Purpose: Compare plain text password with hashed password
// - Parameters: plainPassword: string, hashedPassword: string
// - Returns: Promise<boolean> (true if match, false otherwise)
// - Logic:
//   * Use bcrypt.compare(plainPassword, hashedPassword)
//   * Returns true if passwords match
//   * Returns false if passwords don't match
//   * This is async operation
//
// FUNCTION 3: generateRandomPassword (optional)
// - Purpose: Generate a random password (for temporary passwords)
// - Parameters: length: number = 12
// - Returns: string (random password)
// - Logic:
//   * Use crypto.randomBytes() or custom generation
//   * Include uppercase, lowercase, numbers, special chars
//   * Return random password string
//   * Useful for "forgot password" functionality
//
// FUNCTION 4: validatePasswordStrength (optional)
// - Purpose: Validate password meets security requirements
// - Parameters: password: string
// - Returns: { valid: boolean, errors: string[] }
// - Logic:
//   * Check minimum length (e.g., 8 characters)
//   * Check for uppercase letter
//   * Check for lowercase letter
//   * Check for number
//   * Check for special character
//   * Return validation result with errors if any
//   * Can be used in validation middleware
//
// PASSWORD REQUIREMENTS (suggested):
// - Minimum 8 characters
// - At least one uppercase letter
// - At least one lowercase letter
// - At least one number
// - At least one special character (!@#$%^&*)
//
// EXPORTS:
// - export { hashPassword, comparePassword, validatePasswordStrength, ... }
//
// USAGE EXAMPLES:
//
// In user.service.ts (create user):
// const hashedPassword = await hashPassword(dto.password)
// const user = await userRepository.create({ ...dto, password: hashedPassword })
//
// In auth.service.ts (login):
// const user = await userRepository.findByEmail(email)
// const isValidPassword = await comparePassword(password, user.password)
// if (!isValidPassword) throw new UnauthorizedError('Invalid credentials')
//
// In user.controller.ts (change password):
// const validation = validatePasswordStrength(newPassword)
// if (!validation.valid) throw new BadRequestError('Weak password', validation.errors)
//
// SECURITY NOTES:
// - Always hash passwords before storing in database
// - Never log or expose plain text passwords
// - Use appropriate salt rounds (10-12 recommended)
// - Higher rounds = more secure but slower
// - bcrypt automatically handles salt generation
// - bcrypt is intentionally slow to prevent brute force attacks
