import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { AnimalType, createAnimal, Gender } from '../animal';
import { Cart } from '../cart.service';

import { AnimalSearchComponent } from './animal-search.component';
import { AnimalSearch } from './animal-search.service';

describe('AnimalSearchComponent', () => {
  let component: AnimalSearchComponent;
  let fixture: ComponentFixture<AnimalSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AnimalSearchComponent],
      providers: [
        {
          provide: AnimalSearch,
          useValue: {
            search: jest.fn()
          }
        }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  let animalSearch: AnimalSearch;
  beforeEach(() => (animalSearch = TestBed.inject(AnimalSearch)));

  let cart: Cart;
  beforeEach(() => (cart = TestBed.inject(Cart)));

  it('should search for animals', () => {
    const dolly = createAnimal({
      id: 'dolly',
      name: 'Dolly',
      type: AnimalType.Sheep,
      gender: Gender.Female,
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
    search('🐈|🐑');
    fixture.detectChanges();

    /* Check animal search service has been called properly. */
    expect(animalSearch.search).toHaveBeenCalledTimes(1);
    expect(animalSearch.search).toHaveBeenCalledWith({ keywords: '🐈|🐑' });

    /* Check that animals are passed to animal list component. */
    const animalListEl = fixture.debugElement.query(By.css('fz-animal-list'));
    expect(animalListEl.properties.animals).toEqual([dolly, missy]);
  });

  it('should add animal to cart on buy', () => {
    const animal = createAnimal({ name: 'Dolly' });

    jest.spyOn(cart, 'addAnimal');

    /* Trigger animalBuy output. */
    const animalListEl = fixture.debugElement.query(By.css('fz-animal-list'));
    animalListEl.listeners
      .find(listener => listener.name === 'animalBuy')
      .callback(animal);

    expect(cart.addAnimal).toBeCalledTimes(1);
    expect(cart.addAnimal).toBeCalledWith(animal);
  });

  function search(keywords: string) {
    component.searchForm.patchValue({ keywords });
    component.search();
  }
});
