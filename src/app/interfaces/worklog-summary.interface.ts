/**
 * Interface defining the structure of a work log summary
 * Used for displaying team member work tracking in the ERP system
 */
export interface WorkLogSummary {
  /** User information and role details */
  user: {
    /** Full name of the user */
    name: string;
    /** Optional avatar image URL - gracefully handled if missing */
    avatarUrl?: string;
    /** User role determining styling and permissions */
    role: 'admin' | 'manager' | 'employee';
  };
  /** Week identifier in ISO format (e.g., "2025-W28") */
  week: string;
  /** Total hours worked in the specified week */
  totalHours: number;
  /** Name of the project the hours were logged against */
  projectName: string;
  /** Whether the current user can view detailed work log information */
  canViewDetails: boolean;
}
