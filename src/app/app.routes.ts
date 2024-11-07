import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'patient-checkin',
    loadComponent: () => import('./patient-checkin/patient-checkin.page').then( m => m.PatientCheckinPage)
  },
  {
    path: 'waiting-list',
    loadComponent: () => import('./waiting-list/waiting-list.page').then( m => m.WaitingListPage)
  },
  {
    path: 'doctor-controls',
    loadComponent: () => import('./doctor-controls/doctor-controls.page').then( m => m.DoctorControlsPage)
  },
];
