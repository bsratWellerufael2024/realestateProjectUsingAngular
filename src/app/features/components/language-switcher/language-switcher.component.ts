import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [NgFor],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.css'
})
export class LanguageSwitcherComponent {
  constructor(private translateService: TranslateService) {}

  languages = [
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Español' }
  ];

  changeLanguage(langCode: string) {
    // Add your language switching logic here
    console.log('Language changed to:', langCode);
  }
}


