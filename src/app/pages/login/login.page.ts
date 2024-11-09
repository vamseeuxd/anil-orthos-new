import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonCard,
  IonIcon,
  IonCardContent,
  IonText,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonList,
  IonItem,
  IonLabel, IonAvatar, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import {
  Auth,
  GoogleAuthProvider,
  signInWithPopup,
  user,
} from '@angular/fire/auth';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonCol, IonRow, IonGrid, IonAvatar,
    IonLabel,
    IonItem,
    IonList,
    IonCardSubtitle,
    IonCardTitle,
    IonCardHeader,
    IonText,
    IonCardContent,
    IonIcon,
    IonCard,
    IonButton,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    RouterLink,
  ],
})
export class LoginPage {
  auth = inject(Auth);
  user$ = user(this.auth);
  router = inject(Router);

  async login() {
    const user = await signInWithPopup(this.auth, new GoogleAuthProvider());
    this.router.navigate(['/home']);
  }

  logout() {
    this.auth.signOut();
  }
}
