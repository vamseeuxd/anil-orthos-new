import { Component } from '@angular/core';
import {
  IonApp,
  IonRouterOutlet,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonMenuButton,
  IonMenu,
  IonButton, IonItem, IonLabel } from '@ionic/angular/standalone';
import { DarkModeToggleComponent } from './components/dark-mode-toggle/dark-mode-toggle.component';
import { LogoutButtonComponent } from './components/logout-button/logout-button.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonLabel, IonItem,
    IonButton,
    IonContent,
    IonTitle,
    IonToolbar,
    IonHeader,
    IonApp,
    IonMenu,
    IonMenuButton,
    IonRouterOutlet,
    DarkModeToggleComponent,
    LogoutButtonComponent,
  ],
})
export class AppComponent {}
