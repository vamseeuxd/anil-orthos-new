import { Component, HostBinding, HostListener, inject, OnInit } from '@angular/core';
import { Auth, user } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { IonLabel, IonItem } from '@ionic/angular/standalone';

@Component({
  selector: 'app-logout-button',
  standalone: true,
  templateUrl: './logout-button.component.html',
  styleUrls: ['./logout-button.component.scss'],
  imports: [IonItem, IonLabel],
})
export class LogoutButtonComponent {
  auth = inject(Auth);
  user$ = user(this.auth);
  router = inject(Router);
  @HostBinding('style.display') display = 'inline-block';
  @HostListener('click')
  async onClick() {
    await this.auth.signOut();
    this.router.navigate(['/login']);
  }
  constructor(){
    this.user$.subscribe(user=>{
      if(user){
        this.display = 'inline-block';
      }else{
        this.display = 'none';
      }
    })
  }
}
