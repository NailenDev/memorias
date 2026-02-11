// Intro component — plays a fullscreen video then redirects to login
import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { APP_CONFIG } from '../../config/app.config';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.html',
  styleUrl: './intro.scss',
})
export class Intro implements OnInit, OnDestroy, AfterViewInit {
  videoPath = APP_CONFIG.intro.videoPath;
  private timer: ReturnType<typeof setTimeout> | null = null;
  fadeOut = false;

  @ViewChild('introVideo') videoRef!: ElementRef<HTMLVideoElement>;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Auto-navigate to login after configured duration
    this.timer = setTimeout(() => {
      this.triggerTransition();
    }, APP_CONFIG.intro.durationMs);
  }

  ngAfterViewInit(): void {
    // Force play the video (handles browser autoplay restrictions)
    const video = this.videoRef?.nativeElement;
    if (video) {
      video.muted = true;
      video.play().catch(() => {
        // Autoplay blocked — video will remain paused, but timer still redirects
        console.warn('Autoplay blocked by browser');
      });
    }
  }

  ngOnDestroy(): void {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  skipIntro(): void {
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.triggerTransition();
  }

  private triggerTransition(): void {
    this.fadeOut = true;
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 800);
  }
}