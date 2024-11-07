import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-patient-checkin',
  templateUrl: './patient-checkin.page.html',
  styleUrls: ['./patient-checkin.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class PatientCheckinPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
