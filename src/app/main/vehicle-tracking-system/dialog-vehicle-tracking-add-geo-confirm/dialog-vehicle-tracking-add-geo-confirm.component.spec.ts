import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogVehicleTrackingAddGeoConfirmComponent } from './dialog-vehicle-tracking-add-geo-confirm.component';

describe('DialogVehicleTrackingAddGeoConfirmComponent', () => {
  let component: DialogVehicleTrackingAddGeoConfirmComponent;
  let fixture: ComponentFixture<DialogVehicleTrackingAddGeoConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogVehicleTrackingAddGeoConfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogVehicleTrackingAddGeoConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
