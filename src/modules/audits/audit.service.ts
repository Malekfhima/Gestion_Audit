// ==============================================
// MODULE: AUDITS - SERVICE LAYER
// ==============================================
// Methods:
// - createAudit(dto): Generate audit number, validate references (norm, site, processes, users), create audit
// - getAudit(id): Get full audit details with all relations
// - updateAudit(id, dto): Update audit, validate status transitions
// - deleteAudit(id): Delete audit (only if PLANNED status)
// - getAllAudits(filters, pagination): Get audits with filters (status, site, norm, auditor, dates)
// - startAudit(id): Change status to IN_PROGRESS, set actualStartDate
// - completeAudit(id): Change status to COMPLETED, set actualEndDate, validate all entries completed
// - cancelAudit(id): Change status to CANCELLED
// - calculateConformityScore(id): Calculate score from audit entries, update audit
// - addSummary(id, summary, conclusions, recommendations): Update audit conclusions
// - assignAuditors(id, auditorIds[]): Add/update auditors
// - assignAuditees(id, auditeeIds[]): Add/update auditees
//
// Validation: Status workflow (PLANNED → IN_PROGRESS → COMPLETED), cannot complete with open non-conformities, dates validation
