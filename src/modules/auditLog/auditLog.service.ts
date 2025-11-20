// ==============================================
// MODULE: AUDIT LOG - SERVICE LAYER
// ==============================================
// Methods:
// - logAction(action, entityType, entityId, performedById, changes?, metadata?): Create log entry
// - getLogs(filters, pagination): Get logs with filters
// - getEntityHistory(entityType, entityId, pagination): Get change history for entity
// - getUserActivity(userId, dateRange, pagination): Get user's actions
// - getSecurityLogs(filters): Get security-sensitive logs (login failures, permission changes)
// - exportLogs(filters, format): Export logs for compliance/auditing
// - cleanupOldLogs(retentionDays): Delete logs older than retention period
//
// Logging helpers (called from other services):
// - logUserCreated(userId, performedById)
// - logUserUpdated(userId, changes, performedById)
// - logAuditCreated(auditId, performedById)
// - logAuditCompleted(auditId, performedById)
// - logNCCreated(ncId, performedById)
// - logNCClosed(ncId, performedById)
// - logLoginAttempt(userId, success, ipAddress)
// - logPermissionChange(userId, changes, performedById)
//
// Integration: Can be called automatically via middleware on all write operations
