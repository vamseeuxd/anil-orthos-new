import { bootstrapApplication } from '@angular/platform-browser';
import {
  RouteReuseStrategy,
  provideRouter,
  withPreloading,
  PreloadAllModules,
  withHashLocation,
} from '@angular/router';
import {
  IonicRouteStrategy,
  provideIonicAngular,
} from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { isDevMode } from '@angular/core';
import { provideServiceWorker } from '@angular/service-worker';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular({ mode: 'md' }),
    provideRouter(
      routes,
      withPreloading(PreloadAllModules),
      withHashLocation()
    ),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'anil-orthos',
        appId: '1:856435712:web:1d15e83d5ab28f479ffce5',
        storageBucket: 'anil-orthos.firebasestorage.app',
        apiKey: 'AIzaSyBrWRFB-9QKb74j-FV182e4Rh4A1JRLOWs',
        authDomain: 'anil-orthos.firebaseapp.com',
        messagingSenderId: '856435712',
      })
    ),
    provideAuth(() => getAuth()),
    {
      provide: FIREBASE_OPTIONS,
      useValue: {
        projectId: 'anil-orthos',
        appId: '1:856435712:web:1d15e83d5ab28f479ffce5',
        storageBucket: 'anil-orthos.firebasestorage.app',
        apiKey: 'AIzaSyBrWRFB-9QKb74j-FV182e4Rh4A1JRLOWs',
        authDomain: 'anil-orthos.firebaseapp.com',
        messagingSenderId: '856435712',
      },
    },
    provideFirestore(() => getFirestore()),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
});
