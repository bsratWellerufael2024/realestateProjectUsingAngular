import { CommonModule } from '@angular/common';
import { Component, effect, HostBinding, signal } from '@angular/core';
import { ThemeService } from '../../../core/service/theme.service';
import { RouterModule } from '@angular/router';
import { LangService } from '../../../services/lang.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isMobileMenuOpen = signal<boolean>(false);

  constructor(
    private translate: TranslateService,
    private langService: LangService,
    public themeService: ThemeService
  ) {}

  toggleMobileMenu() {
    this.isMobileMenuOpen.update((value) => !value);
  }

  changeLang(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const lang = selectElement.value;
    this.langService.setCurrentLang(lang);
    this.translate.use(this.langService.getCurrentLang());
  }
  // darkMode = signal<boolean>(
  //   JSON.parse(window.localStorage.getItem('darkMode') ?? 'false')
  // );

  // @HostBinding('class.dark') get mode() {
  //   return this.darkMode();
  // }

  // constructor() {
  //   effect(() => {
  //     window.localStorage.setItem('darkMode', JSON.stringify(this.darkMode()));
  //   });
  // }
}
