import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackServicesComponent } from './stack-services.component';

describe('StackServicesComponent', () => {
  let component: StackServicesComponent;
  let fixture: ComponentFixture<StackServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StackServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StackServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
