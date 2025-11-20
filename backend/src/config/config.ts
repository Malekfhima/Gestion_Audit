// ==============================================
// CONFIG.TS - APPLICATION CONFIGURATION
// ==============================================
// This file centralizes all application configuration values
// It reads from environment variables and provides typed config object
//
// IMPORTS NEEDED:
// - dotenv: (optional, if not already loaded in server.ts)
//
// RESPONSIBILITIES:
// 1. Create a configuration object that exports all environment variables
//    in a structured, typed format
//
// 2. Configuration structure should include:
//
//    SERVER CONFIG:
//    - port: number (from process.env.PORT, default 4000)
//    - nodeEnv: string (from process.env.NODE_ENV, default 'development')
//
//    DATABASE CONFIG:
//    - mongoUri: string (from process.env.MONGO_URI, required)
//
//    JWT CONFIG:
//    - jwtSecret: string (from process.env.JWT_SECRET, required)
//    - refreshTokenSecret: string (from process.env.REFRESH_TOKEN_SECRET, required)
//    - jwtExpiresIn: string (from process.env.JWT_EXPIRES_IN, default '1h')
//    - refreshTokenExpiresIn: string (from process.env.REFRESH_TOKEN_EXPIRES_IN, default '7d')
//
//    CORS CONFIG:
//    - corsOrigin: string (from process.env.CORS_ORIGIN, default '*')
//
//    LOGGING CONFIG:
//    - logLevel: string (from process.env.LOG_LEVEL, default 'info')
//
//    PAGINATION CONFIG:
//    - defaultPageSize: number (from process.env.DEFAULT_PAGE_SIZE, default 10)
//    - maxPageSize: number (from process.env.MAX_PAGE_SIZE, default 100)
//
//    SECURITY CONFIG:
//    - rateLimitMax: number (from process.env.RATE_LIMIT_MAX, default 100)
//    - rateLimitWindow: number (from process.env.RATE_LIMIT_WINDOW, default 15)
//    - bcryptSaltRounds: number (from process.env.BCRYPT_SALT_ROUNDS, default 10)
//
// 3. Validate required environment variables:
//    - Throw error if critical variables (MONGO_URI, JWT_SECRET) are missing
//    - Log warnings for optional variables using defaults
//
// 4. Export configuration object:
//    - export const config = { server: {...}, database: {...}, jwt: {...}, ... }
//    - OR export default config
//
// EXAMPLE STRUCTURE:
// const config = {
//   server: {
//     port: parseInt(process.env.PORT || '4000', 10),
//     nodeEnv: process.env.NODE_ENV || 'development',
//   },
//   database: {
//     mongoUri: process.env.MONGO_URI || '',
//   },
//   // ... other config sections
// }
//
// VALIDATION:
// - Check if config.database.mongoUri exists, throw Error if missing
// - Check if config.jwt.jwtSecret exists, throw Error if missing
//
// TYPE SAFETY:
// - Consider creating TypeScript interface for config object
// - This ensures type safety when importing config elsewhere
