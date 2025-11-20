// ==============================================
// MODULE: NOTIFICATIONS - SERVICE LAYER
// ==============================================
// Methods:
// - createNotification(dto): Create notification, optionally send email/push
// - sendNotification(recipientId, type, title, message, entityType?, entityId?): Convenience method
// - getNotifications(recipientId, filters, pagination): Get user's notifications (filter by status, type)
// - markAsRead(id), markAllAsRead(recipientId), archiveNotification(id)
// - deleteNotification(id), deleteOldNotifications(daysOld): Cleanup old notifications
// - getUnreadCount(recipientId): Get count of unread notifications
// - notifyAuditAssignment(auditId, auditorIds[]): Send notifications when audit assigned
// - notifyNCAssignment(ncId, assignedToId): Notify when NC assigned
// - notifyActionOverdue(actionId): Notify when action overdue
// - scheduleReminders(): Background job to send reminder notifications
//
// Integration: Can call email service or push notification service
