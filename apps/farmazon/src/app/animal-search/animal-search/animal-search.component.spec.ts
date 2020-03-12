import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { AnimalType, createAnimal, Gender } from '../../cart/animal';
import { AnimalSearch } from '../animal-search.service';

import { AnimalSearchComponent } from './animal-search.component';

describe('AnimalSearchComponent', () => {
  let component: AnimalSearchComponent;
  let fixture: ComponentFixture<AnimalSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AnimalSearchComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  let animalSearch: AnimalSearch;
  beforeEach(() => (animalSearch = TestBed.inject(AnimalSearch)));

  it('should search for animals', () => {
    const dolly = createAnimal({
      id: 'dolly',
      name: 'Dolly',
      type: AnimalType.Sheep,
      gender: Gender.Other,
      price: 1000
    });

    const missy = createAnimal({
      id: 'missy',
      name: 'Missy',
      type: AnimalType.Cat,
      gender: Gender.Female,
      price: 300
    });

    jest.spyOn(animalSearch, 'search').mockReturnValue(of([dolly, missy]));

    /* 🎬 Action! */
    component.search('🐈');
    fixture.detectChanges();

    /* Check animal search service has been called properly. */
    expect(animalSearch.search).toHaveBeenCalledTimes(1);
    expect(animalSearch.search).toHaveBeenCalledWith({ keywords: '🐈' });

    /* Check that animals are passed to animal list component. */
    const animalListEl = fixture.debugElement.query(By.css('fz-animal-list'));
    expect(animalListEl.properties.animals).toEqual([dolly, missy]);
  });
});
