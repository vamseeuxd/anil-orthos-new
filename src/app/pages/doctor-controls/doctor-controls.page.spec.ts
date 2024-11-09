import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DoctorControlsPage } from './doctor-controls.page';

describe('DoctorControlsPage', () => {
  let component: DoctorControlsPage;
  let fixture: ComponentFixture<DoctorControlsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorControlsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
