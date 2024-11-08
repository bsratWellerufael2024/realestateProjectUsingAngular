import { Component } from '@angular/core';
import { HeaderComponent } from '../../../components/header/header.component';

@Component({
  selector: 'app-registration-component',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './registration-component.component.html',
  styleUrl: './registration-component.component.css',
})
export class RegistrationComponentComponent {}
