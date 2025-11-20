// ==============================================
// ROUTES.TS - MAIN ROUTES AGGREGATOR
// ==============================================
// This file aggregates all module routes into a single router
// It serves as the central routing configuration
//
// IMPORTS NEEDED:
// - express.Router: To create a router instance
// - authRoutes from './modules/auth/auth.routes'
// - userRoutes from './modules/users/user.routes'
// - roleRoutes from './modules/roles/role.routes'
// - normRoutes from './modules/norms/norm.routes'
// - siteRoutes from './modules/sites/site.routes'
// - processRoutes from './modules/processes/process.routes'
// - auditRoutes from './modules/audits/audit.routes'
// - auditEntryRoutes from './modules/auditEntries/auditEntry.routes'
// - nonConformityRoutes from './modules/nonConformities/nonConformity.routes'
// - correctiveActionRoutes from './modules/correctiveActions/correctiveAction.routes'
// - riskRoutes from './modules/risks/risk.routes'
// - legalRoutes from './modules/legal/legal.routes'
// - notificationRoutes from './modules/notifications/notification.routes'
// - reportRoutes from './modules/reports/report.routes'
// - dashboardRoutes from './modules/dashboard/dashboard.routes'
//
// RESPONSIBILITIES:
// 1. Create main router: const router = express.Router()
//
// 2. Mount all module routes with appropriate prefixes:
//    - router.use('/auth', authRoutes)
//    - router.use('/users', userRoutes)
//    - router.use('/roles', roleRoutes)
//    - router.use('/norms', normRoutes)
//    - router.use('/sites', siteRoutes)
//    - router.use('/processes', processRoutes)
//    - router.use('/audits', auditRoutes)
//    - router.use('/audit-entries', auditEntryRoutes)
//    - router.use('/non-conformities', nonConformityRoutes)
//    - router.use('/corrective-actions', correctiveActionRoutes)
//    - router.use('/risks', riskRoutes)
//    - router.use('/legal', legalRoutes)
//    - router.use('/notifications', notificationRoutes)
//    - router.use('/reports', reportRoutes)
//    - router.use('/dashboard', dashboardRoutes)
//
// 3. Optional: Add API documentation route
//    - router.use('/docs', swaggerRoutes) - if using Swagger
//
// 4. Export the router:
//    - export default router
//
// URL STRUCTURE EXAMPLE:
// If app.ts mounts this router at '/api', then:
// - /api/auth/login
// - /api/users
// - /api/audits
// - /api/non-conformities
// etc.
//
// NOTE:
// - Keep routes organized and grouped logically
// - Use consistent naming conventions (kebab-case for URLs)
// - Consider versioning: '/api/v1' if you plan multiple API versions
