import { Injectable, signal, effect } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  darkMode = signal<boolean>(
    localStorage.getItem('darkMode') === 'true' ||
      window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  constructor() {
    // Listen for system theme changes
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (e) => {
        if (!localStorage.getItem('userPreference')) {
          this.darkMode.set(e.matches);
        }
      });

    effect(() => {
      // Store theme preference in localStorage
      localStorage.setItem('userPreference', 'true');
      localStorage.setItem('darkMode', this.darkMode().toString());

      if (this.darkMode()) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    });
  }

  toggle() {
    this.darkMode.set(!this.darkMode());
  }
}
