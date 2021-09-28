import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddReportComponent } from './dialog-add-report.component';

describe('DialogAddReportComponent', () => {
  let component: DialogAddReportComponent;
  let fixture: ComponentFixture<DialogAddReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAddReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
