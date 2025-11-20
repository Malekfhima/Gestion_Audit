// ==============================================
// MODULE: LEGAL - LEGAL REQUIREMENT MODEL
// ==============================================
// Schema for legal/regulatory requirements
//
// Fields:
// - requirementNumber (unique, auto-generated), title, reference (e.g., law number), description
// - category (enum), jurisdiction (string, e.g., 'France', 'EU'), authority (regulatory body)
// - effectiveDate, expiryDate (if temporary), reviewDate (next compliance review)
// - url (link to official text), attachments[]
// - applicableSites[] (refs: Site) - which sites must comply
// - responsibleId (ref: User) - person responsible for compliance
// - isActive, createdAt, updatedAt
//
// Indexes: requirementNumber (unique), category, jurisdiction, effectiveDate
