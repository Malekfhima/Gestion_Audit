// ==============================================
// SERVER.TS - APPLICATION ENTRY POINT
// ==============================================
// This file is the main entry point for the application
// It is responsible for starting the Express server and connecting to MongoDB
//
// IMPORTS NEEDED:
// - dotenv: to load environment variables from .env file
// - app: the Express application instance from app.ts
// - connectDatabase: MongoDB connection function from config/database.ts
// - logger: logging utility from core/utils/logger.ts
//
// MAIN RESPONSIBILITIES:
// 1. Load environment variables using dotenv.config()
// 2. Extract PORT from process.env (default to 4000 if not set)
// 3. Connect to MongoDB database using connectDatabase()
// 4. Start the Express server using app.listen(PORT)
// 5. Log successful server startup with port number
// 6. Handle database connection errors and log them
// 7. Handle uncaught exceptions and unhandled promise rejections
//    - Log the error
//    - Close the server gracefully
//    - Exit the process with appropriate exit code
//
// ERROR HANDLING:
// - process.on('uncaughtException', handler) - catch synchronous errors
// - process.on('unhandledRejection', handler) - catch async errors
// - Graceful shutdown: close database connection and server before exit
//
// EXAMPLE STRUCTURE:
// - Load dotenv at the very beginning
// - Define async function to start server
// - Inside function: await connectDatabase(), then app.listen()
// - Call the start function and catch any errors
// - Set up process error handlers
//
// LOGGING:
// - Log "Starting server..." when beginning
// - Log "Connected to MongoDB successfully" on DB connection
// - Log "Server listening on port {PORT}" when server starts
// - Log detailed error information on failures
