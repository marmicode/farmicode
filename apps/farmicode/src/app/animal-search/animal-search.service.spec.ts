import { TestBed } from '@angular/core/testing';

import { AnimalSearch } from './animal-search.service';

describe('AnimalSearchService', () => {
  let service: AnimalSearch;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimalSearch);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
