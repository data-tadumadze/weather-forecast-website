import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;
  constructor() {}
  login(username: string, password: string): boolean {
    if (username === 'Data' && password === 'Data123') {
      this.isAuthenticated = true;
      return true;
    }
    return false;
  }
  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
