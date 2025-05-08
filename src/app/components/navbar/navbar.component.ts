import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  user: any = null;
  constructor(private authService: AuthService){
    this.user= this.authService.getUser();
  }
  openAuthModal(type: 'login' | 'signup'){
    const event = new CustomEvent('openAuthModal', {detail: type});
    window.dispatchEvent(event);
  }
  logout(){
    this.authService.logout();
    this.user= null;
  }
}
