import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonInput,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonCard,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonModal,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonFabButton,
  IonFab,
  IonIcon,
} from '@ionic/angular/standalone';
import { PatientService } from 'src/app/services/patient/patient.service';
import { PatientRegistrationFormComponent } from '../patient-registration-form/patient-registration-form.component';

@Component({
  selector: 'app-patient-autocomplete-list',
  standalone: true,
  templateUrl: './patient-autocomplete-list.component.html',
  styleUrls: ['./patient-autocomplete-list.component.scss'],
  imports: [
    IonIcon,
    IonFab,
    IonFabButton,
    IonButtons,
    IonTitle,
    IonToolbar,
    IonHeader,
    IonModal,
    IonItemOption,
    IonItemOptions,
    IonItemSliding,
    IonCard,
    IonButton,
    IonLabel,
    IonItem,
    IonList,
    IonContent,
    IonInput,
    FormsModule,
    IonInput,
    CommonModule,
    PatientRegistrationFormComponent,
  ],
})
export class PatientAutocompleteListComponent {
  patientService = inject(PatientService);
  searchTerm = '';
  searchResults = this.patientService.searchResults$;
  onSearch(text: string) {
    this.patientService.updateSearchText(text);
  }
}
