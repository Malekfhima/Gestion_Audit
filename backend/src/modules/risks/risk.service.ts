// ==============================================
// MODULE: RISKS - SERVICE LAYER
// ==============================================
// Methods:
// - createRisk(dto): Generate risk number, calculate risk level/score, create risk
// - getRisk(id), updateRisk(id, dto), deleteRisk(id)
// - getAllRisks(filters, pagination): Filter by status, level, site, process, category
// - assessRisk(id, probability, impact): Update probability/impact, recalculate level
// - addMitigationPlan(id, plan): Document mitigation strategy
// - updateResidualRisk(id, probability, impact): Update residual risk after mitigation
// - updateStatus(id, status): Change risk status
// - assignOwner(id, ownerId): Assign risk owner
// - getRiskMatrix(): Get risk matrix data (probability vs impact grid)
// - getRisksByLevel(level): Get all risks by level (HIGH, CRITICAL)
// - linkRiskToEntity(riskId, entityType, entityId, linkType): Create risk link
// - unlinkRisk(riskId, entityId): Remove risk link
// - getRiskLinks(riskId): Get all links for a risk
// - getRiskStatistics(): Statistics by level, status, category
//
// Validation: Probability and impact 1-5, calculate risk level automatically
// Risk level formula: score 1-6=LOW, 7-12=MEDIUM, 13-19=HIGH, 20-25=CRITICAL
