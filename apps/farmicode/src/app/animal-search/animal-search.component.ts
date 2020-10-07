import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Animal } from '../animal';
import { AnimalListModule } from './animal-list.component';
import { AnimalSearch } from './animal-search.service';

@Component({
  selector: 'fz-animal-search',
  template: `
    <fz-animal-list [animals]="animals$ | async"></fz-animal-list>
  `
})
export class AnimalSearchComponent {
  animals$: Observable<Animal[]>;

  private _keywords$ = new Subject<string>();

  constructor(private _animalSearch: AnimalSearch) {
    this.animals$ = this._keywords$.pipe(
      switchMap(keywords => this._animalSearch.search({ keywords }))
    );
  }

  search(keywords: string) {
    this._keywords$.next(keywords);
  }
}

@NgModule({
  declarations: [AnimalSearchComponent],
  imports: [CommonModule, AnimalListModule],
  exports: [AnimalSearchComponent]
})
export class AnimalSearchModule {}
