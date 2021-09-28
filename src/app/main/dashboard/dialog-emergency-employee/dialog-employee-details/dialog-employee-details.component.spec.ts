import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEmployeeDetailsComponent } from './dialog-employee-details.component';

describe('DialogEmployeeDetailsComponent', () => {
  let component: DialogEmployeeDetailsComponent;
  let fixture: ComponentFixture<DialogEmployeeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEmployeeDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEmployeeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
