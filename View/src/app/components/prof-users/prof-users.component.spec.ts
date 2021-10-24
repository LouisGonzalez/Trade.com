import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfUsersComponent } from './prof-users.component';

describe('ProfUsersComponent', () => {
  let component: ProfUsersComponent;
  let fixture: ComponentFixture<ProfUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
