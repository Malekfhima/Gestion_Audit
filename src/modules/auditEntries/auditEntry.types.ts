// ==============================================
// MODULE: AUDIT ENTRIES - TYPE DEFINITIONS
// ==============================================
// Audit entries represent individual checklist items/findings within an audit
//
// CreateAuditEntryDto: { auditId, clauseId, question, evidence, finding, conformityStatus, verifiedBy }
// UpdateAuditEntryDto: all fields optional
// ConformityStatus: 'CONFORM' | 'NON_CONFORM' | 'NOT_APPLICABLE' | 'OBSERVATION' | 'OPPORTUNITY'
// AuditEntryResponse: { id, audit, clause, question, evidence, finding, status, verifiedBy, createdAt }
