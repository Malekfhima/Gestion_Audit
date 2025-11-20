// ==============================================
// MODULE: RISKS - RISK LINK MODEL
// ==============================================
// Links risks to audits, NCs, or other entities
//
// Fields:
// - riskId (ref: Risk, required)
// - linkedEntityType (enum: 'AUDIT', 'NON_CONFORMITY', 'CORRECTIVE_ACTION', 'LEGAL_REQUIREMENT')
// - linkedEntityId (ObjectId, required)
// - linkType (enum: 'IDENTIFIED_BY', 'RELATED_TO', 'MITIGATES')
// - notes (string)
// - createdAt
//
// Allows tracking risk relationships across the system
