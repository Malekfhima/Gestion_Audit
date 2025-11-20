// ==============================================
// MODULE: CORRECTIVE ACTIONS - SERVICE LAYER
// ==============================================
// Methods:
// - createAction(dto): Generate action number, validate NC exists, create action
// - getAction(id), updateAction(id, dto), deleteAction(id)
// - getAllActions(filters, pagination): Filter by NC, status, responsible, dueDate
// - getActionsByNC(ncId): Get all actions for a specific NC
// - updateStatus(id, status): Update action status with workflow validation
// - markAsCompleted(id, completedDate, evidence): Mark action as completed
// - verifyEffectiveness(id, verifiedById, check, isEffective): Verify if action was effective
// - markAsIneffective(id, reason): Mark action as ineffective (requires new action)
// - getOverdueActions(): Get actions past due date but not completed
// - getActionsStatistics(): Statistics by status, type, responsible
//
// Validation: Status workflow (PLANNED → IN_PROGRESS → COMPLETED → VERIFIED), NC must be open
