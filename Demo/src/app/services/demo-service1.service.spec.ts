import { TestBed } from '@angular/core/testing';

import { DemoService1Service } from './demo-service1.service';

describe('DemoService1Service', () => {
  let service: DemoService1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemoService1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
