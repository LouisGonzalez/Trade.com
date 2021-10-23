import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalUserComponent } from './global-user.component';

describe('GlobalUserComponent', () => {
  let component: GlobalUserComponent;
  let fixture: ComponentFixture<GlobalUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
