// ==============================================
// LOGGER UTILITY
// ==============================================
// This file provides centralized logging functionality using Winston
//
// IMPORTS NEEDED:
// - winston: logging library
// - path: for log file paths
// - config: from '../../config/config' (for log level and environment)
//
// LOGGER CONFIGURATION:
// 1. Set log level from config (debug, info, warn, error)
// 2. Define log format:
//    - timestamp: add timestamp to logs
//    - errors: format error objects
//    - printf: custom format string
//
// LOG FORMAT EXAMPLE:
// [2024-01-15 10:30:45] [INFO]: Application started
// [2024-01-15 10:30:46] [ERROR]: Database connection failed - Error: Connection timeout
//
// TRANSPORTS (where logs are written):
// 1. Console Transport:
//    - Always active
//    - Use colorize for development
//    - Format: timestamp + level + message
//    - Level: based on config.logLevel
//
// 2. File Transport - Error Logs:
//    - filename: 'logs/error.log'
//    - level: 'error'
//    - Only log errors to this file
//    - maxsize: 5242880 (5MB)
//    - maxFiles: 5
//
// 3. File Transport - Combined Logs:
//    - filename: 'logs/combined.log'
//    - level: 'info'
//    - All logs (info, warn, error)
//    - maxsize: 5242880 (5MB)
//    - maxFiles: 5
//
// LOGGER METHODS TO EXPOSE:
// - logger.error(message, metadata?): Log error level
// - logger.warn(message, metadata?): Log warning level
// - logger.info(message, metadata?): Log info level
// - logger.http(message, metadata?): Log HTTP requests
// - logger.debug(message, metadata?): Log debug info
//
// METADATA SUPPORT:
// - Allow passing additional context as second parameter
// - Example: logger.error('User login failed', { userId, email, ip })
//
// ERROR LOGGING:
// - Capture error stack traces
// - Log error.message and error.stack
// - Include additional context (request info, user info)
//
// DEVELOPMENT vs PRODUCTION:
// - Development: More verbose, colorized console output
// - Production: File-based logging, JSON format (optional)
//
// EXPORT:
// - export default logger (winston logger instance)
//
// USAGE EXAMPLES:
//
// In server.ts:
// logger.info('Server started on port 4000')
// logger.error('Failed to connect to database', { error: err.message })
//
// In errorHandler.ts:
// logger.error('Unhandled error', {
//   message: err.message,
//   stack: err.stack,
//   url: req.url,
//   method: req.method
// })
//
// In auth.service.ts:
// logger.info('User logged in successfully', { userId: user._id, email: user.email })
// logger.warn('Failed login attempt', { email, ip: req.ip })
//
// ADDITIONAL FEATURES:
// - Create logs directory if it doesn't exist
// - Rotate logs based on date (daily logs)
// - Compress old logs
// - Integration with external logging services (optional)
//   * Datadog, Loggly, CloudWatch, etc.
