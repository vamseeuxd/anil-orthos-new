import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PatientCheckinPage } from './patient-checkin.page';

describe('PatientCheckinPage', () => {
  let component: PatientCheckinPage;
  let fixture: ComponentFixture<PatientCheckinPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientCheckinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
