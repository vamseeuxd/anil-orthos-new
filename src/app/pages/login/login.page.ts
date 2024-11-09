import { Component, inject } from '@angular/core';
import { AsyncPipe, CommonModule, NgIf, TitleCasePipe } from '@angular/common';
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
  IonLabel,
  IonAvatar,
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/angular/standalone';
import {
  Auth,
  GoogleAuthProvider,
  signInWithPopup,
  user,
} from '@angular/fire/auth';
import { Router, RouterLink } from '@angular/router';
import { LoaderService } from 'src/app/services/loader/loader.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardContent,
    IonList,
    IonItem,
    IonLabel,
    IonButton,
    RouterLink,
    TitleCasePipe,
    AsyncPipe,
    NgIf,
  ],
})
export class LoginPage {
  authService = inject(AuthService);
}
