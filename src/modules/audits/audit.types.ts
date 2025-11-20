// ==============================================
// MODULE: AUDITS - TYPE DEFINITIONS
// ==============================================
// CreateAuditDto: { title, type, normId, siteId, processIds[], leadAuditorId, auditorIds[], plannedStartDate, plannedEndDate, scope, objectives }
// UpdateAuditDto: all fields optional
// AuditStatus: 'PLANNED' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED'
// AuditType: 'INTERNAL' | 'EXTERNAL' | 'CERTIFICATION' | 'SURVEILLANCE' | 'FOLLOW_UP'
// AuditResponse: { id, title, type, status, norm, site, processes[], auditors[], dates, conformityScore, createdAt }
