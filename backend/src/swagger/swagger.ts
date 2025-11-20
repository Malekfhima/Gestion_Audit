// ==============================================
// SWAGGER / OPENAPI CONFIGURATION
// ==============================================
// This file configures Swagger UI for API documentation
//
// IMPORTS NEEDED:
// - swaggerJsdoc: for generating OpenAPI spec from JSDoc comments
// - swaggerUi: for serving Swagger UI
// - config: for API version and server URL
//
// SWAGGER DEFINITION:
// const swaggerDefinition = {
//   openapi: '3.0.0',
//   info: {
//     title: 'Audit Management System API',
//     version: '1.0.0',
//     description: 'RESTful API for managing audits, non-conformities, and compliance',
//     contact: {
//       name: 'API Support',
//       email: 'support@example.com'
//     },
//     license: {
//       name: 'MIT',
//       url: 'https://opensource.org/licenses/MIT'
//     }
//   },
//   servers: [
//     {
//       url: 'http://localhost:4000/api',
//       description: 'Development server'
//     },
//     {
//       url: 'https://api.example.com/api',
//       description: 'Production server'
//     }
//   ],
//   components: {
//     securitySchemes: {
//       bearerAuth: {
//         type: 'http',
//         scheme: 'bearer',
//         bearerFormat: 'JWT'
//       }
//     }
//   },
//   security: [
//     {
//       bearerAuth: []
//     }
//   ]
// }
//
// SWAGGER OPTIONS:
// const options = {
//   definition: swaggerDefinition,
//   apis: ['./src/modules/**/*.routes.ts', './src/modules/**/*.controller.ts']
//   // Swagger will scan these files for JSDoc comments
// }
//
// GENERATE SPEC:
// const swaggerSpec = swaggerJsdoc(options)
//
// SETUP FUNCTION:
// export const setupSwagger = (app: Express) => {
//   app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, {
//     explorer: true,
//     customCss: '.swagger-ui .topbar { display: none }',
//     customSiteTitle: 'Audit Management API Docs'
//   }))
// }
//
// JSDOC COMMENT EXAMPLES (to add in route files):
//
// /**
//  * @swagger
//  * /auth/login:
//  *   post:
//  *     summary: User login
//  *     tags: [Authentication]
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             type: object
//  *             required:
//  *               - email
//  *               - password
//  *             properties:
//  *               email:
//  *                 type: string
//  *                 format: email
//  *               password:
//  *                 type: string
//  *                 format: password
//  *     responses:
//  *       200:
//  *         description: Login successful
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: object
//  *               properties:
//  *                 success:
//  *                   type: boolean
//  *                 data:
//  *                   type: object
//  *                   properties:
//  *                     user:
//  *                       $ref: '#/components/schemas/User'
//  *                     accessToken:
//  *                       type: string
//  *                     refreshToken:
//  *                       type: string
//  *       401:
//  *         description: Invalid credentials
//  */
//
// SCHEMA DEFINITIONS (to add):
// /**
//  * @swagger
//  * components:
//  *   schemas:
//  *     User:
//  *       type: object
//  *       properties:
//  *         id:
//  *           type: string
//  *         firstName:
//  *           type: string
//  *         lastName:
//  *           type: string
//  *         email:
//  *           type: string
//  *           format: email
//  *         role:
//  *           type: string
//  *           enum: [ADMIN, MANAGER, AUDITOR, USER]
//  *     Audit:
//  *       type: object
//  *       properties:
//  *         id:
//  *           type: string
//  *         title:
//  *           type: string
//  *         status:
//  *           type: string
//  *           enum: [PLANNED, IN_PROGRESS, COMPLETED, CANCELLED]
//  *     Error:
//  *       type: object
//  *       properties:
//  *         success:
//  *           type: boolean
//  *         statusCode:
//  *           type: number
//  *         message:
//  *           type: string
//  */
//
// ACCESS SWAGGER UI:
// - Navigate to http://localhost:4000/api-docs
// - Interactive API documentation with "Try it out" feature
//
// EXPORT:
// - export { setupSwagger, swaggerSpec }
//
// USAGE IN APP.TS:
// - import { setupSwagger } from './swagger/swagger'
// - setupSwagger(app)
