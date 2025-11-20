// ==============================================
// MODULE: DASHBOARD - SERVICE LAYER
// ==============================================
// No model or repository (dashboard aggregates data from other modules)
//
// Methods:
// - getOverviewStats(filters): Get main dashboard statistics
//   * Total audits, NCs, actions, risks
//   * Counts by status, severity, priority
//
// - getAuditStats(filters): Audit-specific statistics
//   * Audits by status, type, site
//   * Average conformity scores
//   * Audits timeline (planned vs actual)
//
// - getNCStats(filters): NC statistics
//   * NCs by status, severity, category
//   * Open NCs trend over time
//   * NCs by site/process
//
// - getActionStats(filters): Corrective action statistics
//   * Actions by status
//   * Overdue actions count
//   * Completion rate
//
// - getRiskStats(filters): Risk statistics
//   * Risks by level, category
//   * Risk matrix data
//   * Top risks
//
// - getComplianceStats(filters): Compliance statistics
//   * Compliance by site
//   * Non-compliant requirements count
//   * Upcoming reviews
//
// - getTimeSeriesData(metric, dateRange, filters): Get trend data
//   * e.g., NCs over time, audits per month
//
// - getTopIssues(filters): Get top issues requiring attention
//   * Overdue actions, critical risks, major NCs
//
// All methods call respective service/repository methods to aggregate data
