import { TestBed } from '@angular/core/testing';
import { AnimalType, createAnimal, Gender } from './animal';

import { Cart } from './cart.service';

describe('CartService', () => {
  let cart: Cart;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    cart = TestBed.inject(Cart);
  });

  it('should be created', () => {
    expect(cart).toBeTruthy();
  });

  it('should add animal', () => {
    const dolly = createAnimal({
      id: 'dolly',
      type: AnimalType.Sheep,
      gender: Gender.Other,
      price: 1000
    });
    const missy = createAnimal({
      id: 'missy',
      type: AnimalType.Cat,
      gender: Gender.Female,
      price: 300
    });
    const droopy = createAnimal({
      id: 'droopy',
      type: AnimalType.Dog,
      gender: Gender.Male,
      price: 100
    });

    cart.addAnimal(dolly);
    cart.addAnimal(missy);
    cart.addAnimal(droopy);

    expect(cart.getAnimalList()).toEqual([dolly, missy, droopy]);
  });
});
