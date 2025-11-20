// ==============================================
// MODULE: AUDIT LOG - MONGOOSE MODEL
// ==============================================
// System audit trail for tracking all significant actions
//
// Fields:
// - action (string, required) - e.g., 'USER_CREATED', 'AUDIT_COMPLETED', 'NC_ASSIGNED'
// - entityType (string) - type of entity affected (USER, AUDIT, NC, etc.)
// - entityId (ObjectId) - ID of affected entity
// - performedById (ref: User) - who performed the action
// - performedAt (Date, default: now)
// - ipAddress (string), userAgent (string)
// - changes (object) - before/after values for updates
//   * { before: { field: oldValue }, after: { field: newValue } }
// - metadata (object) - additional context data
// - severity (enum): 'INFO', 'WARNING', 'CRITICAL' - for security-sensitive actions
//
// Indexes: performedAt (descending), entityType + entityId, performedById, action
// For compliance, security auditing, and debugging
// Can implement automatic logging via middleware
