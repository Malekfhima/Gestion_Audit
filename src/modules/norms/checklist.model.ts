// ==============================================
// MODULE: NORMS - CHECKLIST TEMPLATE MODEL
// ==============================================
// Schema for audit checklist templates based on norms
//
// Fields:
// - name: string (required)
// - normId: ObjectId (ref: 'Norm', required)
// - items: [{
//     clauseId: ObjectId (ref: 'Clause'),
//     question: string,
//     category: string,
//     order: number
//   }]
// - isDefault: boolean (default: false)
// - createdBy: ObjectId (ref: 'User')
// - createdAt, updatedAt
//
// Checklist templates can be reused across multiple audits
// Audit instances will reference these templates
