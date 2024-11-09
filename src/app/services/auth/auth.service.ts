import { inject, Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup, user } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { LoaderService } from '../loader/loader.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  alertController = inject(AlertController);
  auth = inject(Auth);
  user$ = user(this.auth);
  router = inject(Router);
  loaderService = inject(LoaderService);

  async logout() {
    const alert = await this.alertController.create({
      header: 'Confirmation',
      message: 'Are you sure ! Do you want to Logout?',
      buttons: [
        {
          text: 'Yes',
          handler: async () => {
            const loaderId = this.loaderService.show();
            await this.auth.signOut();
            await this.router.navigate(['/login']);
            this.loaderService.hide(loaderId);
          },
        },
        'No',
      ],
    });
    await alert.present();
  }
  async login() {
    const loaderId = this.loaderService.show();
    const user = await signInWithPopup(this.auth, new GoogleAuthProvider());
    await this.router.navigate(['/home']);
    this.loaderService.hide(loaderId);
  }
}
