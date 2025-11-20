// ==============================================
// MODULE: AUDIT ENTRIES - CONTROLLER LAYER
// ==============================================
// Endpoints:
// - POST / - Create audit entry (AUDITOR)
// - POST /bulk - Create entries from checklist
// - GET /audit/:auditId - Get all entries for audit
// - GET /:id - Get entry details
// - PUT /:id - Update entry (AUDITOR)
// - DELETE /:id - Delete entry (AUDITOR, ADMIN)
// - POST /:id/verify - Mark as verified
// - POST /:id/evidence - Add evidence
// - GET /audit/:auditId/statistics - Get conformity statistics
//
// Auth: Require AUDITOR role, entries can only be modified by audit team members
