// ==============================================
// MODULE: REPORTS - CONTROLLER LAYER
// ==============================================
// Endpoints:
// - POST / - Generate report (authenticated)
// - POST /audit-summary - Generate audit summary report
// - POST /nc-status - Generate NC status report
// - POST /corrective-actions - Generate CA report
// - POST /compliance/:siteId - Generate compliance report
// - POST /risk-matrix - Generate risk matrix report
// - POST /site-performance/:siteId - Generate site performance report
// - GET / - Get user's reports
// - GET /:id - Get report details
// - GET /:id/download - Download report file
// - DELETE /:id - Delete report
//
// Auth: All require authentication, some may require specific roles (ADMIN, MANAGER)
