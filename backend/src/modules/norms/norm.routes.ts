// ==============================================
// MODULE: NORMS - ROUTES CONFIGURATION
// ==============================================
// Routes for norms, clauses, and checklists
//
// Norm routes:
// - POST / - create norm
// - GET / - get all norms
// - GET /:id - get norm
// - PUT /:id - update norm
// - DELETE /:id - delete norm
// - POST /:id/activate
// - POST /:id/archive
// - POST /:normId/clauses - add clause
// - POST /:normId/checklists - create checklist
//
// Clause routes (sub-router):
// - PUT /clauses/:id
// - DELETE /clauses/:id
//
// Checklist routes (sub-router):
// - GET /checklists/:id
// - PUT /checklists/:id
// - DELETE /checklists/:id
// - POST /checklists/:id/duplicate
//
// Export router
