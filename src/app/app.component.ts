import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AuthComponent,
    FooterComponent,
    NavbarComponent,
    FormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('authRef') authComponent!: AuthComponent;
  ngAfterViewInit() {
    window.addEventListener('openAuthModal', (event: any) => {
      this.openAuthModal(event.detail);
    });
  }

  openAuthModal(type: 'login' | 'signup') {
    this.authComponent.showModal(type);
  }
  title = 'RapidRent';
}
