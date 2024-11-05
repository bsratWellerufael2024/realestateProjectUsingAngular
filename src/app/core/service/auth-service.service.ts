import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authenticated = false;

  isAuthenticated(): boolean {
    // In a real application, you might want to check a JWT token
    // or session storage here
    return this.authenticated;
  }

  login(username: string, password: string): Observable<any> {
    this.authenticated = true;
    return new Observable(subscriber => {
      subscriber.next({ success: true });
      subscriber.complete();
    });
  }

  logout(): void {
    this.authenticated = false;
  }
}

