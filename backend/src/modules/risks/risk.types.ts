// ==============================================
// MODULE: RISKS - TYPE DEFINITIONS
// ==============================================
// CreateRiskDto: { title, description, category, probability, impact, siteId, processId, ownerIdidentifiedById }
// UpdateRiskDto: all fields optional
// RiskCategory: 'STRATEGIC' | 'OPERATIONAL' | 'FINANCIAL' | 'COMPLIANCE' | 'REPUTATIONAL' | 'ENVIRONMENTAL' | 'SAFETY'
// RiskProbability: 1-5 (1=rare, 5=almost certain)
// RiskImpact: 1-5 (1=negligible, 5=catastrophic)
// RiskLevel: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL' (calculated from probability × impact)
// RiskStatus: 'IDENTIFIED' | 'ASSESSED' | 'MITIGATED' | 'MONITORED' | 'CLOSED'
