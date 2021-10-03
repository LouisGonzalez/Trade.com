import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackProductComponent } from './stack-product.component';

describe('StackProductComponent', () => {
  let component: StackProductComponent;
  let fixture: ComponentFixture<StackProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StackProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StackProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
