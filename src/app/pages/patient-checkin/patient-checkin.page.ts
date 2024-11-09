import { Component, OnInit } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonButton,
  IonModal,
  IonFab,
  IonFabButton,
  IonIcon,
} from '@ionic/angular/standalone';
import { PatientRegistrationFormComponent } from '../../components/patient-registration-form/patient-registration-form.component';
import { PatientAutocompleteListComponent } from 'src/app/components/patient-autocomplete-list/patient-autocomplete-list.component';
import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';

@Component({
  selector: 'app-patient-checkin',
  templateUrl: './patient-checkin.page.html',
  styleUrls: ['./patient-checkin.page.scss'],
  standalone: true,
  imports: [
    IonIcon,
    IonFabButton,
    IonFab,
    IonModal,
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButton,
    PatientAutocompleteListComponent,
    PatientRegistrationFormComponent,
  ],
})
export class PatientCheckinPage implements OnInit {
  presentingElement: any;

  constructor() {
    addIcons({ add });
  }

  ngOnInit() {
    this.presentingElement = document.querySelector('.ion-page');
  }
}
