// ==============================================
// DATABASE.TS - MONGODB CONNECTION HANDLER
// ==============================================
// This file handles the MongoDB database connection using Mongoose
//
// IMPORTS NEEDED:
// - mongoose: MongoDB ODM library
// - config: Configuration object from './config'
// - logger: Logging utility from '../core/utils/logger'
//
// RESPONSIBILITIES:
// 1. Create and export a function to connect to MongoDB
//
// FUNCTION: connectDatabase()
// - Should be async function
// - Returns: Promise<void>
//
// CONNECTION LOGIC:
// 1. Extract mongoUri from config object
// 2. Set Mongoose connection options:
//    - (Most options are now defaults in Mongoose 6+)
//    - Consider: autoIndex, serverSelectionTimeoutMS, socketTimeoutMS
//
// 3. Call mongoose.connect(mongoUri, options)
//    - Use try-catch for error handling
//    - On success: log "MongoDB connected successfully"
//    - On error: log error and re-throw
//
// 4. Set up Mongoose connection event listeners:
//    - mongoose.connection.on('connected', callback)
//      * Log "Mongoose connected to DB"
//
//    - mongoose.connection.on('error', callback)
//      * Log connection error
//
//    - mongoose.connection.on('disconnected', callback)
//      * Log "Mongoose disconnected from DB"
//
// 5. Handle application termination:
//    - process.on('SIGINT', callback) - Ctrl+C termination
//      * Close mongoose connection gracefully
//      * Log "Mongoose connection closed due to app termination"
//      * Exit process with code 0
//
// EXPORT:
// - export const connectDatabase = async () => { ... }
// - export default connectDatabase
//
// ERROR HANDLING:
// - Catch connection errors and throw them to caller (server.ts)
// - Include detailed error messages for debugging
// - Consider retry logic for transient connection failures (optional)
//
// EXAMPLE FLOW:
// 1. Import in server.ts
// 2. Call await connectDatabase() before starting server
// 3. If connection fails, server.ts should handle error and exit
//
// MONGOOSE CONFIGURATION:
// - Set mongoose.set('strictQuery', false) if needed
// - Configure debug mode: mongoose.set('debug', true) in development
