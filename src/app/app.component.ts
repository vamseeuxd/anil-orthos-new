import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { DarkModeToggleComponent } from './dark-mode-toggle/dark-mode-toggle.component';
import { LogoutButtonComponent } from './logout-button/logout-button.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, DarkModeToggleComponent, LogoutButtonComponent],
})
export class AppComponent{

}
