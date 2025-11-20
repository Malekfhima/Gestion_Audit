// ==============================================
// MODULE: NORMS - REPOSITORY LAYER
// ==============================================
// Database operations for norms, clauses, and checklists
//
// NormRepository methods:
// - create(data): Create norm
// - findById(id): Get norm by ID with clauses populated
// - findByCode(code): Get norm by code
// - update(id, data): Update norm
// - delete(id): Delete norm
// - find(filters, pagination): Get all norms
// - count(filters): Count norms
//
// ClauseRepository methods:
// - create(data): Create clause
// - findByNormId(normId): Get all clauses for a norm
// - findByClauseNumber(normId, clauseNumber): Get specific clause
// - update(id, data): Update clause
// - delete(id): Delete clause
//
// ChecklistRepository methods:
// - create(data): Create checklist template
// - findById(id): Get checklist with clauses populated
// - findByNormId(normId): Get checklists for a norm
// - update(id, data): Update checklist
// - delete(id): Delete checklist
