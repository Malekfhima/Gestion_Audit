// ==============================================
// PAGINATION UTILITY
// ==============================================
// This file provides utility functions and types for pagination
//
// IMPORTS NEEDED:
// - config: from '../../config/config' (for default page size limits)
//
// PAGINATION INTERFACES:
//
// 1. PaginationParams:
// interface PaginationParams {
//   page?: number          // Current page number (default: 1)
//   limit?: number         // Items per page (default: 10)
//   sortBy?: string        // Field to sort by (e.g., 'createdAt')
//   sortOrder?: 'asc' | 'desc'  // Sort direction (default: 'desc')
// }
//
// 2. PaginationResult<T>:
// interface PaginationResult<T> {
//   data: T[]              // Array of items for current page
//   pagination: {
//     page: number         // Current page number
//     limit: number        // Items per page
//     total: number        // Total number of items
//     totalPages: number   // Total number of pages
//     hasNextPage: boolean // Whether there's a next page
//     hasPrevPage: boolean // Whether there's a previous page
//   }
// }
//
// FUNCTION 1: parsePaginationParams
// - Purpose: Parse and validate pagination parameters from request query
// - Parameters: query: any (req.query object)
// - Returns: PaginationParams (validated and sanitized)
// - Logic:
//   * Extract page, limit, sortBy, sortOrder from query
//   * Convert page and limit to numbers
//   * Validate page >= 1 (default 1)
//   * Validate limit >= 1 and <= maxPageSize (default 10, max 100)
//   * Validate sortOrder is 'asc' or 'desc' (default 'desc')
//   * Return sanitized params object
//
// FUNCTION 2: calculatePagination
// - Purpose: Calculate pagination metadata
// - Parameters: total: number, page: number, limit: number
// - Returns: pagination metadata object
// - Logic:
//   * Calculate totalPages: Math.ceil(total / limit)
//   * Calculate hasNextPage: page < totalPages
//   * Calculate hasPrevPage: page > 1
//   * Return metadata object
//
// FUNCTION 3: getPaginationOptions
// - Purpose: Generate Mongoose query options for pagination
// - Parameters: params: PaginationParams
// - Returns: { skip: number, limit: number, sort: object }
// - Logic:
//   * Calculate skip: (page - 1) * limit
//   * Build sort object: { [sortBy]: sortOrder === 'asc' ? 1 : -1 }
//   * Return { skip, limit, sort }
//   * Used directly in Mongoose queries
//
// FUNCTION 4: createPaginationResult
// - Purpose: Create standardized pagination response
// - Parameters: data: T[], total: number, params: PaginationParams
// - Returns: PaginationResult<T>
// - Logic:
//   * Use calculatePagination to get metadata
//   * Combine data and metadata
//   * Return standardized result object
//
// EXPORTS:
// - export { PaginationParams, PaginationResult, parsePaginationParams, ... }
//
// USAGE EXAMPLES:
//
// In user.controller.ts:
// const params = parsePaginationParams(req.query)
// const result = await userService.getAllUsers(params)
// res.json({ success: true, ...result })
//
// In user.service.ts:
// const paginationOptions = getPaginationOptions(params)
// const users = await User.find(filters)
//   .skip(paginationOptions.skip)
//   .limit(paginationOptions.limit)
//   .sort(paginationOptions.sort)
// const total = await User.countDocuments(filters)
// return createPaginationResult(users, total, params)
//
// EXAMPLE API REQUEST:
// GET /api/users?page=2&limit=20&sortBy=createdAt&sortOrder=desc
//
// EXAMPLE API RESPONSE:
// {
//   success: true,
//   data: [...],
//   pagination: {
//     page: 2,
//     limit: 20,
//     total: 150,
//     totalPages: 8,
//     hasNextPage: true,
//     hasPrevPage: true
//   }
// }
//
// VALIDATION:
// - Enforce maximum page size to prevent performance issues
// - Handle invalid page numbers (< 1)
// - Handle invalid sort fields (optional: whitelist allowed fields)
