// ==============================================
// MODULE: NORMS - SERVICE LAYER
// ==============================================
// Business logic for norms, clauses, and checklists
//
// Norm methods:
// - createNorm(dto): Create norm with validation
// - getNorm(id): Get norm with clauses
// - updateNorm(id, dto): Update norm
// - deleteNorm(id): Delete norm (check not used in active audits)
// - getAllNorms(filters, pagination): Get norms
// - activateNorm(id): Set status to ACTIVE
// - archiveNorm(id): Set status to ARCHIVED
//
// Clause methods:
// - addClause(normId, dto): Add clause to norm
// - updateClause(id, dto): Update clause
// - deleteClause(id): Delete clause
// - getClausesByNorm(normId): Get all clauses for a norm with hierarchy
//
// Checklist methods:
// - createChecklist(dto): Create checklist template
// - getChecklist(id): Get checklist with items
// - updateChecklist(id, dto): Update checklist
// - deleteChecklist(id): Delete checklist
// - duplicateChecklist(id, newName): Clone checklist
//
// Validation:
// - Norm code must be unique
// - Clause numbers must be unique within a norm
// - Cannot delete norm if used in audits
