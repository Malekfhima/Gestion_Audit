// ==============================================
// MODULE: AUDITS - CONTROLLER LAYER
// ==============================================
// Endpoints:
// - POST / - Create audit (ADMIN, MANAGER, AUDITOR)
// - GET / - Get all audits with filters
// - GET /:id - Get audit details
// - PUT /:id - Update audit
// - DELETE /:id - Delete audit (ADMIN, MANAGER)
// - POST /:id/start - Start audit (AUDITOR, LEAD_AUDITOR)
// - POST /:id/complete - Complete audit
// - POST /:id/cancel - Cancel audit (ADMIN, MANAGER)
// - POST /:id/summary - Add summary/conclusions
// - POST /:id/auditors - Assign auditors
// - POST /:id/auditees - Assign auditees
// - GET /:id/score - Get conformity score
// - POST /:id/calculate-score - Recalculate conformity score
//
// Auth: Most require AUDITOR role or higher, delete requires ADMIN/MANAGER
