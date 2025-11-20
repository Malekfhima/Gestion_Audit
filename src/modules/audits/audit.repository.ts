// ==============================================
// MODULE: AUDITS - REPOSITORY LAYER
// ==============================================
// Methods:
// - create, findById (with full population), findByAuditNumber, update, delete
// - find (with filters: status, site, norm, auditor, dateRange), count
// - updateStatus, updateConformityScore
// - getAuditsBySite, getAuditsByNorm, getAuditsByAuditor
// - getUpcomingAudits, getActiveAudits, getCompletedAudits
//
// Populate: norm, site, processes, leadAuditor, auditors, auditees, createdBy
