// ==============================================
// MODULE: CORRECTIVE ACTIONS - MONGOOSE MODEL
// ==============================================
// Fields:
// - actionNumber (unique, auto-generated), nonConformityId (ref: NonConformity, required)
// - description, actionType (enum), status (enum, default: PLANNED)
// - responsibleId (ref: User), dueDate, completedDate
// - resources (string), cost (number)
// - effectivenessCheck (string), effectivenessVerifiedById (ref: User), effectivenessVerifiedAt
// - attachments[]
// - createdById (ref: User), createdAt, updatedAt
//
// Indexes: actionNumber (unique), nonConformityId, status, responsibleId, dueDate
