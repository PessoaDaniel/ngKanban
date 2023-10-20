import { TestBed } from '@angular/core/testing';

import { ToastAlerltService } from './toast-alerlt.service';

describe('ToastAlerltService', () => {
  let service: ToastAlerltService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToastAlerltService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
