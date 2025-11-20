// ==============================================
// MODULE: AUDIT ENTRIES - MONGOOSE MODEL
// ==============================================
// Fields:
// - auditId (ref: Audit, required)
// - clauseId (ref: Clause, required)
// - question (string, required) - the checklist question
// - evidence (string) - evidence collected
// - finding (string) - detailed findings/observations
// - conformityStatus (enum, required): CONFORM, NON_CONFORM, NOT_APPLICABLE, OBSERVATION, OPPORTUNITY
// - attachments[] (file paths/URLs)
// - verifiedById (ref: User) - auditor who verified
// - verifiedAt (Date)
// - nonConformityId (ref: NonConformity) - if NON_CONFORM, link to NC
// - createdAt, updatedAt
//
// Indexes: compound (auditId + clauseId), auditId, conformityStatus
// One audit entry per clause per audit
