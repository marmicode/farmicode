import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { Animal } from '../animal';
import { AnimalListModule } from './animal-list.component';
import { AnimalSearch } from './animal-search.service';

@Component({
  selector: 'fz-animal-search',
  template: `
    <fz-animal-list [animals]="animals"></fz-animal-list>
  `
})
export class AnimalSearchComponent {
  animals: Animal[];

  constructor(private _animalSearch: AnimalSearch) {}

  search(keywords: string) {
    this._animalSearch
      .search({ keywords })
      .subscribe(animals => (this.animals = animals));
  }
}

@NgModule({
  declarations: [AnimalSearchComponent],
  imports: [CommonModule, AnimalListModule],
  exports: [AnimalSearchComponent]
})
export class AnimalSearchModule {}
