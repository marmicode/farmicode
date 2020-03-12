import { Injectable } from '@angular/core';
import { Animal } from './animal';

@Injectable({
  providedIn: 'root'
})
export class Cart {
  private _animals: Animal[] = [];

  addAnimal(animal: Animal) {
    this._animals = [...this._animals, animal];
  }

  getAnimalList(): Animal[] {
    return this._animals;
  }
}
