// ==============================================
// MODULE: LEGAL - SERVICE LAYER
// ==============================================
// LegalRequirement methods:
// - createRequirement(dto), getRequirement(id), updateRequirement(id, dto), deleteRequirement(id)
// - getAllRequirements(filters, pagination): Filter by category, jurisdiction, active
// - assignToSites(id, siteIds[]), assignResponsible(id, userId)
// - getRequirementsBySite(siteId): Get all requirements applicable to a site
// - getUpcomingReviews(): Get requirements due for review
//
// LegalCompliance methods:
// - assessCompliance(requirementId, siteId, dto): Create/update compliance record
// - getCompliance(requirementId, siteId): Get compliance record
// - updateComplianceStatus(id, status, evidence): Update compliance status
// - getComplianceReport(siteId): Get full compliance report for a site
// - getNonCompliantRequirements(): Get all non-compliant requirements
// - getComplianceStatistics(): Statistics by status, category, site
// - linkActionPlan(complianceId, actionPlanId): Link corrective action for non-compliance
//
// Validation: Effective date logic, compliance status changes, site assignment
