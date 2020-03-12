import { Injectable } from '@angular/core';
import { Animal } from './animal';

@Injectable({
  providedIn: 'root'
})
export class Cart {
  private _animals: Animal[] = [];

  /**
   * @deprecated 🚧 Work in progress.
   */
  addAnimal(animal: Animal) {
    this._animals = [...this._animals, animal];
  }

  /**
   * @deprecated 🚧 Work in progress.
   */
  getAnimalList(): Animal[] {
    return this._animals;
  }
}
