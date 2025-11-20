// ==============================================
// MODULE: NOTIFICATIONS - MONGOOSE MODEL
// ==============================================
// Fields:
// - recipientId (ref: User, required), type (enum), title, message
// - relatedEntityType (enum: AUDIT, NC, ACTION, etc.), relatedEntityId (ObjectId)
// - priority (enum, default: MEDIUM), status (enum, default: UNREAD)
// - readAt (Date), createdAt
//
// Indexes: compound (recipientId + status), recipientId, createdAt (descending)
// For in-app notifications and email/push notification triggers
