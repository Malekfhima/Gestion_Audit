// ==============================================
// MODULE: NORMS - CONTROLLER LAYER
// ==============================================
// HTTP handlers for norm endpoints
//
// Norm endpoints:
// - POST /norms - Create norm (ADMIN, MANAGER)
// - GET /norms - Get all norms with pagination
// - GET /norms/:id - Get norm details with clauses
// - PUT /norms/:id - Update norm (ADMIN, MANAGER)
// - DELETE /norms/:id - Delete norm (ADMIN)
// - POST /norms/:id/activate - Activate norm
// - POST /norms/:id/archive - Archive norm
//
// Clause endpoints:
// - POST /norms/:normId/clauses - Add clause
// - PUT /clauses/:id - Update clause
// - DELETE /clauses/:id - Delete clause
//
// Checklist endpoints:
// - POST /norms/:normId/checklists - Create checklist
// - GET /checklists/:id - Get checklist
// - PUT /checklists/:id - Update checklist
// - DELETE /checklists/:id - Delete checklist
// - POST /checklists/:id/duplicate - Duplicate checklist
//
// All wrapped with asyncHandler
