import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAllUsersComponent } from './search-all-users.component';

describe('SearchAllUsersComponent', () => {
  let component: SearchAllUsersComponent;
  let fixture: ComponentFixture<SearchAllUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchAllUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAllUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
