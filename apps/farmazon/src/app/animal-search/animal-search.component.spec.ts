import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { AnimalType, createAnimal, Gender } from '../animal';
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
  });

  let animalSearch: AnimalSearch;
  beforeEach(() => (animalSearch = TestBed.inject(AnimalSearch)));

  it('should search for animals', async () => {
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

  async function search(keywords: string) {
    const harness = await TestbedHarnessEnvironment.harnessForFixture(
      fixture,
      AnimalSearchHarness
    );
    await harness.search(keywords);
  }
});
