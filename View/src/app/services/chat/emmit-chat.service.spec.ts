import { TestBed } from '@angular/core/testing';

import { EmmitChatService } from './emmit-chat.service';

describe('EmmitChatService', () => {
  let service: EmmitChatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmmitChatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
