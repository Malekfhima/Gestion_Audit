// ==============================================
// MODULE: NON-CONFORMITIES - MONGOOSE MODEL
// ==============================================
// Fields:
// - ncNumber (unique, auto-generated), auditId (ref: Audit), auditEntryId (ref: AuditEntry), clauseId (ref: Clause)
// - description, rootCause, immediateAction
// - severity (enum), category (enum), status (enum, default: OPEN)
// - detectedById (ref: User), detectedAt, assignedToId (ref: User)
// - siteId (ref: Site), processId (ref: Process)
// - targetClosureDate, actualClosureDate
// - verifiedById (ref: User), verifiedAt
// - createdAt, updatedAt
//
// Indexes: ncNumber (unique), auditId, status, severity, assignedToId
