// ==============================================
// MODULE: ROLES - CONTROLLER LAYER
// ==============================================
// HTTP handlers for role endpoints
//
// Endpoints:
// - POST / - Create role (ADMIN only)
// - GET / - Get all roles with pagination (ADMIN, MANAGER)
// - GET /:id - Get role by ID (ADMIN, MANAGER)
// - PUT /:id - Update role (ADMIN only)
// - DELETE /:id - Delete role (ADMIN only)
// - POST /:id/permissions - Assign permissions (ADMIN only)
// - DELETE /:id/permissions - Remove permissions (ADMIN only)
//
// All wrapped with asyncHandler
// Validate input data
// Return appropriate status codes
