import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonInput,
  IonList,
  IonItem,
  IonLabel,
  IonCard,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
} from '@ionic/angular/standalone';
import { PatientService } from 'src/app/services/patient/patient.service';

@Component({
  selector: 'app-patient-autocomplete-list',
  standalone: true,
  templateUrl: './patient-autocomplete-list.component.html',
  styleUrls: ['./patient-autocomplete-list.component.scss'],
  imports: [
    IonItemOption,
    IonItemOptions,
    IonItemSliding,
    IonCard,
    IonLabel,
    IonItem,
    IonList,
    IonInput,
    FormsModule,
    AsyncPipe,
    NgFor,
    IonInput,
    NgIf,
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
