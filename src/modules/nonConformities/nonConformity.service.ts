// ==============================================
// MODULE: NON-CONFORMITIES - SERVICE LAYER
// ==============================================
// Methods:
// - createNC(dto): Generate NC number, validate references, create NC, link to audit entry
// - getNC(id), updateNC(id, dto), deleteNC(id)
// - getAllNCs(filters, pagination): Filter by audit, status, severity, assignedTo, dates
// - assignNC(id, userId, targetDate): Assign NC to user with target closure date
// - updateStatus(id, status): Change status with validation (OPEN → IN_TREATMENT → CLOSED → VERIFIED)
// - addRootCause(id, rootCause): Document root cause analysis
// - addImmediateAction(id, action): Document immediate corrective action
// - closeNC(id): Close NC (requires corrective actions to be completed)
// - verifyNC(id, verifiedById): Verify NC closure and effectiveness
// - reopenNC(id, reason): Reopen closed NC if verification fails
// - getNCStat istics(): Get statistics (by status, severity, site, etc.)
//
// Validation: Cannot close NC without corrective actions, status workflow
