import { Component, HostBinding, HostListener, inject } from '@angular/core';
import { IonItem } from '@ionic/angular/standalone';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-logout-button',
  standalone: true,
  templateUrl: './logout-button.component.html',
  styleUrls: ['./logout-button.component.scss'],
  imports: [IonItem],
})
export class LogoutButtonComponent {
  authService = inject(AuthService);
  @HostBinding('style.display') display = '';
  @HostListener('click')
  async onClick() {
    await this.authService.logout();
  }
  constructor() {
    this.authService.user$.subscribe((user) => {
      if (user) {
        this.display = '';
      } else {
        this.display = 'none';
      }
    });
  }
}
