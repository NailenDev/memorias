import { TestBed } from '@angular/core/testing';

import { TranslateConfig } from './translate-config';

describe('TranslateConfig', () => {
  let service: TranslateConfig;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranslateConfig);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
