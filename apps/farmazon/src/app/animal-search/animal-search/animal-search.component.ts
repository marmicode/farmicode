import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Animal } from '../../cart/animal';
import { AnimalListModule } from '../animal-list/animal-list.component';
import { AnimalSearch } from '../animal-search.service';

@Component({
  selector: 'fz-animal-search',
  templateUrl: './animal-search.component.html',
  styleUrls: ['./animal-search.component.css']
})
export class AnimalSearchComponent {
  animals$: Observable<Animal[]>;
  searchForm = new FormGroup({
    keywords: new FormControl()
  });

  private _keywords$ = new Subject<string>();

  constructor(private _animalSearch: AnimalSearch) {
    this.animals$ = this._keywords$.pipe(
      switchMap(keywords => this._animalSearch.search({ keywords }))
    );
  }

  search() {
    this._keywords$.next(this.searchForm.value.keywords);
  }
}

@NgModule({
  declarations: [AnimalSearchComponent],
  imports: [CommonModule, AnimalListModule, ReactiveFormsModule],
  exports: [AnimalSearchComponent]
})
export class AnimalSearchModule {}
