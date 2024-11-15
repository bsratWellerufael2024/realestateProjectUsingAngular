import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LangService {
  private currentLang: string;

  constructor(private translate: TranslateService) {
    this.currentLang = localStorage.getItem('selectedLang') || 'en';
    this.translate.use(this.currentLang); // Set the initial language globally
  }

  getCurrentLang(): string {
    return this.currentLang;
  }

  setCurrentLang(lang: string): void {
    this.currentLang = lang;
    localStorage.setItem('selectedLang', lang);
    this.translate.use(lang); // Apply new language globally
  }
}
