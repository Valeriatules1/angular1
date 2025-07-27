import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorklogSummaryCardComponent } from './components/worklog-summary-card/worklog-summary-card.component';
import { WorkLogSummary } from './interfaces/worklog-summary.interface';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, WorklogSummaryCardComponent],
  template: `
    <div class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <!-- Dark Mode Toggle -->
      <button 
        (click)="toggleDarkMode()" 
        class="dark-mode-toggle"
        aria-label="Toggle dark mode"
      >
        <svg *ngIf="!isDarkMode" class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
        </svg>
        <svg *ngIf="isDarkMode" class="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
        </svg>
      </button>

      <div class="container mx-auto px-4 py-8">
        <!-- Header -->
        <div class="text-center mb-8">
          <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Worklog Summary Dashboard
          </h1>
          <p class="text-gray-600 dark:text-gray-400">
            ERP System - Team Work Tracking
          </p>
        </div>

        <!-- Worklog Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          <worklog-summary-card 
            *ngFor="let worklog of worklogData; trackBy: trackByFn" 
            [data]="worklog"
          ></worklog-summary-card>
        </div>

        <!-- Empty State -->
        <div *ngIf="worklogData.length === 0" class="text-center py-12">
          <div class="text-gray-400 dark:text-gray-600 mb-4">
            <svg class="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
          </div>
          <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">No work logs available</h3>
          <p class="text-gray-600 dark:text-gray-400">Work log summaries will appear here when available.</p>
        </div>
      </div>

      <div class="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
      <div class="text-center">
        <p class="text-sm text-gray-500 dark:text-gray-400">
          Built with Angular 16+ and Tailwind CSS
        </p>
        <div class="flex justify-center items-center space-x-4 mt-2">
          <span class="inline-flex items-center space-x-1 text-xs text-blue-600 dark:text-blue-400">
            <i data-feather="shield" class="w-3 h-3"></i>
            <span>Admin</span>
          </span>
          <span class="inline-flex items-center space-x-1 text-xs text-green-600 dark:text-green-400">
            <i data-feather="users" class="w-3 h-3"></i>
            <span>Manager</span>
          </span>
          <span class="inline-flex items-center space-x-1 text-xs text-gray-600 dark:text-gray-400">
            <i data-feather="user" class="w-3 h-3"></i>
            <span>Employee</span>
          </span>
        </div>
      </div>
    </div>
    </div>
  `
})
export class AppComponent implements OnInit {
  isDarkMode = false;

  // Demo data showcasing different roles and scenarios
  worklogData: WorkLogSummary[] = [
    {
      user: {
        name: 'Sarah Chen',
        avatarUrl: 'https://images.unsplash.com/photo-1494790108755-2616b612b5ab?w=150&h=150&fit=crop&crop=face',
        role: 'admin'
      },
      week: '2025-W30',
      totalHours: 42.5,
      projectName: 'ERP System Upgrade',
      canViewDetails: true
    },
    {
      user: {
        name: 'Marcus Rodriguez',
        role: 'manager'
      },
      week: '2025-W30',
      totalHours: 38.0,
      projectName: 'Customer Portal Development',
      canViewDetails: true
    },
    {
      user: {
        name: 'Emily Johnson',
        avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
        role: 'employee'
      },
      week: '2025-W30',
      totalHours: 40.0,
      projectName: 'Mobile App Testing',
      canViewDetails: false
    },
    {
      user: {
        name: 'Valeria Tuleshova',
        avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
        role: 'employee'
      },
      week: '2025-W30',
      totalHours: 40.0,
      projectName: 'Mobile App Testing',
      canViewDetails: false
    }
  ];

  ngOnInit() {
    // Check for saved theme preference or default to light mode
    this.isDarkMode = localStorage.getItem('theme') === 'dark' ||
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    this.applyTheme();
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    this.applyTheme();
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
  }

  private applyTheme() {
    if (this.isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  trackByFn(index: number, item: WorkLogSummary): string {
    return `${item.user.name}-${item.week}`;
  }
}
