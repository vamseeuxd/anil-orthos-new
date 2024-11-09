import { Component, inject, OnInit } from '@angular/core';
import {
  IonApp,
  IonRouterOutlet,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonMenuButton,
  IonMenu,
  IonButton,
  IonItem,
  IonLabel,
} from '@ionic/angular/standalone';
import { DarkModeToggleComponent } from './components/dark-mode-toggle/dark-mode-toggle.component';
import { LogoutButtonComponent } from './components/logout-button/logout-button.component';
import { SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [
    DarkModeToggleComponent,
    LogoutButtonComponent,
    IonApp,
    IonMenu,
    IonMenuButton,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonRouterOutlet,
    IonItem,
    IonMenu,
  ],
})
export class AppComponent implements OnInit {
  private swUpdate = inject(SwUpdate);
  ngOnInit() {
    if (!this.swUpdate.isEnabled) {
      return;
    }
    const updatesAvailable = this.swUpdate.versionUpdates.pipe(
      filter((evt): evt is VersionReadyEvent => evt.type === 'VERSION_READY')
    );
    updatesAvailable.subscribe(() => {
      this.activateNewVersion();
    });
  }
  activateNewVersion(): void {
    window.location.reload();
  }
}
