// ==============================================
// MODULE: NORMS - TYPE DEFINITIONS
// ==============================================
// Types for audit norms/standards (ISO 9001, ISO 14001, etc.)
//
// CreateNormDto: { name, code, description, version, clauses[], status }
// UpdateNormDto: { name?, description?, version?, status? }
// NormResponse: { id, name, code, description, version, clauses[], status, createdAt }
// NormStatus: 'ACTIVE' | 'DRAFT' | 'ARCHIVED'
