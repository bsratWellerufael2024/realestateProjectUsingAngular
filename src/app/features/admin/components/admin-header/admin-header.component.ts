import { CommonModule } from '@angular/common';
import { Component, effect, HostBinding, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeService } from '../../../../core/service/theme.service';

@Component({
  selector: 'app-admin-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './admin-header.component.html',
  styleUrl: './admin-header.component.css',
})
export class AdminHeaderComponent {
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
