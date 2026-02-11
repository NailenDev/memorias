// Profile selection component — Netflix "Who's watching?" screen
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { APP_CONFIG } from '../../config/app.config';

@Component({
  selector: 'app-profile-select',
  templateUrl: './profile-select.html',
  styleUrl: './profile-select.scss',
})
export class ProfileSelect {
  profileName = APP_CONFIG.profile.name;
  avatarPath = APP_CONFIG.profile.avatarPath;
  avatarError = false;

  constructor(private router: Router) {
    // Redirect to login if not authenticated
    if (!localStorage.getItem(APP_CONFIG.auth.tokenKey)) {
      this.router.navigate(['/login']);
    }
  }

  // Navigate to dashboard on profile click
  enterDashboard(): void {
    this.router.navigate(['/dashboard']);
  }

  // Handle missing avatar image
  onAvatarError(): void {
    this.avatarError = true;
  }

  // Logout — clear session and redirect to login
  logout(): void {
    localStorage.removeItem(APP_CONFIG.auth.tokenKey);
    this.router.navigate(['/login']);
  }
}