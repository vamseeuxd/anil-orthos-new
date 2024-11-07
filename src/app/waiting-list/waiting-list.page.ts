import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-waiting-list',
  templateUrl: './waiting-list.page.html',
  styleUrls: ['./waiting-list.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class WaitingListPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
