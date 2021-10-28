import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddCreditComponent } from './modal-add-credit.component';

describe('ModalAddCreditComponent', () => {
  let component: ModalAddCreditComponent;
  let fixture: ComponentFixture<ModalAddCreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddCreditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
