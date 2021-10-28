import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyConfirmComponent } from './verify-confirm.component';

describe('VerifyConfirmComponent', () => {
  let component: VerifyConfirmComponent;
  let fixture: ComponentFixture<VerifyConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifyConfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
