import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalVerifyComponent } from './modal-verify.component';

describe('ModalVerifyComponent', () => {
  let component: ModalVerifyComponent;
  let fixture: ComponentFixture<ModalVerifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalVerifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
