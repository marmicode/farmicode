import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { AnimalType, createAnimal, Gender } from '../animal';
import { AnimalListComponent } from './animal-list.component';

import {
  AnimalSearchComponent,
  AnimalSearchModule
} from './animal-search.component';
import { AnimalSearch } from './animal-search.service';

describe('AnimalSearchComponent', () => {
  let component: AnimalSearchComponent;
  let fixture: ComponentFixture<AnimalSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AnimalSearchModule]
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
    component.search('🐈|🐑');
    fixture.detectChanges();

    /* Check animal search service has been called properly. */
    expect(animalSearch.search).toHaveBeenCalledTimes(1);
    expect(animalSearch.search).toHaveBeenCalledWith({ keywords: '🐈|🐑' });

    /* Check that animals are passed to animal list component.
     * We can't do better for now as the component is not displaying animals yet. */
    const animalListEl = fixture.debugElement.query(
      By.directive(AnimalListComponent)
    );
    expect(animalListEl.componentInstance.animals).toEqual([dolly, missy]);
  });
});
