import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkLogSummary } from '../../interfaces/worklog-summary.interface';

@Component({
  selector: 'worklog-summary-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './worklog-summary-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorklogSummaryCardComponent {
  @Input({ required: true }) data!: WorkLogSummary;

  /**
   * Generates user initials from the full name for avatar fallback
   * Takes first letter of first name and first letter of last name
   */
  getUserInitials(name: string): string {
    return name
      .split(' ')
      .map(part => part.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  }

  /**
   * Formats the week string to be more user-friendly
   * Converts "2025-W30" to "Week 30, 2025"
   */
  formatWeek(week: string): string {
    const [year, weekNumber] = week.split('-W');
    return `Week ${weekNumber}, ${year}`;
  }

  /**
   * Formats hours to display with appropriate decimal places
   * Shows whole numbers without decimals, decimals when needed
   */
  formatHours(hours: number): string {
    return hours % 1 === 0 ? hours.toString() : hours.toFixed(1);
  }

  /**
   * Handles the view details button click
   * In a real application, this would navigate or emit an event
   */
  onViewDetails(): void {
    console.log('View details clicked for:', this.data.user.name);
    // In a real implementation, this would:
    // - Navigate to a detailed view
    // - Emit an event to parent component
    // - Open a modal with detailed information
  }

  /**
   * Handles avatar image load errors
   * This method can be called from template to handle broken image URLs
   */
  onAvatarError(event: Event): void {
    const img = event.target as HTMLImageElement;
    img.style.display = 'none';
  }
}
