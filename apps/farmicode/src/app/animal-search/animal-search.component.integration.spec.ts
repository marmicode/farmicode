import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Animal, AnimalType, createAnimal, Gender } from '../animal';
import { Cart } from '../cart.service';
import { AnimalListHarness } from './animal-list.component.harness';

import {
  AnimalSearchComponent,
  AnimalSearchModule
} from './animal-search.component';
import { AnimalSearchHarness } from './animal-search.component.harness';
import { AnimalSearch } from './animal-search.service';

describe('AnimalSearchComponent', () => {
  let component: AnimalSearchComponent;
  let fixture: ComponentFixture<AnimalSearchComponent>;
  let loader: HarnessLoader;
  let dolly: Animal;
  let missy: Animal;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AnimalSearchModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalSearchComponent);
    component = fixture.componentInstance;
    loader = TestbedHarnessEnvironment.loader(fixture);
    fixture.detectChanges();

    dolly = createAnimal({
      id: 'dolly',
      name: 'Dolly',
      type: AnimalType.Sheep,
      gender: Gender.Female,
      price: 1000
    });

    missy = createAnimal({
      id: 'missy',
      name: 'Missy',
      type: AnimalType.Cat,
      gender: Gender.Female,
      price: 300
    });
  });

  let animalSearch: AnimalSearch;
  beforeEach(() => (animalSearch = TestBed.inject(AnimalSearch)));

  let cart: Cart;
  beforeEach(() => (cart = TestBed.inject(Cart)));

  beforeEach(() => {
    jest.spyOn(animalSearch, 'search').mockReturnValue(of([dolly, missy]));
  });

  it('should search for animals', async () => {
    jest.spyOn(animalSearch, 'search').mockReturnValue(of([dolly, missy]));

    /* 🎬 Action! */
    await search('🐈|🐑');

    /* Check animal search service has been called properly. */
    expect(animalSearch.search).toHaveBeenCalledTimes(1);
    expect(animalSearch.search).toHaveBeenCalledWith({ keywords: '🐈|🐑' });

    /* Check that animals are displayed. */
    const animalListHarness = await loader.getHarness(AnimalListHarness);
    expect(await animalListHarness.getAnimalNames()).toEqual([
      'Dolly',
      'Missy'
    ]);
  });

  it('should buy animal', async () => {
    jest.spyOn(cart, 'addAnimal');

    /* 🎬 Action! */
    await search('🐈|🐑');

    const animalListHarness = await loader.getHarness(AnimalListHarness);
    await animalListHarness.buyFirstAnimal();

    expect(cart.addAnimal).toBeCalledTimes(1);
    expect(cart.addAnimal).toBeCalledWith(dolly);
  });

  async function search(keywords: string) {
    const harness = await TestbedHarnessEnvironment.harnessForFixture(
      fixture,
      AnimalSearchHarness
    );
    await harness.search(keywords);
  }
});
