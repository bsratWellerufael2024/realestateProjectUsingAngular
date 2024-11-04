import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { AuthService } from '../../../admin/services/admin-services.service';
import { CommonModule } from '@angular/common';



@Component({

  selector: 'app-login-component',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './login-component.component.html'

})

export class LoginComponentComponent {

  username: string = '';

  password: string = '';



  constructor(

    private authService: AuthService,

    private router: Router

  ) {}



  onSubmit(): void {

    if (this.username && this.password) {

      if (this.authService.login({username: this.username, password: this.password})) {

        // Successful login

        this.router.navigate(['/admin/dashboard']);

      } else {

        // Handle login error

        console.error('Login failed');

        // You might want to show an error message to the user

      }

    }

  }

}






