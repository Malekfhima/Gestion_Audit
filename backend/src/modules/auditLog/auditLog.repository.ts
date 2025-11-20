// ==============================================
// MODULE: AUDIT LOG - REPOSITORY LAYER
// ==============================================
// Methods:
// - create(data): Create audit log entry
// - findById(id): Get log entry
// - find(filters, pagination): Get logs with filters
//   * Filter by: entityType, entityId, performedById, action, dateRange, severity
// - count(filters): Count log entries
// - findByEntity(entityType, entityId): Get all logs for an entity
// - findByUser(userId, dateRange): Get user's activity log
// - deleteOld(daysOld): Cleanup old logs (retention policy)
//
// Populate: performedBy
// Logs should be write-only (no updates or deletes except for retention)
