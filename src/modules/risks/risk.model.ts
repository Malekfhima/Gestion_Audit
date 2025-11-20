// ==============================================
// MODULE: RISKS - MONGOOSE MODEL
// ==============================================
// Fields:
// - riskNumber (unique, auto-generated), title, description, category (enum)
// - probability (1-5), impact (1-5), riskLevel (calculated, enum), riskScore (probability × impact)
// - status (enum, default: IDENTIFIED)
// - siteId (ref: Site), processId (ref: Process), ownerId (ref: User)
// - identifiedById (ref: User), identifiedAt
// - mitigationPlan (string), contingencyPlan (string)
// - residualProbability (after mitigation), residualImpact, residualRiskLevel
// - reviewDate (next review date)
// - createdAt, updatedAt
//
// Indexes: riskNumber (unique), status, riskLevel, siteId, processId, ownerId
// Virtual: riskScore calculation
