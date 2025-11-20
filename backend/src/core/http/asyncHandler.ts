// ==============================================
// ASYNC HANDLER WRAPPER
// ==============================================
// This file provides a utility to wrap async route handlers
// It eliminates the need for try-catch blocks in every controller
//
// IMPORTS NEEDED:
// - express: Request, Response, NextFunction types
//
// PURPOSE:
// - Wrap async Express route handlers to catch errors automatically
// - Pass caught errors to Express error handling middleware
//
// FUNCTION: asyncHandler
// - Type: Higher-order function that wraps async functions
// - Takes an async function as input
// - Returns a function that Express can use as middleware
//
// SIGNATURE:
// type AsyncFunction = (req: Request, res: Response, next: NextFunction) => Promise<any>
//
// const asyncHandler = (fn: AsyncFunction) => {
//   return (req: Request, res: Response, next: NextFunction) => {
//     // Call the async function and catch any errors
//     // Pass errors to next() for error handling middleware
//   }
// }
//
// IMPLEMENTATION LOGIC:
// 1. Take async function 'fn' as parameter
// 2. Return new function that:
//    - Executes fn(req, res, next)
//    - Wraps execution in Promise.resolve()
//    - Catches any errors with .catch(next)
//
// ALTERNATIVE IMPLEMENTATION:
// - Can use try-catch with async/await
// - Promise.resolve(fn(req, res, next)).catch(next)
//
// EXPORT:
// - export default asyncHandler
// - OR export { asyncHandler }
//
// USAGE EXAMPLE IN CONTROLLER:
//
// import asyncHandler from '@/core/http/asyncHandler'
//
// export const getUsers = asyncHandler(async (req, res) => {
//   const users = await userService.getAllUsers()
//   res.json({ success: true, data: users })
// })
//
// // No need for try-catch! asyncHandler catches errors automatically
//
// BENEFITS:
// - Cleaner controller code
// - Consistent error handling
// - No forgotten try-catch blocks
// - All errors forwarded to global error handler
//
// WITHOUT asyncHandler:
// export const getUsers = async (req, res, next) => {
//   try {
//     const users = await userService.getAllUsers()
//     res.json({ success: true, data: users })
//   } catch (error) {
//     next(error)
//   }
// }
//
// WITH asyncHandler:
// export const getUsers = asyncHandler(async (req, res) => {
//   const users = await userService.getAllUsers()
//   res.json({ success: true, data: users })
// })
