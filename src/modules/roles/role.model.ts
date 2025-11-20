// ==============================================
// MODULE: ROLES - MONGOOSE MODEL
// ==============================================
// Schema for user roles and permissions
//
// Fields:
// - name: string (unique, required) - e.g., 'ADMIN', 'AUDITOR'
// - description: string
// - permissions: string[] - array of permission strings
//   * e.g., ['user:read', 'user:write', 'audit:create', 'audit:delete']
// - isSystemRole: boolean (default: false) - prevents deletion of system roles
// - createdAt, updatedAt: timestamps
//
// Indexes:
// - name: unique
//
// Used for fine-grained permission control beyond basic role checks
