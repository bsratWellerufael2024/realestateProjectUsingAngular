import { CommonModule } from '@angular/common';
import { Component, effect, HostBinding, signal } from '@angular/core';
import { ThemeService } from '../../../core/service/theme.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(public themeService: ThemeService) {}
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
