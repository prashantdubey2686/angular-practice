import { TestBed } from '@angular/core/testing';

import { NewserviceService } from './newservice.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('NewserviceService', () => {
  let service: NewserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [HttpClient, HttpHandler]});
    service = TestBed.inject(NewserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
