// ==============================================
// MODULE: AUDIT ENTRIES - SERVICE LAYER
// ==============================================
// Methods:
// - createAuditEntry(dto): Create entry, validate audit and clause exist
// - createEntriesFromChecklist(auditId, checklistId): Generate entries from checklist template
// - getAuditEntry(id): Get entry details
// - updateAuditEntry(id, dto): Update entry, if status changes to NON_CONFORM, create NC
// - deleteAuditEntry(id): Delete entry
// - getEntriesByAudit(auditId, filters): Get entries for audit, filter by status
// - markAsVerified(id, verifiedById): Mark entry as verified
// - addEvidence(id, evidence, attachments): Add evidence to entry
// - getConformityStatistics(auditId): Calculate stats (% conform, % non-conform, etc.)
//
// Validation: Audit must be IN_PROGRESS or COMPLETED, clause must belong to audit's norm
