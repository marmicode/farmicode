import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AnimalType, createAnimal } from '../animal';

import { AnimalSearch } from './animal-search.service';

describe('AnimalSearchService', () => {
  let animalSearch: AnimalSearch;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    animalSearch = TestBed.inject(AnimalSearch);
  });

  let httpController: HttpTestingController;
  beforeEach(() => (httpController = TestBed.inject(HttpTestingController)));

  afterEach(() => httpController.verify());

  it('should query api', () => {
    const observer = jest.fn();
    animalSearch.search({ keywords: '🐶' }).subscribe(observer);

    const request = httpController.expectOne(req => req.url.endsWith('/'));
    request.flush([
      {
        type: 'dog',
        name: 'Rocket',
        bornAt: '2020-01-01'
      }
    ]);

    expect(request.request.params.get('q')).toEqual('🐶');

    expect(observer).toBeCalledTimes(1);
    expect(observer).toBeCalledWith([
      createAnimal({
        type: AnimalType.Dog,
        name: 'Rocket',
        bornAt: new Date(Date.UTC(2020, 0, 1))
      })
    ]);
  });
});
