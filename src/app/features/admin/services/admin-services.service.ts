import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated(): boolean {
    return localStorage.getItem('adminAuthenticated') === 'true';
  }

  login(credentials: {username: string, password: string}): boolean {
    // Add your authentication logic here
    // This is a simple example - you should implement proper authentication
    if (credentials.username === 'admin' && credentials.password === 'password') {
      localStorage.setItem('adminAuthenticated', 'true');
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem('adminAuthenticated');
  }
}
