import { Component, HostBinding, HostListener, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonButton, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-dark-mode-toggle',
  standalone: true,
  templateUrl: './dark-mode-toggle.component.html',
  imports: [IonIcon, IonButton, FormsModule],
  styleUrls: ['./dark-mode-toggle.component.scss'],
})
export class DarkModeToggleComponent implements OnInit {
  @HostBinding('style.color') color = 'white';
  @HostBinding('style.borderColor') borderColor = '#3f3f3f';
  paletteToggle = false;

  ngOnInit() {
    this.setupDarkModeListener();
  }

  @HostListener('click')
  onClick() {
    this.togglePalette();
  }

  private setupDarkModeListener() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    this.applyDarkMode(prefersDark.matches);
    prefersDark.addEventListener('change', (event) =>
      this.applyDarkMode(event.matches)
    );
  }

  private applyDarkMode(isDarkMode: boolean) {
    this.paletteToggle = isDarkMode;
    this.updatePalette();
  }

  private togglePalette() {
    this.paletteToggle = !this.paletteToggle;
    this.updatePalette();
  }

  private updatePalette() {
    this.color = this.paletteToggle ? 'white' : 'black';
    this.borderColor = this.paletteToggle ? '#3f3f3f' : '#e5e5e5';
    document.documentElement.classList.toggle('ion-palette-dark', this.paletteToggle);
  }
}

