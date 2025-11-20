// ==============================================
// MODULE: PROCESSES - MONGOOSE MODEL
// ==============================================
// Fields: name, code (unique within site), description, siteId (ref: Site), processOwnerId (ref: User), category (enum), isActive, createdAt, updatedAt
// Indexes: compound unique (siteId + code), siteId, category
// Represents business processes within sites that can be audited
