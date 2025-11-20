// ==============================================
// APP.TS - EXPRESS APPLICATION CONFIGURATION
// ==============================================
// This file creates and configures the Express application instance
// It sets up all middleware and routes
//
// IMPORTS NEEDED:
// - express: Express framework
// - cors: CORS middleware
// - helmet: Security headers middleware
// - express.json(): Body parser for JSON
// - express.urlencoded(): Body parser for URL-encoded data
// - morgan: HTTP request logger
// - rateLimit from 'express-rate-limit': Rate limiting
// - routes: Main routes configuration from routes.ts
// - errorHandler: Global error handler from core/http/errorHandler.ts
//
// RESPONSIBILITIES:
// 1. Create Express application instance: const app = express()
//
// 2. Apply security middleware:
//    - helmet(): Set security HTTP headers
//    - cors(): Enable CORS with configuration from env
//      * origin: process.env.CORS_ORIGIN
//      * credentials: true
//      * methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']
//
// 3. Apply rate limiting:
//    - rateLimit with windowMs and max from environment variables
//    - Apply to all requests or specific routes (e.g., /api/)
//
// 4. Apply body parsing middleware:
//    - express.json(): Parse JSON request bodies
//    - express.urlencoded({ extended: true }): Parse URL-encoded bodies
//
// 5. Apply logging middleware:
//    - morgan('combined') for production
//    - morgan('dev') for development
//
// 6. Health check route:
//    - GET /health or GET /api/health
//    - Return { status: 'ok', timestamp: new Date().toISOString() }
//
// 7. Mount main application routes:
//    - app.use('/api', routes) or app.use('/api/v1', routes)
//
// 8. Handle 404 errors:
//    - Catch all route for undefined endpoints
//    - Return 404 error with message "Route not found"
//
// 9. Apply global error handler:
//    - app.use(errorHandler) - should be the last middleware
//
// 10. Export the app instance:
//     - export default app
//
// MIDDLEWARE ORDER IS CRITICAL:
// 1. Security (helmet, cors)
// 2. Rate limiting
// 3. Body parsing
// 4. Logging
// 5. Routes
// 6. 404 handler
// 7. Error handler (must be last)
