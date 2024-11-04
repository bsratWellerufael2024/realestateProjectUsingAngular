import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { BannerComponent } from '../banner/banner.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterOutlet } from '@angular/router';
//import { FooterComponent } from "../../../shared/components/footer/footer.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent, BannerComponent, FooterComponent ,RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
