import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogFormActionProtocolsComponent } from './dialog-form-action.component';

describe('DialogFormActionProtocolsComponent', () => {
  let component: DialogFormActionProtocolsComponent;
  let fixture: ComponentFixture<DialogFormActionProtocolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogFormActionProtocolsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogFormActionProtocolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
