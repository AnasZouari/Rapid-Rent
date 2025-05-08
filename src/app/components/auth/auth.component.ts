import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

declare var bootstrap: any;

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
  mobileNo: string='';
  confirmPassword: string='';
  user: any = null;
  authType: string = 'login';
  registerObj: any = {
    userId: 0,
    name: '',
    userRole: '',
    emailId: '',
    mobileNo: '',
    password: '',
    createdOn: '',
  };

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.user = this.authService.getUser();
  }

  setAuthType(type: 'login' | 'signup') {
    this.authType = type;
  }

  showModal(type: 'login' | 'signup') {
    this.setAuthType(type);
    const modalElement = document.getElementById('authModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }

  login() {
    this.authService.login(this.username.trim());
    this.user = this.authService.getUser();
    this.resetForm();
  }

  signup() {
    {
      if (this.password !== this.confirmPassword){
        alert("Passwords don't match");
        return;
      }
    }
    this.authService.signup(this.username.trim(), this.email.trim(), this.mobileNo.trim());
    this.user = this.authService.getUser();
    this.resetForm();
  }

  logout() {
    this.authService.logout();
    this.user = null;
  }
  private resetForm(){
    this.username='';
    this.password='';
    this.confirmPassword='';
    this.email='';
    this.mobileNo='';
  }
}
