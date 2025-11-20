// ==============================================
// MODULE: NORMS - CLAUSE MODEL
// ==============================================
// Schema for norm clauses (sections within a norm)
//
// Fields:
// - normId: ObjectId (ref: 'Norm', required)
// - clauseNumber: string (required) - e.g., '4.1', '7.5.3'
// - title: string (required)
// - description: string
// - requirements: string[] - array of specific requirements
// - parentClauseId?: ObjectId (ref: 'Clause') - for hierarchical clauses
// - level: number - hierarchy level (1 for top-level, 2 for sub-clause, etc.)
// - createdAt, updatedAt
//
// Indexes:
// - normId + clauseNumber: compound unique
// - normId: for querying all clauses of a norm
//
// Used for mapping audit checklist items to specific norm clauses
