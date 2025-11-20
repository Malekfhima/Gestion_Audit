// ==============================================
// MODULE: LEGAL - CONTROLLER LAYER
// ==============================================
// Legal Requirement endpoints:
// - POST /requirements - Create requirement (ADMIN, MANAGER)
// - GET /requirements - Get all requirements
// - GET /requirements/upcoming-reviews - Get upcoming reviews
// - GET /requirements/:id - Get requirement
// - PUT /requirements/:id - Update requirement
// - DELETE /requirements/:id - Delete requirement
// - POST /requirements/:id/sites - Assign to sites
// - POST /requirements/:id/responsible - Assign responsible
// - GET /requirements/site/:siteId - Get by site
//
// Legal Compliance endpoints:
// - POST /compliance - Assess compliance
// - GET /compliance/requirement/:requirementId/site/:siteId - Get compliance
// - PATCH /compliance/:id/status - Update status
// - GET /compliance/site/:siteId/report - Get site compliance report
// - GET /compliance/non-compliant - Get non-compliant items
// - GET /compliance/statistics - Get statistics
// - POST /compliance/:id/action-plan - Link action plan
