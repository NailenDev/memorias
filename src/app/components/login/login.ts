// Login component — Netflix-style login with credentials from config
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { APP_CONFIG } from '../../config/app.config';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrl: './login.scss',
  imports: [FormsModule],
})
export class Login {
  username = '';
  password = '';
  showError = false;
  isLoading = false;

  constructor(private router: Router) {
    // If already logged in, redirect to profile
    if (localStorage.getItem(APP_CONFIG.auth.tokenKey)) {
      this.router.navigate(['/profile']);
    }
  }

  onSubmit(): void {
    this.showError = false;
    this.isLoading = true;

    // Simulate a brief loading delay for UX
    setTimeout(() => {
      const { username, password } = APP_CONFIG.auth;

      if (this.username === username && this.password === password) {
        // Store simple token in localStorage
        const token = btoa(`${this.username}:${Date.now()}`);
        localStorage.setItem(APP_CONFIG.auth.tokenKey, token);
        this.router.navigate(['/profile']);
      } else {
        this.showError = true;
      }

      this.isLoading = false;
    }, 800);
  }
}