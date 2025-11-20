// ==============================================
// MODULE: AUDITS - MONGOOSE MODEL
// ==============================================
// Fields:
// - title, auditNumber (unique, auto-generated), type (enum), status (enum, default: PLANNED)
// - normId (ref: Norm), siteId (ref: Site), processIds[] (ref: Process)
// - leadAuditorId (ref: User), auditorIds[] (ref: User), auditeeIds[] (ref: User)
// - plannedStartDate, plannedEndDate, actualStartDate, actualEndDate
// - scope (string), objectives (string)
// - conformityScore (number, 0-100, calculated from audit entries)
// - summary (string), conclusions (string), recommendations (string)
// - createdBy (ref: User), createdAt, updatedAt
//
// Indexes: auditNumber (unique), status, siteId, normId, plannedStartDate
// Virtual: duration (calculate from dates)
