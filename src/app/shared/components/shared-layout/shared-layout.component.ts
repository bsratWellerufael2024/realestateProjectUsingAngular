import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../../../features/components/header/header.component";

@Component({
  selector: 'app-shared-layout',
  standalone: true,
  imports: [NavBarComponent, FooterComponent, RouterOutlet, HeaderComponent],
  templateUrl: './shared-layout.component.html',
  styleUrl: './shared-layout.component.css',
})
export class SharedLayoutComponent {}
