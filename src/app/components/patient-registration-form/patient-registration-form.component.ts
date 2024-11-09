import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonInput,
  IonSelect,
  IonSelectOption,
  IonTextarea, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-patient-registration-form',
  standalone: true,
  templateUrl: './patient-registration-form.component.html',
  styleUrls: ['./patient-registration-form.component.scss'],
  imports: [IonButton, IonInput, IonSelect, IonSelectOption, IonTextarea, FormsModule, JsonPipe],
})
export class PatientRegistrationFormComponent {}
