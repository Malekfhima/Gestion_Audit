// ==============================================
// MODULE: NOTIFICATIONS - CONTROLLER LAYER
// ==============================================
// Endpoints:
// - GET / - Get user's notifications (authenticated user)
// - GET /unread-count - Get unread count
// - GET /:id - Get notification details
// - PATCH /:id/read - Mark as read
// - PATCH /read-all - Mark all as read
// - DELETE /:id - Delete notification
// - POST /:id/archive - Archive notification
//
// All endpoints require authentication, users can only access their own notifications
