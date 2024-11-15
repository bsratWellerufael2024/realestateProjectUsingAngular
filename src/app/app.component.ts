import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LangService } from './services/lang.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HttpClientModule, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'project-realestate';
  switchLanguage(lang: string) {
    window.location.href = `/${lang}/`;
  }

  // ############################################

  changeLang(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const lang = selectElement.value;
    this.langService.setCurrentLang(lang);
    // this.translate.use(this.langService.getCurrentLang());
  }

  constructor(
    private translate: TranslateService,
    private langService: LangService
  ) {
    // Set default language
    // translate.setDefaultLang(this.langService.getCurrentLang());
    // // Use a specific language
    // translate.use(this.langService.getCurrentLang());
  }
  // ############################################
}
