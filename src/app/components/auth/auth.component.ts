import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  username: string = '';
  password: string = '';
  email: string = '';
  user: any = null;
  authType: string = 'login';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.user = this.authService.getUser();
  }

  setAuthType(type: string) {
    this.authType = type;
  }

  login() {
    this.authService.login(this.username.trim());
    this.user = this.authService.getUser();
    this.username='';
    this.password='';
    this.email='';
  }

  signup() {
    this.authService.signup(this.username.trim(), this.email.trim());
    this.user = this.authService.getUser();
    this.username='';
    this.password='';
    this.email='';
  }

  logout() {
    this.authService.logout();
    this.user = null;
  }
}
