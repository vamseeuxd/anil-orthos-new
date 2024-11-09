import { Routes } from '@angular/router';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  {
    path: 'home', canActivate: [authGuard],
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'patient-checkin', canActivate: [authGuard],
    loadComponent: () => import('./pages/patient-checkin/patient-checkin.page').then( m => m.PatientCheckinPage)
  },
  {
    path: 'waiting-list', canActivate: [authGuard],
    loadComponent: () => import('./pages/waiting-list/waiting-list.page').then( m => m.WaitingListPage)
  },
  {
    path: 'doctor-controls', canActivate: [authGuard],
    loadComponent: () => import('./pages/doctor-controls/doctor-controls.page').then( m => m.DoctorControlsPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
];
