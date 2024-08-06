import { TestBed } from '@angular/core/testing';

import { CompradorGuard } from './comprador.guard';

describe('NormalGuard', () => {
  let guard: CompradorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CompradorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});




/*import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { compradorGuard } from './comprador.guard';

describe('compradorGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => compradorGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});*/
