// ==============================================
// MODULE: RISKS - CONTROLLER LAYER
// ==============================================
// Endpoints:
// - POST / - Create risk (ADMIN, MANAGER)
// - GET / - Get all risks with filters
// - GET /matrix - Get risk matrix
// - GET /statistics - Get risk statistics
// - GET /level/:level - Get risks by level
// - GET /:id - Get risk details
// - PUT /:id - Update risk
// - DELETE /:id - Delete risk
// - POST /:id/assess - Assess risk (update probability/impact)
// - POST /:id/mitigation - Add mitigation plan
// - POST /:id/residual - Update residual risk
// - PATCH /:id/status - Update status
// - POST /:id/assign - Assign owner
// - POST /:id/link - Link to entity
// - DELETE /:id/link/:entityId - Unlink from entity
// - GET /:id/links - Get risk links
