// ==============================================
// MODULE: NORMS - MONGOOSE MODEL
// ==============================================
// Schema for audit norms/standards
//
// Fields:
// - name: string (required) - e.g., 'ISO 9001:2015'
// - code: string (unique, required) - e.g., 'ISO9001'
// - description: string
// - version: string - e.g., '2015'
// - status: enum ['ACTIVE', 'DRAFT', 'ARCHIVED'] (default: 'ACTIVE')
// - category?: string - e.g., 'Quality', 'Environment', 'Safety'
// - createdBy: ObjectId (ref: 'User')
// - createdAt, updatedAt: timestamps
//
// Indexes:
// - code: unique
// - status: for filtering
