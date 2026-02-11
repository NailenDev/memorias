// Dashboard component — Netflix-style home with dynamic carousels from config
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UpperCasePipe } from '@angular/common';
import { APP_CONFIG, MediaCategory } from '../../config/app.config';

// Import translations directly
import esLang from '../../../assets/i18n/es.json';
import enLang from '../../../assets/i18n/en.json';
import itLang from '../../../assets/i18n/it.json';

const TRANSLATIONS: Record<string, any> = { es: esLang, en: enLang, it: itLang };

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
  imports: [UpperCasePipe],
})
export class Dashboard implements OnInit {
  profileName = APP_CONFIG.profile.name;
  categories: MediaCategory[] = APP_CONFIG.categories;
  activeVideo: string | null = null;

  languages = APP_CONFIG.i18n.available;
  currentLang = APP_CONFIG.i18n.defaultLang;

  constructor(private router: Router) {}

  ngOnInit(): void {
    if (!localStorage.getItem(APP_CONFIG.auth.tokenKey)) {
      this.router.navigate(['/login']);
    }
  }

  // Translate a key like 'CATEGORIES.MEMORIES' using loaded JSON
  t(key: string): string {
    const lang = TRANSLATIONS[this.currentLang] || TRANSLATIONS['es'];
    const parts = key.split('.');
    let result: any = lang;
    for (const part of parts) {
      result = result?.[part];
    }
    return result || key;
  }

  switchLang(lang: string): void {
    this.currentLang = lang;
  }

  scroll(container: HTMLElement, direction: 'left' | 'right'): void {
    const scrollAmount = container.clientWidth * 0.75;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  }

  openVideo(videoPath: string): void {
    this.activeVideo = videoPath;
  }

  closeVideo(): void {
    this.activeVideo = null;
  }

  logout(): void {
    localStorage.removeItem(APP_CONFIG.auth.tokenKey);
    this.router.navigate(['/login']);
  }

  onImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    img.src = 'data:image/svg+xml,' + encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" width="300" height="170" fill="%23333"><rect width="300" height="170"/><text x="150" y="90" text-anchor="middle" fill="%23666" font-size="14">Imagen no disponible</text></svg>'
    );
  }

  getVideoThumb(videoPath: string): string {
    return videoPath.replace(/\.(mp4|webm)$/, '.jpg');
  }
}