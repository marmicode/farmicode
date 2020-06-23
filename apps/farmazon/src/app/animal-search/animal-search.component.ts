import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Animal } from '../animal';
import { Cart } from '../cart.service';
import { AnimalListModule } from './animal-list.component';
import { AnimalSearch } from './animal-search.service';

@Component({
  selector: 'fz-animal-search',
  template: `
    <form [formGroup]="searchForm" (ngSubmit)="search()">
      <input formControlName="keywords" type="text" />
      <button type="submit">SEARCH</button>
    </form>

    <fz-animal-list
      [animals]="animals$ | async"
      (animalBuy)="addToCart($event)"
    ></fz-animal-list>
  `
})
export class AnimalSearchComponent {
  animals$: Observable<Animal[]>;
  searchForm = new FormGroup({
    keywords: new FormControl()
  });

  private _keywords$ = new Subject<string>();

  constructor(private _animalSearch: AnimalSearch, private _cart: Cart) {
    this.animals$ = this._keywords$.pipe(
      switchMap(keywords => this._animalSearch.search({ keywords }))
    );
  }

  search() {
    this._keywords$.next(this.searchForm.value.keywords);
  }

  addToCart(animal: Animal) {
    this._cart.addAnimal(animal);
  }
}

@NgModule({
  declarations: [AnimalSearchComponent],
  imports: [CommonModule, AnimalListModule, ReactiveFormsModule],
  exports: [AnimalSearchComponent]
})
export class AnimalSearchModule {}
