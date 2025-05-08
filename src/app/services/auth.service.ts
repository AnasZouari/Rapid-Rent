import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: any = null;

  login(username: string) {
    this.currentUser = { username };
    console.log('User logged in:', this.currentUser);
  }

  signup(username: string, email: string, mobileNo: String) {
    this.currentUser = { username, email, mobileNo };
    console.log('User signed up:', this.currentUser);
  }

  logout() {
    console.log('User logged out:', this.currentUser);
    this.currentUser = null;
  }

  getUser() {
    return this.currentUser;
  }
}
