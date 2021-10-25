import { TestBed } from '@angular/core/testing';

import { SearchAllUsersService } from './search-all-users.service';

describe('SearchAllUsersService', () => {
  let service: SearchAllUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchAllUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
