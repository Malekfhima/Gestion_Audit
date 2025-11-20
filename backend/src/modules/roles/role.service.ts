// ==============================================
// MODULE: ROLES - SERVICE LAYER
// ==============================================
// Business logic for role management
//
// Methods:
// - createRole(dto): Create new role, check name unique
// - getRole(id): Get role by ID
// - updateRole(id, dto): Update role, prevent system role modification
// - deleteRole(id): Delete role, prevent system role deletion, check no users have this role
// - getAllRoles(pagination): Get all roles with pagination
// - assignPermissionsToRole(roleId, permissions[]): Add permissions to role
// - removePermissionsFromRole(roleId, permissions[]): Remove permissions
// - getRolePermissions(roleId): Get all permissions for a role
//
// Validation:
// - Role name must be unique
// - Cannot delete/modify system roles (ADMIN, USER, etc.)
// - Cannot delete role if users are assigned to it
