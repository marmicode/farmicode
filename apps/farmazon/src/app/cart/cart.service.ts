import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Animal } from './animal';

@Injectable({
  providedIn: 'root'
})
export class Cart {
  private _animals$ = new BehaviorSubject<Animal[]>([]);

  get animals$(): Observable<Animal[]> {
    return this._animals$.asObservable();
  }

  addAnimal(animal: Animal) {
    this._animals$.next([...this._animals$.value, animal]);
  }

  /**
   * @deprecated use {@Link Cart.animals$} instead.
   */
  getAnimalList(): Animal[] {
    return this._animals$.value;
  }
}
