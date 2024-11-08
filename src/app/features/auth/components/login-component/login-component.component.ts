import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/service/auth-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../../components/header/header.component';

@Component({
  selector: 'app-login-component',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent],
  templateUrl: './login-component.component.html',
})
export class LoginComponentComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    if (this.username && this.password) {
      this.authService.login(this.username, this.password).subscribe({
        next: (success) => {
          this.router.navigate(['/admin/dashboard']);
        },
        error: (error) => {
          console.error('Login failed', error);
        },
      });
    }
  }
}
