import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonNavLink,
  IonItem,
  IonLabel,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-patient-checkin',
  templateUrl: './patient-checkin.page.html',
  styleUrls: ['./patient-checkin.page.scss'],
  standalone: true,
  imports: [
    IonLabel,
    IonItem,
    IonNavLink,
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
  ],
})
export class PatientCheckinPage {
  constructor() {}
}
