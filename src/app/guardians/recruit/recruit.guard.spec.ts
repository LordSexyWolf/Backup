import { TestBed } from '@angular/core/testing';

import { RecruitGuard } from './recruit.guard';

describe('RecruitGuard', () => {
  let guard: RecruitGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RecruitGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
