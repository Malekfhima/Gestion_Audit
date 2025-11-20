// ==============================================
// MODULE: LEGAL - COMPLIANCE RECORD MODEL
// ==============================================
// Tracks compliance status for each requirement
//
// Fields:
// - legalRequirementId (ref: LegalRequirement, required)
// - siteId (ref: Site, required) - compliance per site
// - complianceStatus (enum, required)
// - assessmentDate, assessedById (ref: User)
// - evidence (string), evidenceAttachments[]
// - gaps (string) - identified compliance gaps
// - actionPlanId (ref: CorrectiveAction) - if non-compliant
// - nextReviewDate
// - createdAt, updatedAt
//
// Indexes: compound unique (legalRequirementId + siteId), complianceStatus
// One compliance record per requirement per site
