import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogFormKeyWordsComponent } from './dialog-form-key-words.component';

describe('DialogFormKeyWordsComponent', () => {
  let component: DialogFormKeyWordsComponent;
  let fixture: ComponentFixture<DialogFormKeyWordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogFormKeyWordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogFormKeyWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
