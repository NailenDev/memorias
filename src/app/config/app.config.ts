// Central configuration file — edit ONLY this file to change assets, credentials, categories, etc.

export const APP_CONFIG = {
  // Login credentials (parameterizable)
  auth: {
    username: 'Denayra',
    password: '161708',
    tokenKey: 'netflix_clone_token',
  },

  // Intro video settings
  intro: {
    videoPath: 'assets/videos/intro.mp4',
    durationMs: 6000, // Auto-skip after 6 seconds
  },

  // Profile displayed after login
  profile: {
    name: 'Denayra',
    avatarPath: 'assets/fotos/avatar.jpg',
  },

  // Media categories — add/remove items here, UI updates automatically via *ngFor
  categories: [
    {
      id: 'recuerdos',
      nameKey: 'CATEGORIES.MEMORIES', // i18n key
      type: 'photos' as const,
      items: [
        'assets/fotos/1.jpg',
        'assets/fotos/2.jpg',
        'assets/fotos/3.jpg',
        'assets/fotos/4.jpg',
        'assets/fotos/5.jpg',
        'assets/fotos/6.jpg',
      ],
    },
    {
      id: 'aventuras',
      nameKey: 'CATEGORIES.ADVENTURES',
      type: 'photos' as const,
      items: [
        'assets/fotos/7.jpg',
        'assets/fotos/8.jpg',
        'assets/fotos/9.jpg',
      ],
    },
    {
      id: 'videos',
      nameKey: 'CATEGORIES.VIDEOS',
      type: 'videos' as const,
      items: [
        'assets/videos/video1.mp4',
        'assets/videos/video2.mp4',
      ],
    },
  ],

  // Supported languages
  i18n: {
    defaultLang: 'es',
    available: ['es', 'en', 'it'],
  },

  // Theming (referenced in SCSS via CSS custom properties)
  theme: {
    primaryColor: '#E50914',    // Netflix red
    backgroundColor: '#141414', // Netflix dark
    surfaceColor: '#181818',
    textColor: '#FFFFFF',
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
  },
};

// TypeScript types for config
export type MediaCategory = (typeof APP_CONFIG.categories)[number];
export type MediaType = 'photos' | 'videos';