import { Injectable } from '@angular/core';
import { Animal } from './animal';

@Injectable({
  providedIn: 'root'
})
export class Cart {
  /**
   * @deprecated 🚧 Work in progress.
   */
  addAnimal(animal: Animal) {
    throw new Error('🚧 work in progress!');
  }

  /**
   * @deprecated 🚧 Work in progress.
   */
  getAnimalList(): Animal[] {
    throw new Error('🚧 work in progress!');
  }
}
