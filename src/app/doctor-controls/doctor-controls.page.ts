import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-doctor-controls',
  templateUrl: './doctor-controls.page.html',
  styleUrls: ['./doctor-controls.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class DoctorControlsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
