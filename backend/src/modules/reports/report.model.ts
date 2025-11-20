// ==============================================
// MODULE: REPORTS - MONGOOSE MODEL
// ==============================================
// Schema for storing generated reports
//
// Fields:
// - reportNumber (unique, auto-generated), name, type (enum), format (enum)
// - filters (object - stores report parameters), status (enum, default: GENERATING)
// - filePath (string - path to generated file), fileSize (number)
// - generatedById (ref: User), generatedAt, expiresAt (auto-delete old reports)
// - error (string - if generation failed)
// - createdAt
//
// Indexes: reportNumber (unique), generatedById, expiresAt (TTL index), type
// Reports can be generated on-demand or scheduled
