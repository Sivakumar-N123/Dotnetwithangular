import { TestBed } from '@angular/core/testing';

import { StudentAppserviceService } from './student-appservice.service';

describe('StudentAppserviceService', () => {
  let service: StudentAppserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentAppserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
