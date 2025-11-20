// ==============================================
// MODULE: USERS - MONGOOSE MODEL
// ==============================================
//
// INTERFACE: IUser extends Document
// Fields:
// - firstName: string (required)
// - lastName: string (required)
// - email: string (required, unique, lowercase)
// - password: string (required, select: false by default)
// - role: string (required, default: 'USER', enum: ['ADMIN', 'MANAGER', 'AUDITOR', 'USER'])
// - organization?: string (optional)
// - phoneNumber?: string (optional)
// - isActive: boolean (default: true)
// - isEmailVerified: boolean (default: false)
// - emailVerificationToken?: string
// - emailVerificationExpires?: Date
// - passwordResetToken?: string
// - passwordResetExpires?: Date
// - lastLoginAt?: Date
// - createdAt: Date (auto)
// - updatedAt: Date (auto)
//
// SCHEMA: UserSchema
// - Add all fields with appropriate types and validators
// - email: unique index, lowercase, trim, email validation
// - Timestamps: { timestamps: true }
//
// VIRTUAL FIELDS:
// - fullName: getter that returns `${firstName} ${lastName}`
//
// INSTANCE METHODS:
// - comparePassword(candidatePassword: string): Promise<boolean>
//   * Compare provided password with hashed password
//   * Use bcrypt.compare()
//
// - toJSON(): override to remove sensitive fields
//   * Remove password, passwordResetToken, etc. when converting to JSON
//
// INDEXES:
// - email: unique
// - role: for filtering users by role
// - isActive: for filtering active/inactive users
//
// MODEL EXPORT:
// - export const User = model<IUser>('User', UserSchema)
// - export { IUser }
