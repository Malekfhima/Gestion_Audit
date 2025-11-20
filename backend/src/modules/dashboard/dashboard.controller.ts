// ==============================================
// MODULE: DASHBOARD - CONTROLLER LAYER
// ==============================================
// Endpoints:
// - GET /overview - Get overview statistics (all modules summary)
// - GET /audits - Get audit statistics
// - GET /non-conformities - Get NC statistics
// - GET /corrective-actions - Get action statistics
// - GET /risks - Get risk statistics
// - GET /compliance - Get compliance statistics
// - GET /timeseries/:metric - Get time series data for metric
// - GET /top-issues - Get top issues requiring attention
//
// All endpoints support filters: siteId, dateRange, userId
// Auth: Require authentication, data filtered based on user role/permissions
