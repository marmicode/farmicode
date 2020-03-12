import { TestBed } from '@angular/core/testing';
import { Animal, AnimalType, createAnimal, Gender } from './animal';

import { Cart } from './cart.service';

describe('CartService', () => {
  let cart: Cart;
  let dolly: Animal;
  let missy: Animal;
  let droopy: Animal;
  let observer: jest.Mock;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    cart = TestBed.inject(Cart);
  });

  beforeEach(() => {
    dolly = createAnimal({
      id: 'dolly',
      name: 'Dolly',
      type: AnimalType.Sheep,
      gender: Gender.Other,
      price: 1000
    });
    missy = createAnimal({
      id: 'missy',
      name: 'Missy',
      type: AnimalType.Cat,
      gender: Gender.Female,
      price: 300
    });
    droopy = createAnimal({
      id: 'droopy',
      name: 'Droopy',
      type: AnimalType.Dog,
      gender: Gender.Male,
      price: 100
    });

    observer = jest.fn();
  });

  it('should be created', () => {
    expect(cart).toBeTruthy();
  });

  it('should add animal', () => {
    cart.addAnimal(dolly);
    cart.addAnimal(missy);
    cart.addAnimal(droopy);

    expect(cart.getAnimalList()).toEqual([dolly, missy, droopy]);
  });

  it('should notify observers with animals list when they subscribe', () => {
    cart.addAnimal(dolly);
    cart.addAnimal(missy);
    cart.addAnimal(droopy);

    cart.animals$.subscribe(observer);

    expect(observer).toHaveBeenCalledTimes(1);
    expect(observer).toHaveBeenCalledWith([dolly, missy, droopy]);
  });

  it('should notify observers when adding animals', () => {
    cart.animals$.subscribe(observer);

    cart.addAnimal(dolly);
    cart.addAnimal(missy);
    cart.addAnimal(droopy);

    expect(observer).toHaveBeenCalledTimes(4);
    expect(observer.mock.calls).toEqual([
      [[]],
      [[dolly]],
      [[dolly, missy]],
      [[dolly, missy, droopy]]
    ]);
  });
});
