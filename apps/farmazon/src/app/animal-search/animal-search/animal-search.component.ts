import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { Animal } from '../../cart/animal';
import { AnimalListModule } from '../animal-list/animal-list.component';
import { AnimalSearch } from '../animal-search.service';

@Component({
  selector: 'fz-animal-search',
  templateUrl: './animal-search.component.html',
  styleUrls: ['./animal-search.component.css']
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
