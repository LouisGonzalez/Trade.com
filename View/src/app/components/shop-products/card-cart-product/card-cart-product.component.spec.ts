import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCartProductComponent } from './card-cart-product.component';

describe('CardCartProductComponent', () => {
  let component: CardCartProductComponent;
  let fixture: ComponentFixture<CardCartProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCartProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCartProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
