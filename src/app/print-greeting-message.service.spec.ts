import { TestBed } from '@angular/core/testing';

import { PrintGreetingMessageService } from './print-greeting-message.service';

describe('PrintGreetingMessageService', () => {
  let service: PrintGreetingMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrintGreetingMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
